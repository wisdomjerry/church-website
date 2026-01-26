"use client";
import { blogPosts } from "../../data/blogData";
import FadeUp from "./FadeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function LatestPosts() {
  const swiperConfig = {
    modules: [Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1, // Default for mobile
    // Logic: This ensures exactly 3 show on desktop
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".blog-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="bg-gray-50 py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px]">
              Our Blog
            </span>
            <h2 className="text-4xl font-black mt-2 uppercase text-gray-900">
              Latest Posts
            </h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-8 h-1 bg-red-700"></div>
              <div className="w-2 h-1 bg-red-700"></div>
            </div>
          </div>
        </FadeUp>

        {/* SWIPER CONTAINER */}
        <div className="relative">
          <FadeUp>
            <Swiper {...swiperConfig} className="!pb-16">
              {blogPosts.slice(0, 6).map((post) => (
                <SwiperSlide key={post.id} className="h-auto">
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100">
                    {/* Image Section */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="relative h-52 shrink-0 overflow-hidden block"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>

                    {/* Content Section */}
                    <div className="p-6 pt-10 relative flex flex-col flex-grow text-center">
                      {/* FLOATING METADATA PILL */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[90%] bg-white shadow-md rounded-full py-2.5 px-4 flex items-center justify-center gap-3 border border-gray-50 z-10">
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          <Calendar size={12} className="text-red-700" />
                          <span className="text-[10px] font-bold text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <div className="w-px h-3 bg-gray-200"></div>
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          <User size={12} className="text-red-700" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            {post.author}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.id}`}>
                        <h4 className="text-base font-bold text-gray-800 leading-tight mb-3 group-hover:text-red-700 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="mt-auto pt-4 border-t border-gray-50">
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-red-700 font-black uppercase text-[10px] tracking-widest hover:text-gray-900 transition-colors group/btn"
                        >
                          Read More
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeUp>

          {/* Pagination Container */}
          <div className="blog-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </div>
    </section>
  );
}
