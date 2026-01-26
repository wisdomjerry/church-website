"use client";
import React from "react";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export default function GlobalMinistry() {
  const missionLocations = [
    { country: "Kenya", projects: "Water Wells & Schools" },
    { country: "India", projects: "Local Church Planting" },
    { country: "Brazil", projects: "Youth Outreach" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION - Using a Global/Map themed Background */}
      <section className="relative h-[60vh] bg-[#0a1227] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425992/ministry-4_ymcfua.png')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <span className="text-gray-400">Home</span>
            <ChevronRight size={10} />
            <span className="text-red-600">Our Ministry</span>
            <ChevronRight size={10} />
            <span>Global Ministry</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
            Global Missions
          </h1>
        </div>

        {/* Signature Droplet with Globe Icon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          {/* Sizing: w-20 h-20 | Border: matching the section background [#FFFBF5] */}
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-[#FFFBF5] shadow-2xl flex items-center justify-center">
            <div className="-rotate-[225deg] text-white">
              <Globe size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT & SIDEBAR GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT CONTENT: Focus on Mission & Reach */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-red-700"></div>
            <span className="text-red-700 font-bold uppercase tracking-widest text-xs">
              Reaching the Nations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            Spreading Hope Across the World
          </h2>

          <div className="rounded-sm overflow-hidden shadow-2xl relative group">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426198/global-main_yfuig9.png"
              alt="Missions team in the field"
              className="w-full h-[450px] object-cover"
            />
            {/* Unique Overlay Info Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gray-900/90 text-white p-6 flex justify-around items-center backdrop-blur-sm">
              <div className="text-center">
                <span className="block text-2xl font-serif text-red-700">
                  12
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">
                  Countries
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/20"></div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-red-700">
                  45
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">
                  Missionaries
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/20"></div>
              <div className="text-center">
                <span className="block text-2xl font-serif text-red-700">
                  10k+
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">
                  Lives Impacted
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none text-gray-600">
            <p>
              Our Global Ministry is dedicated to fulfilling the Great
              Commission. We partner with local leaders in various nations to
              provide spiritual guidance, medical aid, and educational support.
              Our focus is not just on short-term relief, but on long-term
              sustainable church growth.
            </p>
          </div>

          {/* Location Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionLocations.map((loc) => (
              <div
                key={loc.country}
                className="bg-[#F9F6F0] p-6 border-b-2 border-transparent hover:border-red-700 transition-all group"
              >
                <MapPin size={20} className="text-red-700 mb-4" />
                <h4 className="font-serif text-xl mb-2">{loc.country}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {loc.projects}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/ministries/music"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <ChevronLeft size={16} /> Music
            </Link>
            <Link
              href="/ministries/womens"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Women <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Focus on Involvement */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Action Card: Give/Donate */}
          <div className="bg-red-700 p-8 text-white rounded-sm shadow-xl">
            <h4 className="text-xl font-serif mb-4">Support Missions</h4>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Your donations help us provide food, Bibles, and medicine to those
              in need.
            </p>
            <button className="w-full bg-white text-red-700 font-bold py-3 text-[11px] uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Donate to Missions
            </button>
          </div>

          {/* Contact Widget: Replaces Categories */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Office Info
            </h4>
            <div className="space-y-6 mt-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-700 shrink-0" size={18} />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest mb-1">
                    Missions Office
                  </h5>
                  <p className="text-sm text-gray-500">
                    123 Faith Lane, TX 75001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-red-700 shrink-0" size={18} />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest mb-1">
                    Call Us
                  </h5>
                  <p className="text-sm text-gray-500">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-red-700 shrink-0" size={18} />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest mb-1">
                    Email Us
                  </h5>
                  <p className="text-sm text-gray-500">missions@church.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tag Cloud */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Global Tags
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Africa",
                "Asia",
                "Relief",
                "Church Planting",
                "Medicine",
                "Bibles",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-50 text-[9px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 hover:bg-red-700 hover:text-white transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
