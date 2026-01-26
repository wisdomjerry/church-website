"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Music,
  Heart,
  Globe,
  Baby,
  Plus,
} from "lucide-react";

const ministries = [
  {
    title: "Children's Ministry",
    slug: "children",
    icon: <Baby size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425461/hero-bg_z1lish.png",
    excerpt:
      "Nurturing the next generation in a fun, safe, and Christ-centered environment.",
  },
  {
    title: "Worship & Arts",
    slug: "worship",
    icon: <Music size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769428710/Worship_Hero_l55ji4.png",
    excerpt:
      "Leading the congregation into God's presence through music and creative expression.",
  },
  {
    title: "Youth Fellowship",
    slug: "youth",
    icon: <Users size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424371/ministry-3_ndb1gf.png",
    excerpt:
      "Empowering young people to live boldly for Christ in today's world.",
  },
  {
    title: "Global Missions",
    slug: "missions",
    icon: <Globe size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769420255/global_o8y8jh.png",
    excerpt:
      "Taking the gospel beyond our walls through local service and global outreach.",
  },
  {
    title: "Married's Ministry",
    slug: "married",
    icon: <Heart size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427589/married-hero_uib5mh.png",
    excerpt:
      "Building strong homes through fellowship, counseling, and spiritual support.",
  },
  {
    title: "Women Ministry",
    slug: "womens",
    icon: <Users size={30} />,
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/pattern_leq5tv.png",
    excerpt:
      "Supporting families in their journey of faith and growth.",
  },
];

export default function MinistriesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to handle sliding
  const nextSlide = () => {
    if (currentIndex < ministries.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate total "pages" or steps. Since we show 3 cards at once:
  const totalSteps = ministries.length - 2;

  return (
    <main className="bg-[#F9F6F0] min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION (Unchanged) */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{ backgroundImage: "url('/ministry-hero.png')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0a1227]/50"></div>
        </div>
        <div className="relative z-10 text-center text-white animate-fade-up px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight">
            Our Ministries
          </h1>
          <nav className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="text-red-700 hover:text-red-500 cursor-pointer">
              Home
            </span>
            <ChevronRight size={14} strokeWidth={4} className="text-gray-400" />
            <span className="text-white/90">Ministries</span>
          </nav>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-[#F9F6F0] shadow-2xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MINISTRIES CAROUSEL SECTION */}
      <section className="pb-32 pt-32 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#B38B59] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Our Ministry
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Empowering Lives Through <br /> Our Ministries
            </h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-4 border border-gray-300 rounded-full transition-all ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-red-700 hover:text-white hover:border-red-700"}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= ministries.length - 3}
              className={`p-4 border border-gray-300 rounded-full transition-all ${currentIndex >= ministries.length - 3 ? "opacity-30 cursor-not-allowed" : "hover:bg-red-700 hover:text-white hover:border-red-700"}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3 + 0.7)}%)`,
            }}
          >
            {ministries.map((m, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[calc(33.333%-22px)] group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#B38B59]/0 group-hover:bg-[#B38B59]/10 transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex flex-col items-center text-center bg-gradient-to-b from-[#FFFBF2] to-[#F3EAD3]">
                  <h3 className="text-xl font-serif text-gray-800 mb-4 px-4 min-h-[56px] flex items-center uppercase">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {m.excerpt}
                  </p>
                  <a
                    href={`/ministries/${m.slug}`}
                    className="text-[#8B5A2B] font-bold text-[11px] uppercase tracking-widest border-b border-transparent hover:border-[#8B5A2B] transition-all pb-1"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- PROGRESS DROPLETS (Pagination Dots) --- */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-500 ${
                currentIndex === index
                  ? "w-4 h-6 bg-red-700 rounded-t-full rounded-b-[40%] scale-110 opacity-100"
                  : "w-2 h-2 bg-gray-300 rounded-full opacity-50 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Subtle pulse effect for the active droplet */}
              {currentIndex === index && (
                <span className="absolute inset-0 bg-red-700 rounded-t-full rounded-b-[40%] animate-ping opacity-20"></span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* --- COMMUNITY & STATS SECTION --- */}
      <section className="relative py-32 px-6 bg-[#FDF8EE] overflow-hidden">
        {/* Soft background glow effect matching the image */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B38B59]/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Staggered Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-[400px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Church_Interior_g5pd12.png"
                  alt="Church Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-[250px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441802/Worship_a6hewf.png"
                  alt="Worship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-[250px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441802/Preaching_kzlvl5.png"
                  alt="Preaching"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-[400px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441804/Prayer_ykh98j.png"
                  alt="Prayer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content and Stats Grid */}
          <div className="space-y-10">
            <div>
              <span className="text-[#B38B59] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Our Community
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                Building Stronger Bonds, <br /> Together as One
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* 4-Grid Counter matching the image */}
            <div className="grid grid-cols-2 border border-gray-200">
              <div className="p-10 border-r border-b border-gray-200 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-300">
                <span className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
                  300+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-red-700 transition-colors">
                  Active Member
                </span>
              </div>
              <div className="p-10 border-b border-gray-200 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-300">
                <span className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
                  100M+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-red-700 transition-colors">
                  Manage Donation
                </span>
              </div>
              <div className="p-10 border-r border-gray-200 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-300">
                <span className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
                  800K+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-red-700 transition-colors">
                  Causes Supported
                </span>
              </div>
              <div className="p-10 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-300">
                <span className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
                  750+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-red-700 transition-colors">
                  Fundraising Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. GALLERY SECTION --- */}
      <section className="relative py-32 px-6 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header matching image_1f3e05.jpg */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#B38B59] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Gallery
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                Moments of Faith: Our <br /> Journey in Photos
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          {/* Photo Grid - Masonry spans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Row 1: Large Featured Wide Photos */}
            <div className="lg:col-span-3 h-[400px] overflow-hidden group rounded-sm shadow-md relative">
              <img
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Moments_of_Faith_1_yxphyh.png"
                alt="Moments of Faith 1"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="lg:col-span-3 h-[400px] overflow-hidden group rounded-sm shadow-md relative">
              <img
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Moments_of_Faith_2_ecurw4.png"
                alt="Moments of Faith 2"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Row 2: Smaller Supporting Photos */}
            <div className="lg:col-span-2 h-[350px] overflow-hidden group rounded-sm shadow-md relative">
              <img
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441802/Moments_of_Faith_3_ob9x0o.png"
                alt="Moments of Faith 3"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="lg:col-span-2 h-[350px] overflow-hidden group rounded-sm shadow-md relative">
              <img
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Moments_of_Faith_4_mul0li.png"
                alt="Moments of Faith 4"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="lg:col-span-2 h-[350px] overflow-hidden group rounded-sm shadow-md relative">
              <img
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Moments_of_Faith_5_nxbvlr.png"
                alt="Moments of Faith 5"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
