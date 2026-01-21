"use client";
import React, { useState } from "react";
import {
  Play,
  Calendar,
  User,
  Clock,
  Search,
  ChevronRight,
    Video as VideoIcon,
    Headphones,
    BookOpen,
} from "lucide-react";

// 1. Expanded Data with Types
const allSermons = [
  {
    id: 1,
    title: "The Power of Constant Prayer",
    type: "Video",
    category: "Faith & Healing",
    author: "Pastor Mark Smith",
    date: "Oct 15, 2023",
    image: "/sermon-1.jpg",
  },
  {
    id: 2,
    title: "Walking in Divine Purpose",
    type: "Audio",
    category: "Living",
    author: "Pastor John Doe",
    date: "Oct 12, 2023",
    image: "/sermon-2.jpg",
  },
  {
    id: 3,
    title: "Strength for the Journey",
    type: "Series",
    category: "Grace",
    author: "Pastor Mark Smith",
    date: "Oct 08, 2023",
    image: "/sermon-3.jpg",
  },
  {
    id: 4,
    title: "Overcoming Fear with Faith",
    type: "Video",
    category: "Faith",
    author: "Pastor Sarah Jen",
    date: "Oct 01, 2023",
    image: "/sermon-4.jpg",
  },
  {
    id: 5,
    title: "The Art of Worship",
    type: "Audio",
    category: "Worship",
    author: "Pastor John Doe",
    date: "Sep 28, 2023",
    image: "/sermon-5.jpg",
  },
  {
    id: 6,
    title: "Kingdom Stewardship",
    type: "Series",
    category: "Business",
    author: "Pastor Mark Smith",
    date: "Sep 20, 2023",
    image: "/sermon-6.jpg",
  },
];

export default function SermonsPage() {
  const [activeFilter, setActiveFilter] = useState("All Sermons");
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Filtering Logic
  const filteredSermons = allSermons.filter((sermon) => {
    const matchesFilter =
      activeFilter === "All Sermons" || sermon.type === activeFilter;
    const matchesSearch = sermon.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterOptions = ["All Sermons", "Video", "Audio", "Series"];
  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0a1227]">
        <div className="absolute inset-0 opacity-40 bg-[url('/sermon-hero.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Watch & Listen
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Sermons</h1>
          <nav className="flex justify-center gap-3 text-[11px] font-bold uppercase tracking-widest">
            <span className="text-red-700">Home</span>
            <ChevronRight size={14} />
            <span>Sermons</span>
          </nav>
        </div>
      </section>

      {/* 2. Featured Sermon (Large Card) */}
      <section className="max-w-7xl mx-auto -mt-20 px-6 relative z-20">
        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-2/3 relative group cursor-pointer">
            <img
              src="/latest-sermon.jpg"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center text-white animate-pulse">
                <Play fill="currentColor" size={30} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-12 flex flex-col justify-center bg-gradient-to-b from-[#FFFBF2] to-[#F3EAD3]">
            <span className="bg-red-700 text-white text-[9px] font-black uppercase px-3 py-1 self-start mb-6">
              Latest Sermon
            </span>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">
              Walking in the Light of His Grace
            </h2>
            <div className="flex flex-col gap-3 text-gray-500 text-sm mb-8">
              <div className="flex items-center gap-2">
                <User size={16} className="text-red-700" /> Pastor John Doe
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-red-700" /> October 24, 2023
              </div>
            </div>
            <button className="border-2 border-gray-900 px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
              Watch Sermon
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* 3. Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-8 gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`transition-all duration-300 pb-2 border-b-2 ${
                  activeFilter === opt
                    ? "text-gray-900 border-red-700"
                    : "border-transparent hover:text-red-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 py-3 px-11 text-sm outline-none focus:border-red-700 transition-colors"
            />
            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />
          </div>
        </div>

        {/* 4. Functional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {filteredSermons.length > 0 ? (
            filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="group relative bg-white border border-gray-100 p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Layered Style: Inner card container */}
                <div className="relative overflow-hidden h-64 mb-6">
                  <img
                    src={sermon.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Media Type Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-red-700">
                    {sermon.type === "Video" && <VideoIcon size={16} />}
                    {sermon.type === "Audio" && <Headphones size={16} />}
                    {sermon.type === "Series" && <BookOpen size={16} />}
                  </div>

                  {/* Animated Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Content Styling */}
                <div className="px-2 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#B38B59] font-bold text-[10px] uppercase tracking-[0.2em]">
                      {sermon.category}
                    </span>
                    <span className="text-[9px] font-black uppercase bg-gray-100 px-2 py-0.5 text-gray-500">
                      {sermon.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-gray-900 mb-6 leading-snug group-hover:text-red-700 transition-colors cursor-pointer">
                    {sermon.title}
                  </h3>

                  <div className="flex items-center justify-between text-gray-400 text-[11px] font-medium pt-4 border-t border-gray-50 italic">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-red-700" />{" "}
                      {sermon.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-700" />{" "}
                      {sermon.date}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 font-serif text-xl italic">
                No sermons found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All Sermons");
                  setSearchQuery("");
                }}
                className="mt-4 text-red-700 font-bold uppercase text-[10px] tracking-widest border-b border-red-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
