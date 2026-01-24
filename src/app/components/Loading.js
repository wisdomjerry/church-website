"use client";

import { useEffect, useState } from "react";

export default function Loading({ pageName }) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // Small delay so the spinner is visible
    const timer = setTimeout(() => setShowSpinner(true), 300); // 300ms delay before showing
    return () => clearTimeout(timer);
  }, []);

  if (!showSpinner) return null; // Prevent rendering instantly

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Spinner */}
      <div className="mb-8 animate-spin-slow rounded-full border-8 border-blue-300 border-t-blue-600 w-20 h-20"></div>

      {/* Loading text */}
      <p className="text-2xl md:text-3xl font-bold animate-pulse text-blue-700">
        Loading {pageName}...
      </p>

      {/* Optional subtitle */}
      <p className="mt-2 text-gray-500 text-center max-w-xs">
        Hang tight, we’re fetching the latest content for you!
      </p>
    </div>
  );
}
