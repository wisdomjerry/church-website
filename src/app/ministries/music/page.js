"use client";
import React, { useState } from "react";
import {
  Play,
  Music,
  ChevronRightCircleIcon,
  ChevronLeftCircleIcon,
  Disc,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MusicMinistry() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const tracks = [
    { title: "Great is Thy Faithfulness", duration: "5:20" },
    { title: "Living Hope (Live Worship)", duration: "6:45" },
    { title: "Victory in the Valley", duration: "4:15" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] bg-black flex flex-col items-center justify-center text-white ">
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769428710/Worship_Hero_l55ji4.png"
            alt="Worship Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="text-red-700 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">
            Make a Joyful Noise
          </span>
          <h1 className="text-5xl md:text-6xl font-serif">Worship & Music</h1>
        </div>

        {/* --- FIXED BADGE --- */}
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center z-30 pointer-events-none">
          <div className="animate-bounce pointer-events-auto">
            <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-2xl flex items-center justify-center">
              <div className="-rotate-[225deg] text-white flex items-center justify-center">
                <Music size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: Video & Description */}
        <div className="lg:col-span-8 space-y-12">
          {/* VIDEO PLAYER PREVIEW */}
          <div
            className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769428709/worship-team_nciwir.png"
              alt="Worship Team"
              fill
              className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform shadow-2xl">
                <Play fill="currentColor" size={32} />
              </button>
            </div>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-6 text-gray-600 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-red-700 first-letter:float-left first-letter:mr-3">
              Our music ministry is more than just performance; it is a vital
              part of our spiritual journey. We believe in creating an
              atmosphere where the congregation can encounter the presence of
              God.
            </p>
            <p>
              From our full choir to our contemporary worship band, we offer
              diverse styles of praise. Every note played and every song sung is
              intended to point hearts toward the Creator.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/ministries/family"
              className="text-gray-400 hover:text-red-700 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <ChevronLeftCircleIcon size={16} /> Family
            </Link>
            <Link
              href="/ministries/global"
              className="text-gray-400 hover:text-red-700 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Global <ChevronRightCircleIcon size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT: Playlist Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-gray-50 border-t-4 border-red-700 p-8 shadow-sm">
            <h4 className="text-xl font-serif mb-6 flex items-center gap-2">
              <Disc
                className="text-red-700 animate-spin"
                style={{ animationDuration: "3s" }}
                size={20}
              />
              Latest Tracks
            </h4>
            <div className="space-y-4">
              {tracks.map((track, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-white border border-gray-100 group hover:border-red-700 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Play
                      size={14}
                      className="text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                    />
                    <span className="text-xs font-bold text-gray-700">
                      {track.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-red-700 text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
              Listen on Spotify
            </button>
          </div>
        </aside>
      </section>

      {/* 3. VIDEO MODAL (Cloudinary Video) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-700 transition-colors"
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-5xl aspect-video relative">
            <video
              autoPlay
              controls
              className="w-full h-full shadow-2xl"
              poster="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769428709/worship-team_nciwir.png"
            >
              <source
                src="https://res.cloudinary.com/dnxnr4ocz/video/upload/v1769430190/Every_Worship_Song_in_under_a_MINUTE_-_Caleb_Kelsey_1080p_h264_wv4vmh.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}
