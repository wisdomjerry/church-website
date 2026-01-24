import { Plus } from "lucide-react";
import Link from "next/link";

export default function EventCard({ title, date, time, image, slug }) {
  // Fallback for dates that aren't "Month Day" format (e.g. "Every Sunday")
  const dateParts = date.split(" ");
  const month = dateParts[0];
  const day = dateParts[1] || "";

  return (
    /* Wrap entire card in Link to the dynamic sub-page */
    <Link href={`/events/${slug}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-300 relative flex flex-col h-[55vh] border border-gray-100">
        
        {/* Top Section: Image */}
        <div className="relative overflow-hidden h-64 shrink-0">
          <img
            src={image || "/church-interior.jpg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* The Ribbon (Vertical Date/Time) */}
          <div className="absolute top-4 left-0 w-8 z-10 flex flex-col bg-red-700 text-white shadow-lg rounded-r-md overflow-hidden">
            <div className="flex flex-col items-center py-2">
              <div className="vertical-text flex items-center gap-3 whitespace-nowrap">
                <span className="mb-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-90"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>

                {/* Date */}
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {month} {day}
                </span>

                {/* The Plus Icon */}
                <Plus size={12} strokeWidth={4} className="text-white/70 mx-1" />

                {/* Time */}
                <span className="text-[9px] font-bold uppercase opacity-90">
                  {time || "8:00 PM"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Details */}
        <div className="p-8 pt-10 flex flex-col flex-1 bg-white">
          <h4 className="font-black text-gray-900 text-lg leading-tight mb-4 group-hover:text-red-700 transition-colors uppercase">
            {title}
          </h4>

          {/* Read More UI */}
          <div className="mt-auto pb-2">
            <span
              className="text-red-700 text-[10px] font-black uppercase tracking-widest border-b-2 border-red-700 pb-0.5 inline-block group-hover:text-gray-900 group-hover:border-gray-900 transition-all"
            >
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}