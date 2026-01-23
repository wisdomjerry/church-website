"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative group flex items-center justify-center w-12 h-12 bg-red-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-red-800 animate-bounce"
        >
          {/* Glowing Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-red-700 animate-ping opacity-25"></span>
          
          <ChevronUp size={24} strokeWidth={3} />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-gray-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
}