"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Youtube,
  Menu,
  X,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ministries = [
    { name: "Children's Ministry", href: "/ministries/children" },
    { name: "Family Ministry", href: "/ministries/family" },
    { name: "Global Ministry", href: "/ministries/global" },
    { name: "Music Ministry", href: "/ministries/music" },
    { name: "Womens Ministry", href: "/ministries/womens" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 1. Top Bar */}
      <div
        className={`transition-all duration-300 hidden lg:block py-3 ${
          isSticky ? "bg-gray-900" : "bg-black/20 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-[10px] tracking-[0.2em] font-black uppercase text-white">
          <div className="flex gap-8">
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <Phone size={12} className="text-red-700" />
              <span>+123 456 789</span>
            </a>
            <a
              href="mailto:church@gmail.com"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <Mail size={12} className="text-red-700" />
              <span>christianfaithharvestchurch@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <Facebook size={14} className="hover:text-red-600 cursor-pointer" />
            <Youtube size={16} className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <nav
        className={`transition-all duration-300 ${isSticky ? "bg-white shadow-xl py-2" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col items-start leading-none">
              <span
                className={`text-3xl font-[1000] uppercase tracking-tighter ${isSticky ? "text-blue-900" : "text-white"}`}
              >
                <span className="text-red-700">CHRISTIAN</span> FAITH
              </span>
              <span
                className={`text-[8px] font-bold uppercase tracking-[0.3em] ${isSticky ? "text-gray-500" : "text-white/70"}`}
              >
                HARVEST CHURCH
              </span>
            </div>
            {/* The Teardrop Icon from Image */}
            <div className="relative w-8 h-10 bg-red-700 rounded-t-full rounded-b-[50%] flex items-center justify-center text-white shadow-lg ml-1">
              <Plus size={20} strokeWidth={3} />
            </div>
          </Link>

          {/* Desktop Links */}
          <div
            className={`hidden lg:flex items-center space-x-7 text-[11px] font-black uppercase tracking-widest ${
              isSticky ? "text-gray-900" : "text-white"
            }`}
          >
            <Link
              href="/"
              className="hover:text-red-700 transition flex items-center gap-1"
            >
              Home <Plus size={10} />
            </Link>
            <Link
              href="/about"
              className="hover:text-red-700 transition flex items-center gap-1"
            >
              About <Plus size={10} />
            </Link>
            <Link
              href="/sermons"
              className="hover:text-red-700 transition flex items-center gap-1"
            >
              Sermons <Plus size={10} />
            </Link>

            {/* Ministries Dropdown (The big one in image) */}
            <div className="relative group/dropdown py-4">
              <Link
                href="/ministries"
                className="hover:text-red-700 transition flex items-center gap-1 uppercase"
              >
                Ministries <Plus size={10} className="text-red-700" />
              </Link>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full  -translate-x-1/2 w-[500px] bg-white shadow-2xl border-t-4 border-red-700 grid grid-cols-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform origin-top scale-95 group-hover/dropdown:scale-100 p-6 gap-8">
                <div className="space-y-6 justify-center">
                  <h3 className="text-gray-900 border-b pb-2 mb-4 font-[1000]">
                    MINISTRY DETAILS
                  </h3>
                  <div className="flex flex-col justify-center space-y-3">
                    {ministries.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:text-red-700 lowercase first-letter:uppercase font-bold tracking-normal transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/events"
              className="hover:text-red-700 transition flex items-center gap-1"
            >
              Events <Plus size={10} />
            </Link>
            <Link href="/contact" className="hover:text-red-700 transition">
              Contact Us
            </Link>

            <Link
              href="/donate"
              className="bg-red-700 text-white px-8 py-3 rounded-sm hover:bg-gray-900 transition-all shadow-lg font-black tracking-[0.2em]"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu
                size={28}
                className={isSticky ? "text-gray-900" : "text-white"}
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
