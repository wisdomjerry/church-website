"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Search,
  ChevronRight,
  ChevronLeft,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { blogPosts } from "../../data/blogData";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* 1. ANIMATION LAYER: Clips the zoom effect */}
        <div className="absolute inset-0 overflow-hidden bg-[#0a1227]">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769434636/blog-header-bg_sbmyf9.png')" }}
          ></div>
        </div>

        {/* 2. CONTENT LAYER */}
        <div className="relative z-10 text-center text-white animate-fade-up">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={10} />
            <span className="text-red-600 font-bold">Blog</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold font-serif tracking-tight drop-shadow-2xl">
            Latest News
          </h1>
        </div>

        {/* 3. HERO DROPLET BADGE: To match About, Events, and Contact pages */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              {/* The Cross icon lines */}
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg border border-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image Side */}
                <div className="w-full md:w-[45%] shrink-0">
                  <Link
                    href={`/blog/${post.id}`}
                    className="block relative overflow-hidden rounded-md group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center">
                  {/* Category & Read Time Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-50 text-red-700 text-[10px] font-black uppercase px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <Clock size={12} className="text-gray-300" />
                      {Math.ceil(
                        (post.excerpt.length +
                          (post.content?.join("").length || 0)) /
                          1000,
                      )}{" "}
                      min read
                    </span>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-700 transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[12px] text-gray-400 font-semibold mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-800" />{" "}
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-red-800" /> By{" "}
                      {post.author}
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="bg-red-800 hover:bg-red-900 text-white text-[11px] font-black uppercase tracking-widest px-8 py-3 w-fit rounded transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="py-20 text-center text-gray-400">
              No blog posts found.
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex gap-2 pt-10 border-t border-gray-100">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={`w-12 h-12 flex items-center justify-center border border-gray-200 transition-all ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-red-700 hover:text-white"}`}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={`w-12 h-12 flex items-center justify-center font-bold transition-all ${
                      currentPage === num
                        ? "bg-red-700 text-white border-red-700"
                        : "border border-gray-200 hover:bg-red-700 hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                className={`w-12 h-12 flex items-center justify-center border border-gray-200 transition-all ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-red-700 hover:text-white"}`}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Search Box */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-100 p-5 text-sm focus:outline-none focus:border-red-700 transition-colors"
            />
            <button className="absolute right-0 top-0 h-full bg-red-700 text-white px-6 hover:bg-gray-900 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Categories List */}
          <div className="bg-white border border-gray-100 p-10">
            <h4 className="text-xl font-serif font-bold mb-8 relative">
              Categories
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-700"></span>
            </h4>
            <ul className="space-y-5">
              {["Charity", "Faithful", "Jesus Love", "Prayer", "Sermon"].map(
                (cat) => (
                  <li
                    key={cat}
                    className="group cursor-pointer border-b border-dotted border-gray-200 pb-3"
                  >
                    <Link
                      href="#"
                      className="flex justify-between items-center text-sm font-bold uppercase tracking-wider text-gray-600 group-hover:text-red-700 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <ChevronRight size={14} className="text-red-700" />{" "}
                        {cat}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
