"use client";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Reveal from "./FadeUp";

export default function EventSlider({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // On mobile, we show 1 card. On desktop, we show 3.
  // This helps the dots and sliding math stay accurate.
  const cardsToShow = 3; 
  const maxIndex = events.length - cardsToShow;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 9000); // 9 seconds per slide
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="max-w-6xl mx-auto overflow-hidden px-4">
      {/* The Sliding Row */}
      <div
        className="flex transition-transform duration-700 ease-in-out gap-6"
        style={{ 
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(33.333%-16px)] shrink-0"
          >
            <Reveal
              delay={
                index % 3 === 0 ? "delay-1" : index % 3 === 1 ? "delay-2" : "delay-3"
              }
            >
              {/* {...event} passes title, date, time, image, AND slug to EventCard */}
              <EventCard {...event} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {/* We generate dots based on how many sliding positions there are */}
        {events.slice(0, maxIndex + 1).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-red-700 w-8 shadow-[0_0_8px_rgba(185,28,28,0.4)]" 
                : "w-2.5 border border-red-700 bg-transparent hover:bg-red-700/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}