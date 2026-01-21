import { ChevronRight } from "lucide-react";

export default function EventCard({ title, date, time, image }) {
  const [month, day] = date.split(" ");

  return (
    <div className="bg-white rounded-sm shadow-lg group hover:shadow-2xl transition-all duration-300 relative flex flex-col  h-full">
      {/* Top Section: Image + Overlapping Ribbon */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image || "/church-interior.jpg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* The Ribbon - Simple & Elegant like Image 2 */}
        <div className="absolute top-4 left-0 w-8 z-10 flex flex-col bg-red-700 text-white shadow-lg rounded-r-md">
          <div className="flex flex-col items-center py-4">
            {/* Icon and Text in one vertical flow */}
            <div className="vertical-text flex items-center gap-3 whitespace-nowrap">
              {/* Calendar Icon (matching the icon style in your screenshot) */}
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
                {month} {day}, 2019
              </span>

              {/* Vertical Separator Line */}
              <span className="w-[1px] h-6 bg-white/30 block"></span>

              {/* Time */}
              <span className="text-[9px] font-bold uppercase opacity-90">
                {time || "8:00 PM"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details under the Image */}
      <div className="p-8 flex flex-col flex-1 bg-white">
        <h4 className="font-black text-gray-900 text-lg leading-tight mb-4 group-hover:text-red-700 transition-colors uppercase">
          {title}
        </h4>

        <div className="mt-auto">
          <a
            href="#"
            className="text-red-700 text-[10px] font-black uppercase tracking-widest border-b-2 border-red-700 pb-0.5 inline-block hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
