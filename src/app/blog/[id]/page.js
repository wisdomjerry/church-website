"use client";
import React from "react";
import { useParams } from "next/navigation";
import { blogPosts } from "../../../data/blogData";
import {
  Calendar,
  User,
  MessageCircle,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function SingleBlogPost() {
  const params = useParams();

  // Find the post that matches the ID in the URL
  const post = blogPosts.find((p) => p.id === params.id);

  // If post doesn't exist
  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="relative h-[65vh] bg-[#0a1227] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('/blog-header-bg-1.png')] bg-cover bg-center"></div>
        <div className="relative z-10 top-4 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mb-6 font-bold">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/blog" className="text-gray-400 hover:text-white">
              Blog
            </Link>
            <ChevronRight size={10} />
            <span className="text-red-600">{post.category}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-4xl mx-auto leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Hero Droplet Badge - Point Down */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-sm mb-10 shadow-sm"
          />

          <div className="flex items-center gap-6 text-[11px] text-gray-400 uppercase tracking-widest mb-10 font-bold border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-red-700" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-red-700" /> By {post.author}
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={14} className="text-red-700" />{" "}
              {post.comments} Comments
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Unique Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed font-serif italic mb-8">
              {post.excerpt}
            </p>

            <div className="text-gray-600 leading-loose space-y-6">
              {/* Unique Paragraphs from blogData.js */}
              {post.content &&
                post.content.map((para, index) => <p key={index}>{para}</p>)}

              {/* Unique Quote from blogData.js */}
              {post.quote && (
                <blockquote className="border-l-4 border-red-700 pl-6 my-10 text-2xl font-serif italic text-gray-900 bg-[#F9F6F0] py-8 pr-6">
                  "{post.quote}"
                </blockquote>
              )}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest">
                Share this:
              </span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                  <Facebook size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              {["Faith", "Church", "Giving"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comment Form Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-10 relative">
              Leave a Reply
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-700"></span>
            </h3>
            <div className="bg-[#F9F6F0] p-10 rounded-lg">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <textarea
                    placeholder="Write your comment here..."
                    rows={6}
                    className="w-full bg-white border border-gray-100 p-5 rounded-lg text-sm focus:outline-none focus:border-red-700 transition-all resize-none"
                  ></textarea>
                </div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-white border border-gray-100 p-5 rounded-lg text-sm focus:outline-none focus:border-red-700 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-white border border-gray-100 p-5 rounded-lg text-sm focus:outline-none focus:border-red-700 transition-all"
                />
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-red-700 text-white px-10 py-5 rounded-lg text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-all"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* --- RELATED POSTS SECTION --- */}
          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h4 className="text-red-700 font-black uppercase text-[11px] tracking-[0.3em] mb-2">
                  Continue Reading
                </h4>
                <h3 className="text-3xl font-serif font-bold text-slate-900">
                  Related Articles
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-sm font-bold text-gray-400 hover:text-red-700 transition-colors flex items-center gap-2"
              >
                View All News <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id) // Don't show the current post
                .slice(0, 3) // Show only 3
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="group"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                      <img
                        src={related.image}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={related.title}
                      />
                    </div>
                    <h5 className="font-bold text-gray-900 leading-tight group-hover:text-red-700 transition-colors line-clamp-2">
                      {related.title}
                    </h5>
                    <div className="mt-2 flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase">
                      <span>{related.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>5 min read</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="bg-white border border-gray-100 p-10">
            <h4 className="text-xl font-serif font-bold mb-8 relative">
              Recent Posts
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-700"></span>
            </h4>
            <div className="space-y-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    href={`/blog/${item.id}`}
                    key={item.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-16 h-16 shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h5 className="text-[13px] font-black group-hover:text-red-700 leading-tight mb-1 uppercase line-clamp-2">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                        {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
