"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  PlayCircle,
} from "lucide-react";

const slides = [
  {
    tag: "Welcome to Christian Faith",
    title: "Experience God's Unconditional Love",
    subtitle: "A place of worship, faith, love, and spiritual growth for everyone.",
    image: "/hero-1.png",
  },
  {
    tag: "Join Our Community",
    title: "Experience Powerful Worship",
    subtitle: "Join us every Sunday as we lift our hearts in praise and worship.",
    image: "/hero-2.png",
  },
  {
    tag: "Grow In Grace",
    title: "Grow Together in Faith",
    subtitle: "Connect with our community through fellowship, prayer, and service.",
    image: "/hero-3.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    /* Added 'group' class to the parent section */
    <section className="group relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === i ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${index === i ? "animate-ken-burns" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Centered Content */}
      <div className="relative z-10 py-32 max-w-5xl mx-auto px-6 text-center text-white">
        <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <div className="w-12 h-[1px] bg-orange-600"></div>
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
            {slides[index].tag}
          </span>
          <div className="w-12 h-[1px] bg-orange-600"></div>
        </div>

        <h1 className={`text-5xl md:text-8xl font-black leading-[1.1] mb-8 transition-all duration-1000 delay-100 ${isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
          {slides[index].title}
        </h1>

        <p className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          {slides[index].subtitle}
        </p>

        <div className={`flex justify-center gap-4 delay-500 transition-all duration-700 ${isAnimating ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`}>
          <button className="bg-orange-600 rounded-sm hover:bg-white hover:text-orange-600 text-white px-10 py-5 text-[17px] font-black tracking-[0.2em] transition-all">
            Learn More
          </button>
          <button className="border-2 border-white/30 rounded-sm hover:bg-orange-600 hover:border-orange-600 text-white px-10 py-5 text-[17px] font-black tracking-[0.2em] transition-all">
            Our Ministries
          </button>
        </div>
      </div>

      {/* Main Slider Side Arrows - Now with hover animations */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 rounded-full text-white hover:bg-orange-600 transition-all duration-500 
                   opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 group"
      >
        <ChevronLeft size={24} strokeWidth={3} className="group-hover:scale-110" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 rounded-full text-white hover:bg-orange-600 transition-all duration-500 
                   opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 group"
      >
        <ChevronRight size={24} strokeWidth={3} className="group-hover:scale-110" />
      </button>
      
    </section>
  );
}