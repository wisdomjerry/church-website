"use client";
import React from "react";
import {
  Search,
  ChevronRightCircleIcon,
  Calendar,
  ChevronLeftCircleIcon,
  Quote,
  ArrowRight,
  
} from "lucide-react";
import Link from "next/link";

export default function ChildrensMinistry() {
  const popularPosts = [
    {
      title: "Testimony Love Offering So Blessed",
      date: "Aug 12, 2019",
      icon: <Quote size={14} />,
    },
    {
      title: "Believing In Your Faith Truth Duty",
      date: "Jun 20, 2019",
      icon: <Calendar size={14} />,
    },
    {
      title: "An Important Conversation Around",
      date: "Apr 10, 2019",
      image: "/post-thumb.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION WITH DARK OVERLAY */}
      <section className="relative h-[60vh] bg-[#0a1227] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425461/hero-bg_z1lish.png')] bg-cover bg-center"></div>

        <div className="relative top-5 z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <span className="text-gray-400">Home</span>
            <ChevronRightCircleIcon size={10} />
            <span className="text-red-600">Our Ministry</span>
            <ChevronRightCircleIcon size={10} />
            <span>Children's Ministry</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Children's Ministry
          </h1>
        </div>

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
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT CONTENT AREA */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl font-serif text-gray-900 font-bold">
            Children's Ministry
          </h2>

          <div className="rounded-sm overflow-hidden shadow-sm">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425555/Child_praying_dzsh5k.png"
              alt="Child praying"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p>
              Children's ministry is the most important ministry in our church.
              This ministry helps kids learn about the Lord Jesus and how to
              start a personal relational growth. Children come to faith in
              Jesus through Primary voices, Bible lessons, Singing, and Prayer.
            </p>
            <p>
              Every month, they grow closer to Jesus and learn more about His
              love and blessings. Zegen is specially designed for non-profit
              churches, modern churches, prayer groups, Christian, charity,
              volunteering, believer community, non-profit organization,
              protestant church, volunteer, religious website, and God
              leadership academy.
            </p>
          </div>

          {/* Bottom Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425460/child-3_orbnty.png"
              className="h-40 w-full object-cover rounded-sm"
              alt="Ministry 1"
            />
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425460/child-2_d8zisx.png"
              className="h-40 w-full object-cover rounded-sm"
              alt="Ministry 2"
            />
            <img
              src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425723/child-1_sqnu1a.png"
              className="h-40 w-full object-cover rounded-sm"
              alt="Ministry 3"
            />
          </div>

          <div className="pt-10 flex justify-between border-t border-gray-100">
            <Link
              href="/ministries/youth"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              <ChevronLeftCircleIcon size={16} /> Youth
            </Link>

            <Link
              href="/ministries/music"
              className="bg-red-700 text-white px-8 py-3 rounded-sm flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Music <ChevronRightCircleIcon size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Search Widget */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-100 p-4 pr-12 text-sm focus:outline-none focus:border-red-700"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-red-700 text-white px-4 hover:bg-gray-900 transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* Popular Posts Widget */}
          <div className="border border-gray-100 p-8 rounded-sm">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Popular Posts
            </h4>
            <div className="space-y-6 mt-4">
              {popularPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  {post.image ? (
                    <img
                      src={post.image}
                      className="w-16 h-16 object-cover"
                      alt="Post thumb"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-red-50 flex items-center justify-center text-red-700">
                      {post.icon}
                    </div>
                  )}
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
          <div className="border border-gray-100 p-8 rounded-sm">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">
              Tag Cloud
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Admissions",
                "Church",
                "Believer",
                "Hope",
                "Events",
                "Prayer",
                "Sermon",
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
