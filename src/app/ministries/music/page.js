"use client";
import React from "react";
import { Play, Music, Mic2, ChevronRight, Search, Volume2, Download, Disc } from "lucide-react";

export default function MusicMinistry() {
  const tracks = [
    { title: "Great is Thy Faithfulness", duration: "5:20" },
    { title: "Living Hope (Live Worship)", duration: "6:45" },
    { title: "Victory in the Valley", duration: "4:15" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO - Darker & More Dramatic */}
      <section className="relative h-[65vh] bg-black flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-50 bg-[url('/music-hero.jpg')] bg-cover bg-fixed"></div>
        <div className="relative  z-10 text-center">
          <span className="text-red-700 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Make a Joyful Noise</span>
          <h1 className="text-5xl md:text-6xl font-serif">Worship & Music</h1>
        </div>
        
        {/* Signature Droplet with Music Note */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
  {/* Sizing: w-20 h-20 | Border: matching the section background [#FFFBF5] */}
  <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-[#FFFBF5] shadow-2xl flex items-center justify-center">
            <div className="-rotate-[225deg] text-white"><Music size={18} /></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: Focus on Experience */}
        <div className="lg:col-span-8 space-y-12">
          <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden group">
            <img src="/worship-team.jpg" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} />
              </button>
            </div>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-6 text-gray-600 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-red-700 first-letter:float-left first-letter:mr-3">
              Our music ministry is more than just performance; it is a vital part of our spiritual journey. 
              We believe in creating an atmosphere where the congregation can encounter the presence of God.
            </p>
            <p>From our full choir to our contemporary worship band, we offer diverse styles of praise.</p>
          </div>
        </div>

        {/* RIGHT: Playlist Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-gray-50 border-t-4 border-red-700 p-8 shadow-sm">
            <h4 className="text-xl font-serif mb-6 flex items-center gap-2">
              <Disc className="text-red-700 animate-spin-slow" size={20} /> Latest Tracks
            </h4>
            <div className="space-y-4">
              {tracks.map((track, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-100 group hover:border-red-700 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <button className="text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"><Play size={14} fill="currentColor"/></button>
                    <span className="text-xs font-bold text-gray-700">{track.title}</span>
                  </div>
                  <span className="text-[10px] text-gray-400">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}