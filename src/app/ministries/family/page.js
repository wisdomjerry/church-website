"use client";
import React from "react";
import { 
  Search, 
  ChevronRight, 
  Calendar, 
  Quote,
  ChevronLeft,
  Heart
} from "lucide-react";

export default function FamilyMinistry() {
  // Sidebar Category Data from image_211403.jpg
  const categories = [
    { name: "Charity", count: 12 },
    { name: "Faithful", count: 8 },
    { name: "Jesus Love", count: 15 },
    { name: "Prayer", count: 21 },
    { name: "Sermon", count: 9 },
  ];

  const popularPosts = [
    { title: "Testimony Love Offering So Blessed", date: "Aug 12, 2019", icon: <Quote size={14} /> },
    { title: "Believing In Your Faith Truth Duty", date: "Jun 20, 2019", icon: <Heart size={14} /> },
    { title: "An Important Conversation Around", date: "Apr 10, 2019", image: "/family-post.jpg" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] bg-[#0a1227] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('/family-hero.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <span className="text-gray-400">Home</span>
            <ChevronRight size={10} />
            <span className="text-red-600">Ministries</span>
            <ChevronRight size={10} />
            <span>Family Ministry</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Family Ministry</h1>
        </div>

        {/* Droplet Cross Icon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
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
          <h2 className="text-3xl font-serif text-gray-900 font-bold">Family Ministry</h2>
          
          <div className="rounded-sm overflow-hidden">
            <img 
              src="/family-main.jpg" 
              alt="Family praying together" 
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p>
              Family ministry is about building Christ-centered homes. We provide resources, fellowship, 
              and guidance to help families grow together in faith. Our mission is to support marriages 
              and parents as they lead their children in the way of the Lord.
            </p>
            <p>
              Through our monthly family nights and counseling services, we create a community where 
              families can find support and encouragement. Zegen theme provides the perfect layout 
              to showcase these initiatives and bring believers together.
            </p>
          </div>

          {/* Ministry Gallery Thumbs */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <img src="/family-thumb-1.jpg" className="h-32 w-full object-cover rounded-sm" />
            <img src="/family-thumb-2.jpg" className="h-32 w-full object-cover rounded-sm" />
            <img src="/family-thumb-3.jpg" className="h-32 w-full object-cover rounded-sm" />
          </div>

          {/* 3. NAVIGATION BUTTONS (New addition for Family page) */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-100">
            <button className="bg-red-700 text-white px-6 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg">
              <ChevronLeft size={14} /> Prev
            </button>
            <button className="bg-red-700 text-white px-6 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-10">
          
          {/* Search */}
          <div className="relative border border-gray-100">
            <input type="text" placeholder="Search..." className="w-full p-4 pr-12 text-sm focus:outline-none" />
            <button className="absolute right-0 top-0 bottom-0 bg-red-700 text-white px-4">
              <Search size={18} />
            </button>
          </div>

          {/* Categories Widget (Unique to Family Page) */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">Categories</h4>
            <div className="space-y-4 mt-4">
              {categories.map((cat) => (
                <div key={cat.name} className="flex justify-between items-center text-sm group cursor-pointer border-b border-dotted border-gray-200 pb-2">
                  <span className="text-gray-600 group-hover:text-red-700 flex items-center gap-2">
                    <ChevronRight size={12} className="text-red-700" /> {cat.name}
                  </span>
                  <span className="text-gray-300 text-[10px]">({cat.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="border border-gray-100 p-8">
            <h4 className="text-lg font-serif font-bold mb-6 border-b-2 border-red-700 inline-block">Popular Posts</h4>
            <div className="space-y-6 mt-4">
              {popularPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  {post.image ? <img src={post.image} className="w-16 h-16 object-cover" /> : 
                  <div className="w-16 h-16 bg-red-50 flex items-center justify-center text-red-700">{post.icon}</div>}
                  <div>
                    <h5 className="text-sm font-bold group-hover:text-red-700 leading-tight mb-1">{post.title}</h5>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}