"use client";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Reveal from "./Reveal";

export default function EventSlider({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= events.length - 2 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="max-w-6xl  mx-auto overflow-hidden px-4">
      {/* The Sliding Row */}
      <div
        className="flex rounded-xl transition-transform duration-700 ease-in-out gap-6"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full  md:w-[calc(33.333%-16px)] shrink-0"
          >
            <Reveal
              delay={
                index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"
              }
            >
              <EventCard {...event} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {events.slice(0, events.length - 2).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-red-700 w-6" // Active dot becomes longer like premium themes
                : "border border-red-700 bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
