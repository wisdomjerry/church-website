"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Church Name */}
          <div className="text-2xl font-bold">
            <Link href="/">Faith Harvest Church</Link>
          </div>

          {/* Navigation Links */}
          <div className="space-x-4 hidden md:flex">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/about" className="hover:text-yellow-300">About</Link>
            <Link href="/events" className="hover:text-yellow-300">Events</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
