"use client";
import React from "react";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  Calendar,
  Quote,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export default function YouthMinistryPage() {
  const popularPosts = [
    {
      title: "Testimony Love Offering So Blessed",
      date: "Aug 12, 2026",
      icon: <Quote size={14} />,
    },
    {
      title: "Believing In Your Faith Truth Duty",
      date: "Jun 20, 2026",
      icon: <Calendar size={14} />,
    },
    {
      title: "An Important Conversation Around",
      date: "Apr 10, 2026",
      image: "/post-thumb.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION - Build Safe Version */}
      <section className="relative h-[60vh] bg-[#0a1227] flex flex-col items-center justify-center text-white ">
        {/* Next.js Image component instead of bg-[url] to prevent build errors */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424371/ministry-3_ndb1gf.png"
            alt="Youth Ministry Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative top-5 z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <span className="text-gray-400">Home</span>
            <ChevronRight size={10} />
            <span className="text-red-600">Our Ministry</span>
            <ChevronRight size={10} />
            <span className="text-white">Youth Ministry</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold font-serif italic uppercase tracking-tighter">
            Youth <span className="text-red-700">Ministry</span>
          </h1>
        </div>

        {/* The Signature "Pin" Badge */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto py-32 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT CONTENT AREA */}
        <div className="lg:col-span-8 space-y-10">
          <h2 className="text-4xl font-serif text-gray-900 font-bold uppercase tracking-tighter">
            Empowering Our Youth
          </h2>

          <div className="relative h-[450px] w-full rounded-sm overflow-hidden shadow-sm bg-gray-100">
            <Image
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424371/ministry-3_ndb1gf.png"
              alt="Youth Group"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium">
            <p className="mb-6">
              Our Youth Ministry is dedicated to empowering the next generation
              to live out their faith boldly. We provide a safe space for
              students in grades 7-12 to explore their identity in Christ
              through honest conversations, worship, and community.
            </p>
            <p>
              Every week, we gather for high-energy sessions that tackle the
              real-life issues teenagers face today. Our mission is to help them
              build a foundation that lasts a lifetime, centered on the love of
              God and a commitment to serving others.
            </p>
          </div>

          {/* Bottom Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="relative h-44 bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424851/Activity_1_wrbwzl.png"
                alt="Activity 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424850/Activity_2_gnghz1.png"
                alt="Activity 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424850/Activity_3_ukagr3.png"
                alt="Activity 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/"
              className="bg-gray-800 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
            >
              <ChevronLeft size={16} /> Home
            </Link>

            <Link
              href="/ministries/children"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Children <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Popular Posts Widget */}
          <div className="border border-gray-100 p-8 rounded-sm">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Popular Posts
            </h4>
            <div className="space-y-6 mt-4">
              {popularPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-red-50 flex-shrink-0 relative overflow-hidden flex items-center justify-center text-red-700">
                    {post.image ? (
                      <Image
                        src={post.image}
                        fill
                        className="object-cover"
                        alt="Thumb"
                      />
                    ) : (
                      post.icon
                    )}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold group-hover:text-red-700 transition-colors leading-tight mb-1">
                      {post.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tag Cloud Widget */}
          <div className="border border-gray-100 p-8 rounded-sm shadow-sm">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Tag Cloud
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Church",
                "Bible",
                "Hope",
                "Youth",
                "Events",
                "Prayer",
                "Ministry",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-red-700 hover:text-white transition-all cursor-pointer border border-gray-100"
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
