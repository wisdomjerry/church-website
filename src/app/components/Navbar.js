"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image for optimization
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Youtube,
  ChevronRight,
  Plus,
  Minus,
  Church,
} from "lucide-react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sermons", href: "/sermons" },
    { name: "Ministries", href: "/ministries" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const ministries = [
    { name: "Children's Ministry", href: "/ministries/children" },
    { name: "Family Ministry", href: "/ministries/family" },
    { name: "Global Ministry", href: "/ministries/global" },
    { name: "Music Ministry", href: "/ministries/music" },
    { name: "Womens Ministry", href: "/ministries/womens" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Desktop Top Bar */}
      {!isSticky && (
        <div className="hidden lg:flex bg-black/20 backdrop-blur-md text-white py-2 px-6 justify-between items-center border-b border-white/10 transition-all">
          <div className="flex gap-4 text-[10px] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-1">
              <Phone size={12} className="text-red-700" /> +1 234 567 890
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} className="text-red-700" />{" "}
              christainfaithharvestchurch@gmail.com
            </span>
          </div>
          <div className="flex gap-4">
            <Facebook
              size={14}
              className="hover:text-red-700 cursor-pointer transition"
            />
            <Youtube
              size={14}
              className="hover:text-red-700 cursor-pointer transition"
            />
          </div>
        </div>
      )}

      {/* Main Navigation Row */}
      <nav
        className={`transition-all duration-500 border-b ${
          isSticky
            ? "bg-white/90 backdrop-blur-lg border-gray-100 shadow-lg py-2"
            : "bg-black/10 backdrop-blur-sm border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 relative">
          {/* Logo Section */}
          <Link
            href="/"
            className="z-[120] relative flex items-center gap-3 group"
          >
            {/* ICON PLACEHOLDER: Replace <Church /> with <Image src="/logo.png" width={40} height={40} alt="Logo" /> */}
            <div
              className={`p-2 rounded-full transition-all duration-500 ${isSticky || isOpen ? "bg-red-700 text-white" : "bg-white/10 text-white group-hover:bg-black/20"}`}
            >
              <Image
                src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769274333/favicon.ico_lwmtd1.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </div>

            <div
              className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${isSticky || isOpen ? "text-gray-900" : "text-white"}`}
            >
              <span className="text-red-700">CHRISTIAN</span> FAITH
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 items-center text-[11px] font-black uppercase tracking-widest">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${isSticky ? "text-gray-700" : "text-white"} hover:text-red-700 ${pathname === item.href ? "text-red-700" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-red-700 text-white px-6 py-3 rounded-sm hover:bg-gray-900 transition text-[10px] tracking-[0.2em] shadow-lg"
            >
              DONATE
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-10 h-10 z-[120] outline-none group ml-auto"
          >
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-gray-900" : isSticky ? "bg-gray-900" : "bg-white"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : isSticky ? "bg-gray-900" : "bg-white"}`}
            ></span>
            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 w-6 bg-gray-900" : isSticky ? "bg-gray-900" : "bg-white"}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* --- SIDE DRAWER --- */}
      <div
        className={`fixed inset-0 w-full h-full lg:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
        style={{ zIndex: 115 }}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white transition-transform duration-500 ease-out shadow-2xl flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-8 pt-32 overflow-y-auto flex-1">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => {
                if (item.name === "Ministries") {
                  return (
                    <div
                      key={item.name}
                      className="py-2 border-b border-gray-50"
                    >
                      <button
                        onClick={() => setIsMinistriesOpen(!isMinistriesOpen)}
                        className="flex justify-between items-center w-full py-2 text-gray-900 font-black uppercase text-sm tracking-widest"
                      >
                        {item.name}
                        {isMinistriesOpen ? (
                          <Minus size={14} className="text-red-700" />
                        ) : (
                          <Plus size={14} className="text-red-700" />
                        )}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isMinistriesOpen ? "max-h-[300px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="flex flex-col pl-4 border-l-2 border-red-700/20 space-y-3 pb-4 mt-2">
                          {ministries.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-gray-500 text-sm hover:text-red-700 font-bold transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-4 border-b border-gray-50 text-gray-900 font-black uppercase text-sm tracking-widest flex justify-between items-center hover:text-red-700 transition-colors ${pathname === item.href ? "text-red-700" : ""}`}
                  >
                    {item.name}
                    <ChevronRight size={14} className="opacity-30" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10">
              <Link
                href="/donate"
                className="block w-full bg-red-700 text-white text-center py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-gray-900 transition shadow-lg"
              >
                Donate Online
              </Link>
            </div>
          </div>

          {/* Social Footer */}
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
              Follow Us
            </p>
            <div className="flex gap-6 text-gray-400">
              <Facebook
                size={18}
                className="hover:text-red-700 cursor-pointer transition"
              />
              <Youtube
                size={18}
                className="hover:text-red-700 cursor-pointer transition"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
