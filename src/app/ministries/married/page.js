"use client";
import React from "react";
import {
  Search,
  ChevronRight,
  Calendar,
  Quote,
  ChevronLeft,
  Heart,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function MarriedsMinistry() {
  // Sidebar Category Data focused on Marriage
  const categories = [
    { name: "Marriage Covenant", count: 12 },
    { name: "Couple Fellowship", count: 8 },
    { name: "Parenting Tips", count: 15 },
    { name: "Spiritual Growth", count: 21 },
    { name: "Relationship Sermons", count: 9 },
  ];

  const popularPosts = [
    {
      title: "Building a Foundation on the Rock",
      date: "Aug 12, 2025",
      icon: <Quote size={14} />,
    },
    {
      title: "Communication: The Heart of Marriage",
      date: "Jun 20, 2025",
      icon: <Heart size={14} />,
    },
    {
      title: "Our Annual Couples Retreat Highlights",
      date: "Apr 10, 2025",
      image: "/marriages-post.jpg", // Updated placeholder path
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] bg-[#0a1227] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427589/married-hero_uib5mh.png')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <span className="text-gray-400">Home</span>
            <ChevronRight size={10} />
            <span className="text-red-600">Ministries</span>
            <ChevronRight size={10} />
            <span>Married's Ministry</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Married's Ministry
          </h1>
        </div>

        {/* Droplet Cross Icon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl font-serif text-gray-900 font-bold">
            Strengthening the Covenant
          </h2>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427587/married-main_ac7fdp.png"
              alt="Married couple holding hands"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p className="text-lg italic font-serif">
              "Therefore what God has joined together, let no one separate." –
              Matthew 19:6
            </p>
            <p>
              Our Married's Ministry is dedicated to building, sustaining, and
              restoring Christ-centered marriages. We believe that a healthy
              marriage is the cornerstone of a healthy family and a vibrant
              church community. Through intentional fellowship and biblical
              teaching, we help couples navigate the joys and challenges of life
              together.
            </p>
            <p>
              Whether you are newly wed or celebrating decades of togetherness,
              our ministry offers monthly date nights, marriage enrichment
              workshops, and small group studies designed to deepen your
              intimacy with each other and with God.
            </p>
          </div>

          {/* Ministry Gallery Thumbs */}
          <div className="grid grid-cols-3 gap-4 pt-4 rounded-lg">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427587/Couples_Retreat_mouylp.png"
              className="h-32 w-full object-cover rounded-sm hover:opacity-80 transition-opacity"
              alt="Couples Retreat"
            />
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427587/Wedding_Anniversary_Celebration_jxpnxe.png"
              className="h-32 w-full object-cover rounded-sm hover:opacity-80 transition-opacity"
              alt="Wedding Anniversary Celebration"
            />
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427586/Bible_Study_Group_qljq8h.png"
              className="h-32 w-full object-cover rounded-sm hover:opacity-80 transition-opacity"
              alt="Bible Study Group"
            />
          </div>

          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/ministries/children"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <ChevronLeft size={16} /> children
            </Link>
            <Link
              href="/ministries/music"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Music <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Search */}
          <div className="relative border border-gray-100 group">
            <input
              type="text"
              placeholder="Find marriage resources..."
              className="w-full p-4 pr-12 text-sm focus:outline-none"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-red-700 text-white px-4 hover:bg-gray-900 transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* Categories Widget */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Ministry Focus
            </h4>
            <div className="space-y-4 mt-4">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex justify-between items-center text-sm group cursor-pointer border-b border-dotted border-gray-200 pb-2"
                >
                  <span className="text-gray-600 group-hover:text-red-700 flex items-center gap-2 transition-colors">
                    <ChevronRight size={12} className="text-red-700" />{" "}
                    {cat.name}
                  </span>
                  <span className="text-gray-300 text-[10px]">
                    ({cat.count})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Latest Insights
            </h4>
            <div className="space-y-6 mt-4">
              {popularPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  {post.image ? (
                    <img
                      src={post.image}
                      className="w-16 h-16 object-cover rounded-sm"
                      alt={post.title}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0">
                      {post.icon}
                    </div>
                  )}
                  <div>
                    <h5 className="text-sm font-bold group-hover:text-red-700 leading-tight mb-1 transition-colors">
                      {post.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} /> {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Counseling Call to Action */}
          <div className="bg-[#fcfcfc] border border-gray-100 p-8 text-center">
            <Users className="mx-auto text-red-700 mb-4" size={32} />
            <h4 className="font-serif font-bold text-lg mb-2">
              Need Guidance?
            </h4>
            <p className="text-sm text-gray-500 mb-6">
              Our pastoral team offers private biblical counseling for couples.
            </p>
            <button className="text-xs font-bold uppercase tracking-widest text-red-700 border-b-2 border-red-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-all">
              Book a Session
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
