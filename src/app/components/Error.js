"use client";

import { useEffect } from "react";

export default function Error({ error, reset, pageName }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-gray-800 font-sans">
      <div className="mb-6 text-red-600 text-6xl animate-pulse">⚠️</div>
      <h1 className="text-3xl font-bold mb-4 text-red-700">
        Oops! Something went wrong on {pageName} page.
      </h1>
      <p className="mb-6 text-gray-600 text-center max-w-sm">{error.message}</p>
      <button
        className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
