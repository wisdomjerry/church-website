"use client";
import { useState, useEffect, useCallback } from "react";
import { Users, Heart, PlayCircle, Calendar, MessageCircle } from "lucide-react";

const features = [
  { icon: <Users size={28}/>, title: "New Here?", sub: "Plan your visit", tag: "Sep 20" },
  { icon: <Heart size={28}/>, title: "Our Ministries", sub: "Connect with us", tag: "Oct 27" },
  { icon: <PlayCircle size={28}/>, title: "Watch Online", sub: "Join live stream", tag: "Nov 05" },
  { icon: <Calendar size={28}/>, title: "Church Events", sub: "See what's coming", tag: "Dec 12" },
  { icon: <MessageCircle size={28}/>, title: "Get Involved", sub: "Join a small group", tag: "Dec 25" },
];

export default function FeatureCards() {
  const [cardPage, setCardPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate how many total "steps" we can take. 
  // Since we show 2 cards, we can scroll (Total - 1) times.
  const maxSteps = features.length - 1;

  const nextCard = useCallback(() => {
    setCardPage((prev) => (prev >= maxSteps ? 0 : prev + 1));
  }, [maxSteps]);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextCard();
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(interval);
  }, [nextCard, isPaused]);

  return (
    <section 
      className="relative z-40 max-w-6xl mx-auto px-6 -mt-16 md:-mt-20" // Pushed down slightly
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container for the cards */}
      <div className="overflow-hidden rounded-xl py-4">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${cardPage * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}%)` }}
        >
          {features.map((card, i) => (
            <div key={i} className="min-w-full md:min-w-[50%] p-4">
              <div className="bg-white p-8 rounded-md shadow-2xl flex items-center gap-6 border-b-4 border-orange-600 hover:shadow-orange-100 transition-all duration-300 group">
                {/* Date Box */}
                <div className="flex-shrink-0 text-center">
                   <div className="border border-orange-600 p-2 rounded-md transition-colors group-hover:bg-orange-50">
                      <span className="block text-[10px] uppercase font-bold text-orange-600">{card.tag.split(' ')[0]}</span>
                      <span className="block text-xl font-black text-gray-800">{card.tag.split(' ')[1]}</span>
                   </div>
                   <div className="bg-orange-600 text-white text-[9px] font-bold py-1 px-2 rounded-b-md mt-[-2px]">
                      8:00 PM
                   </div>
                </div>

                <div className="flex-grow">
                  <h4 className="font-black uppercase text-base tracking-tight text-gray-900 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-1">{card.sub}</p>
                  <p className="text-orange-600 text-[11px] font-bold uppercase mt-3 cursor-pointer inline-block border-b border-transparent hover:border-orange-600">
                    Event Details +
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 mt-4">
        {/* We create dots based on the number of possible scroll positions */}
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCardPage(index)}
            className={`transition-all duration-300 rounded-full ${
              cardPage === index 
              ? "w-8 h-2 bg-orange-600" 
              : "w-2 h-2 bg-gray-300 hover:bg-orange-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}