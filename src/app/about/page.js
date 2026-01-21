"use client";
import Reveal from "../components/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Heart,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutPage() {
  const team = [
    { name: "Sophia Jones", role: "Senior Pastor", img: "/hero-2.jpg" },
    { name: "Johnny", role: "Christian Speaker", img: "/hero-1.jpg" },
    { name: "Jackson", role: "Protestant Clergy", img: "/hero-3.jpg" },
    { name: "Sarah Miller", role: "Worship Leader", img: "/hero-2.jpg" },
    { name: "David Chen", role: "Youth Pastor", img: "/hero-1.jpg" },
    { name: "Emma Wilson", role: "Community Outreach", img: "/hero-3.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <div
          className="absolute inset-0  bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
          style={{ backgroundImage: "url('/church-about.png')" }}
        >
          <div className="absolute inset-0 bg-[#0a1227]/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl ">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
            <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
              Home
            </span>
            <span className="text-gray-500">
              <ChevronRight size={16} strokeWidth={4} />
            </span>
            <span className="text-white/80 font-medium">About Us</span>
          </div>
        </div>

        {/* Hero Droplet Badge - Point Down */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Mission Section */}
      <section className="py-24 bg-[#fffbf0] px-6 pt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full border-[15px] border-gray-100 -z-10"></div>
              <img
                src="/church-interior.jpg"
                alt="Church interior"
                className="w-full h-[500px] object-cover rounded-sm shadow-lg"
              />
              <div className="absolute bottom-8 left-8 bg-red-700 p-6 text-white text-center min-w-[140px]">
                <span className="block text-4xl font-black">20+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest leading-none text-white">
                  Years of <br /> Experience
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay="delay-2">
            <div className="space-y-6 text-left">
              <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[11px]">
                Welcome to Faith Harvest
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
                Our Mission & Heart for God
              </h2>
              <div className="flex gap-1 mb-6">
                <div className="w-10 h-1 bg-red-700"></div>
                <div className="w-3 h-1 bg-red-700"></div>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm italic border-l-4 border-red-700 pl-4">
                "Our mission is to bring hope, love, and spiritual growth to our
                community through worship and service."
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Biblical Teaching",
                  "Youth Fellowship",
                  "Community Support",
                  "Global Missions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[11px] font-black text-gray-900 uppercase tracking-widest"
                  >
                    <div className="w-2 h-2 bg-red-700 rotate-45"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature Section - Zegen "Small Steps" Style */}
      <section className="py-24 bg-[#f3e8d7] px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Side: Content and Icons */}
            <div className="space-y-8">
              <Reveal delay="delay-1">
                <div>
                  <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[11px]">
                    About Us
                  </span>
                  <h2 className="text-4xl font-black text-gray-900 uppercase mt-2 mb-4 leading-tight">
                    We are Taking Small Steps to Make <br /> Earth Better Planet
                  </h2>
                  <div className="flex gap-1 mb-6">
                    <div className="w-8 h-[2px] bg-red-700"></div>
                    <div className="w-3 h-[2px] bg-red-700"></div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We believe that every soul matters. Our church is dedicated
                    to providing a sanctuary where you can grow in faith and
                    find your divine purpose.
                  </p>
                </div>
              </Reveal>

              {/* Two Column Icon Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <Reveal delay="delay-2">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <h4 className="font-black text-gray-900 uppercase text-lg tracking-wide">
                      Place Of Heaven
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Experience the peace and presence of God in our worship
                      gatherings.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay="delay-3">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg">
                      <BookOpen size={20} />
                    </div>
                    <h4 className="font-black text-gray-900 uppercase text-lg tracking-wide">
                      Study Bible
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Deepen your understanding of the Word through our weekly
                      study groups.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Left Side: Large Portrait Image */}
            <Reveal>
              <div className="relative flex justify-center lg:justify-start">
                <div className="max-w-[450px] w-full relative">
                  <img
                    src="/hero-1.jpg"
                    alt="Pastor"
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Bar: Video CTA (Nested inside same section) */}
          <div className="relative overflow-hidden rounded-lg bg-[#0a1227] py-5 bottom-9 px-5 md:px-16 shadow-2xl">
            {/* Faded Background Pattern */}
            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center grayscale"
              style={{ backgroundImage: "url('/church-interior.jpg')" }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Pulsing Play Button Container */}
              <div className="relative flex items-center justify-center">
                {/* Ripple Effect Circles */}
                <div className="absolute w-12 h-12 bg-red-700 rounded-full animate-ping opacity-40"></div>
                <div className="absolute w-20 h-20 bg-red-700 rounded-full animate-ping opacity-20 [animation-duration:2s]"></div>
                <div className="absolute w-28 h-28 bg-red-700 rounded-full animate-ping opacity-10 [animation-duration:3s]"></div>

                <button className="relative w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-700 transition-all duration-500 shadow-2xl">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </button>
              </div>

              {/* Quote Text */}
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-white text-xl md:text-2xl font-light italic  leading-tight tracking-tight">
                  "Pray! And listen to God! You can do this alone, but{" "}
                  <br className="hidden lg:block" /> find somebody to do it with
                  you"
                </blockquote>
                <p className="text-red-600 text-[11px] font-light tracking-[0.2em] mt-3">
                  Real Story Cross Journey from Anna Hampton
                </p>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                <button className="border-2 border-red-700 text-white px-10 py-4 text-[11px] font-black rounded-lg tracking-widest hover:bg-red-700 transition-all">
                  Donate Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Swiper Team Section */}
      <section className="py-24 bg-[#fffbf0] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[11px]">
            Our Team
          </span>
          <h2 className="text-4xl font-black text-gray-900 uppercase mt-2 mb-4">
            Church Pastors
          </h2>
          <div className="flex justify-center gap-1 mb-16">
            <div className="w-8 h-[2px] bg-red-700"></div>
            <div className="w-3 h-[2px] bg-red-700"></div>
          </div>

          <div className="relative group/swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
              pagination={{ clickable: true, el: ".custom-dots" }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-20"
            >
              {team.map((pastor, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative rounded-lg overflow-hidden bg-[#0a1227] text-center pb-8 shadow-lg">
                    <div className="relative h-[400px] w-full overflow-hidden bg-white">
                      <img
                        src={pastor.img}
                        alt={pastor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0a1227]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-start p-6">
                        <div className="flex flex-col gap-2 -translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                          {[Facebook, Twitter, Instagram, Linkedin].map(
                            (Icon, i) => (
                              <div
                                key={i}
                                className="w-10 h-10 bg-white text-[#0a1227] flex items-center justify-center hover:bg-red-700 hover:text-white transition-all cursor-pointer"
                              >
                                <Icon size={16} />
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                      {/* Droplet Badge - Point Facing UP */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative w-12 h-12 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-2 border-white flex items-center justify-center">
                          <BookOpen
                            size={18}
                            className="-rotate-[225deg] text-white"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-red-700 transition-colors">
                        {pastor.name}
                      </h4>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">
                        {pastor.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="prev-btn absolute left-[-20px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white shadow-xl flex items-center justify-center text-gray-400 hover:bg-red-700 hover:text-white transition-all border border-gray-100">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn absolute right-[-20px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white shadow-xl flex items-center justify-center text-gray-400 hover:bg-red-700 hover:text-white transition-all border border-gray-100">
              <ChevronRight size={24} />
            </button>

            {/* Custom Red/White Dots */}
            <div className="custom-dots flex justify-center gap-2 mt-8"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
