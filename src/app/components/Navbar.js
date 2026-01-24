"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, Youtube, Menu, X, Plus } from "lucide-react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false); // Mobile Ministries toggle
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${isSticky ? "bg-white shadow-xl py-0" : "bg-transparent py-0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`text-2xl font-bold ${isSticky ? "text-blue-900" : "text-white"}`}
            >
              <span className="text-red-700">CHRISTIAN</span> FAITH
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 items-center text-[11px] font-black uppercase tracking-widest">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              if (item.name === "Ministries") {
                return (
                  <div
                    key={item.name}
                    className="relative group/dropdown h-[37px] flex items-center"
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-red-700 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-center" />
                    <Link
                      href={item.href}
                      className={`hover:text-red-700 transition flex items-center gap-1 uppercase ${isActive ? "text-red-700" : ""}`}
                    >
                      {item.name} <Plus size={10} className="text-red-700" />
                    </Link>
                    {/* Mega Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-2xl border-t-4 border-red-700 grid grid-cols-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform origin-top scale-95 group-hover/dropdown:scale-100 p-6 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-gray-900 border-b pb-2 mb-4 font-[1000]">
                          MINISTRY DETAILS
                        </h3>
                        <div className="flex flex-col space-y-3">
                          {ministries.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-gray-600 hover:text-red-700 lowercase first-letter:uppercase font-bold tracking-normal transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative h-[37px] flex items-center group/nav ${isActive ? "text-red-700" : ""}`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-[3px] bg-red-700 transition-transform duration-300 origin-center 
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`}
                  />
                  <span className="hover:text-red-700 transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <Link
              href="/donate"
              className="bg-red-700 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-start pt-24 space-y-4 text-xl z-40 overflow-y-auto">
            {menuItems.map((item) => {
              if (item.name === "Ministries") {
                return (
                  <div key={item.name} className="w-full px-6">
                    {/* Toggle Button */}
                    <button
                      className="flex justify-between items-center w-full text-left hover:text-red-700 transition-colors font-bold uppercase tracking-widest"
                      onClick={() => setIsMinistriesOpen(!isMinistriesOpen)}
                    >
                      {item.name}
                      <Plus
                        className={`transition-transform duration-300 ${isMinistriesOpen ? "rotate-45" : "rotate-0"}`}
                      />
                    </button>

                    {/* Sliding Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isMinistriesOpen ? "max-h-60 mt-3" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col pl-4 space-y-2">
                        {ministries.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsMinistriesOpen(false);
                            }}
                            className="hover:text-red-700 transition-colors font-medium text-base"
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
                  onClick={() => setIsOpen(false)}
                  className="hover:text-red-700 transition-colors font-bold uppercase tracking-widest px-6 py-2"
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-red-700 text-white px-8 py-3 rounded hover:bg-gray-900 transition mt-4"
            >
              DONATE
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
