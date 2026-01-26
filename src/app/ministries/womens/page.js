"use client";
import React from "react";
import {
  Heart,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Flower,
  Users,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function WomensMinistry() {
  const events = [
    { title: "Prayer Breakfast", date: "Jan 28", time: "8:30 AM" },
    { title: "Monthly Bible Study", date: "Feb 05", time: "6:00 PM" },
  ];

  return (
    <main className="bg-[#FFFBF5] min-h-screen">
      {/* 1. HERO - Softer Colors */}
      <section className="relative h-[60vh] bg-[#FDF8EE] flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-70 bg-[url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/pattern_leq5tv.png')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <Flower className="text-red-700" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 italic">
            Daughters of Grace
          </h1>
          <p className="text-[#B38B59] font-bold uppercase tracking-[0.3em] text-[11px] mt-4">
            Women's Ministry
          </p>
        </div>

        {/* Droplet with Heart Icon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          {/* Sizing: w-20 h-20 | Border: matching the section background [#FFFBF5] */}
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-[#FFFBF5] shadow-2xl flex items-center justify-center">
            <div className="-rotate-[225deg] text-white">
              <Heart size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT & EVENTS SIDEBAR */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="bg-white p-2 shadow-xl border border-gray-100">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/Women_fellowship_oph9rz.png"
              alt="Women fellowship"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-serif text-gray-800 italic">
              A Space for Every Sister
            </h2>
            <p className="text-gray-600 leading-loose text-lg">
              Our Women's Ministry provides a nurturing environment where women
              can build authentic relationships, deepen their faith, and
              discover their unique purpose in God's kingdom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="text-red-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm mb-2">Support Groups</h4>
                  <p className="text-xs text-gray-500">
                    Connecting through shared life stages and struggles.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Users className="text-red-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm mb-2">Mentorship</h4>
                  <p className="text-xs text-gray-500">
                    Older women pouring into the next generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/ministries/global"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <ChevronLeft size={16} /> Global
            </Link>
            <Link
              href="/ministries/youth"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Youth <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* SIDEBAR: Event Focus */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-gray-900 p-8 text-white rounded-sm">
            <h4 className="text-xl font-serif mb-6 border-b border-white/10 pb-4 italic">
              Upcoming Gatherings
            </h4>
            <div className="space-y-6">
              {events.map((ev, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="bg-red-700 w-12 h-12 flex flex-col items-center justify-center text-[10px] font-bold">
                    {ev.date.split(" ")[0]} <br /> {ev.date.split(" ")[1]}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">{ev.title}</h5>
                    <span className="text-[10px] opacity-60 uppercase">
                      {ev.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 border border-white/20 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Calendar
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
