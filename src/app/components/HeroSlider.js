"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

/* -------------------- DATA -------------------- */

const slides = [
  {
    tag: "Welcome to Christian Faith",
    title: "Experience God's Unconditional Love",
    subtitle:
      "A place of worship, faith, love, and spiritual growth for everyone.",
    image:
      "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769169917/hero-1_tutdgj.png",
    highlight: ["God's", "Love"],
  },
  {
    tag: "Join Our Community",
    title: "Experience Powerful Worship",
    subtitle:
      "Join us every Sunday as we lift our hearts in praise and worship.",
    image:
      "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769276095/hero-2_iylfab.png",
    highlight: ["Powerful", "Worship"],
  },
  {
    tag: "Grow In Grace",
    title: "Grow Together in Faith",
    subtitle:
      "Connect with our community through fellowship, prayer, and service.",
    image:
      "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769170413/hero-3_ajtun8.png",
    highlight: ["Faith"],
  },
];

/* -------------------- WORD + LETTER ANIMATION -------------------- */

function AnimatedWords({
  text,
  isAnimating,
  delay = 0,
  highlight = [],
  className = "",
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => {
        const cleanWord = word.replace(/[^\w']/g, "");
        const isHighlighted = highlight.includes(cleanWord);

        return (
          <span
            key={i}
            className={`
              inline-block mr-2 transition-all duration-700 ease-out
              ${
                isAnimating
                  ? "opacity-0 translate-y-8 blur-sm tracking-normal"
                  : "opacity-100 translate-y-0 blur-0 tracking-wider"
              }
              ${isHighlighted ? "text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" : ""}
            `}
            style={{
              transitionDelay: `${delay + i * 90}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

/* -------------------- HERO SLIDER -------------------- */

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
    }, 600);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section className="group relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center pt-70">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${
              index === i ? "animate-ken-burns" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Center Content */}
      <div className="relative z-10 py-32 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Tag */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-orange-600" />
          <span className="text-orange-500 font-bold tracking-[0.35em] uppercase text-xs md:text-sm">
            <AnimatedWords text={slides[index].tag} isAnimating={isAnimating} />
          </span>
          <div className="w-12 h-[1px] bg-orange-600" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8">
          <AnimatedWords
            text={slides[index].title}
            isAnimating={isAnimating}
            delay={150}
            highlight={slides[index].highlight}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          <AnimatedWords
            text={slides[index].subtitle}
            isAnimating={isAnimating}
            delay={350}
          />
        </p>

        {/* Buttons */}
        <div
          className={`flex justify-center gap-4 transition-all duration-700 ${
            isAnimating
              ? "opacity-0 translate-y-6"
              : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <Link href="/about">
            <button className="bg-orange-600 rounded-sm hover:bg-white hover:text-orange-600 text-white px-10 py-5 text-[17px] font-black tracking-[0.2em] transition-all">
              Learn More
            </button>
          </Link>
          <Link href="/ministries">
            <button className="border-2 border-white/30 rounded-sm hover:bg-orange-600 hover:border-orange-600 text-white px-10 py-5 text-[17px] font-black tracking-[0.2em] transition-all">
              Our Ministries
            </button>
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 rounded-full text-white hover:bg-orange-600 transition-all duration-500 
        opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
      >
        <ChevronLeft size={24} strokeWidth={3} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 rounded-full text-white hover:bg-orange-600 transition-all duration-500 
        opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
      >
        <ChevronRight size={24} strokeWidth={3} />
      </button>
    </section>
  );
}
