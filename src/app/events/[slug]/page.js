"use client";
import { useParams } from "next/navigation";
import { Calendar, Clock, MapPin, ChevronRight, Share2, CheckCircle2, Users, Heart } from "lucide-react";
import Link from "next/link";
import Reveal from "../../components/FadeUp";

const events = [
  {
    slug: "sunday-worship",
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    image: "/church-interior.png",
    description:
      "Join us for our weekly worship service featuring inspiring sermons, communal prayer, and uplifting music. It is a time for the whole family to come together and experience the presence of God.",
  },
  {
    slug: "youth-fellowship",
    title: "Youth Fellowship",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "/David.png", // Using the Youth Pastor's context or a youth-related image
    description:
      "A dynamic and high-energy environment for our youth to meet, pray, and grow together. We focus on building a strong foundation in faith while navigating the challenges of modern life.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    date: "1st Saturday",
    time: "9:00 AM",
    location: "Church Grounds",
    image: "/global.png",
    description:
      "Putting our faith into action. Join us as we serve our local community through volunteering, charity distribution, and various support programs to help those in need.",
  },
  {
    slug: "mid-week-prayer",
    title: "Mid-Week Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Grace Chapel",
    image: "/church-about.png",
    description:
      "A dedicated time of intercession and spiritual renewal. We set aside our mid-week worries to seek God's guidance for our families, our church, and our nation.",
  },
  {
    slug: "spiritually-reborn",
    title: "Spiritually Reborn As God’s Children",
    date: "Sep 20",
    time: "8.00 pm",
    image: "/Reborn.png",
    location: "Main Sanctuary",
    description:
      "Join us for a powerful night of transformation and spiritual awakening. We will explore what it means to be truly reborn through faith and the word of God in a welcoming community environment.",
  },
  {
    slug: "womens-bible-study",
    title: "Women's Bible Study",
    date: "Every Tuesday",
    time: "10:30 AM",
    location: "Fellowship Room",
    image: "/Sarah.png", // Using the Worship Leader/Women's ministry context
    description:
      "Deepen your understanding of the Word while building lasting, supportive relationships with other women. A safe space for discussion, growth, and shared wisdom.",
  },
  {
    slug: "youth-night-light",
    title: "Youth Night: Light of the World",
    date: "Dec 24",
    time: "07.00 pm",
    image: "/church-interior.png",
    location: "Youth Hub",
    description:
      "An energetic Christmas Eve gathering designed specifically for the next generation. Featuring live music, interactive messages, and a focus on being the light in our schools and communities.",
  },
  {
    slug: "family-brunch",
    title: "Monthly Family Brunch",
    date: "Last Saturday",
    time: "11:00 AM",
    location: "Main Hall",
    image: "/music.png",
    description:
      "Bringing all generations together for food, laughter, and shared stories. This monthly gathering is designed to strengthen the bonds within our church family over a shared meal.",
  },
];

export default function EventSubPage() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug) || events[0];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
            style={{ backgroundImage: `url('${event.image}')` }}
          >
            <div className="absolute inset-0 bg-[#0a1227]/75"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="bg-red-700 inline-block px-6 py-2 mb-6 text-[12px] font-black uppercase tracking-[0.2em] shadow-xl">
            {event.date} — {event.time}
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl max-w-5xl mx-auto leading-tight">
            {event.title}
          </h1>

          <nav className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link
              href="/"
              className="text-red-500 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-500" />
            <Link
              href="/events"
              className="text-red-500 hover:text-white transition-colors"
            >
              Events
            </Link>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-white/60 font-medium">Details</span>
          </nav>
        </div>

        {/* Droplet Badge */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-2xl flex items-center justify-center">
            <div className="-rotate-[225deg] text-white">
              <Calendar size={28} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column (8 units) */}
          <div className="lg:col-span-8 space-y-12">
            <Reveal>
              <div className="prose prose-lg max-w-none">
                <span className="text-red-700 font-black uppercase tracking-widest text-xs">
                  Event Overview
                </span>
                <h2 className="text-4xl font-black text-gray-900 uppercase mt-2 mb-8">
                  Gathering in Grace
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-serif italic mb-8 border-l-4 border-red-700 pl-6">
                  "{event.description}"
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Our gatherings are designed to be a sanctuary for your soul.
                  Whether you are a lifelong believer or just curious about
                  faith, this event offers a space to connect with God and our
                  community. We believe that every time we meet, there is an
                  opportunity for a breakthrough.
                </p>
              </div>
            </Reveal>

            {/* Highlights Grid */}
            <Reveal delay="delay-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 border border-gray-100 shadow-sm">
                {[
                  {
                    title: "Worship & Praise",
                    desc: "Experience powerful, spirit-led music.",
                  },
                  {
                    title: "Biblical Teaching",
                    desc: "Deep dives into the Word of God.",
                  },
                  {
                    title: "Community Connection",
                    desc: "Meet and pray with like-minded people.",
                  },
                  {
                    title: "Family Friendly",
                    desc: "Safe environments for all ages.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-red-700 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Event Gallery Placeholder */}
            <Reveal delay="delay-2">
              <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={event.image}
                  alt="Detail"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1227]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-serif italic">
                    "Where two or three are gathered..."
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column / Sidebar (4 units) */}
          <div className="lg:col-span-4 space-y-8">
            <Reveal delay="delay-3">
              <div className="bg-[#0a1227] text-white p-10 rounded-sm shadow-xl relative overflow-hidden">
                {/* Decorative Pattern Overlay */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                  <Heart size={150} fill="white" />
                </div>

                <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                  Event Details
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-red-700/20 rounded-full flex items-center justify-center">
                      <Clock className="text-red-700" size={24} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                        Schedule
                      </h5>
                      <p className="text-lg font-serif">
                        {event.date} @ {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-red-700/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-red-700" size={24} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                        Location
                      </h5>
                      <p className="text-lg font-serif">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-red-700/20 rounded-full flex items-center justify-center">
                      <Users className="text-red-700" size={24} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                        Who can join?
                      </h5>
                      <p className="text-lg font-serif">Open to Everyone</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-red-700 hover:bg-white hover:text-red-700 transition-all duration-500 py-5 text-[11px] font-black uppercase tracking-[0.2em] mt-10 shadow-lg">
                  Confirm Attendance
                </button>
              </div>
            </Reveal>

            {/* Mini Map Placeholder */}
            <div className="bg-gray-200 h-64 w-full relative group">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                [ Interactive Map Placeholder ]
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white p-3 text-center shadow-md">
                <span className="text-[9px] font-black text-gray-900 uppercase tracking-widest">
                  Get Directions via Google Maps
                </span>
              </div>
            </div>

            {/* Share Section */}
            <div className="p-8 border-2 border-dashed border-gray-200 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">
                Invite a friend
              </span>
              <div className="flex justify-center gap-6">
                <Share2
                  size={24}
                  className="text-gray-400 hover:text-red-700 cursor-pointer transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
