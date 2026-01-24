"use client";

import { useRef, Suspense } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import EventSlider from "./components/EventSlider";
import HeroSlider from "./components/HeroSlider";
import FeatureCards from "./components/FeatureCards";
import FadeUp from "./components/FadeUp";
import LatestPosts from "./components/LatestPosts";
import Loading from "./components/Loading";
import Error from "./components/Error";

// Icons
import { Heart, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- DATA -------------------- */
const events = [
  {
    slug: "sunday-worship",
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    image: "/church-interior.png",
    description:
      "Join us for our weekly worship service featuring inspiring sermons, communal prayer, and uplifting music.",
  },
  {
    slug: "youth-fellowship",
    title: "Youth Fellowship",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "/David.png",
    description:
      "A dynamic and high-energy environment for our youth to meet, pray, and grow together.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    date: "1st Saturday",
    time: "9:00 AM",
    location: "Church Grounds",
    image: "/global.png",
    description:
      "Putting our faith into action. Join us as we serve our local community through volunteering.",
  },
  {
    slug: "mid-week-prayer",
    title: "Mid-Week Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Grace Chapel",
    image: "/church-about.png",
    description: "A dedicated time of intercession and spiritual renewal.",
  },
  {
    slug: "spiritually-reborn",
    title: "Spiritually Reborn As God’s Children",
    date: "Sep 20",
    time: "8.00 pm",
    image: "/Reborn.png",
    location: "Main Sanctuary",
    description:
      "Join us for a powerful night of transformation and spiritual awakening.",
  },
  {
    slug: "womens-bible-study",
    title: "Women's Bible Study",
    date: "Every Tuesday",
    time: "10:30 AM",
    location: "Fellowship Room",
    image: "/Sarah.png",
    description:
      "Deepen your understanding of the Word while building supportive relationships.",
  },
  {
    slug: "youth-night-light",
    title: "Youth Night: Light of the World",
    date: "Dec 24",
    time: "07.00 pm",
    image: "/church-interior.png",
    location: "Youth Hub",
    description:
      "An energetic Christmas Eve gathering designed specifically for the next generation.",
  },
  {
    slug: "family-brunch",
    title: "Monthly Family Brunch",
    date: "Last Saturday",
    time: "11:00 AM",
    location: "Main Hall",
    image: "/music.png",
    description:
      "Bringing all generations together for food, laughter, and shared stories.",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    img: "/music.png",
    desc: "Our music ministry is dedicated to leading the congregation into a deep and authentic worship experience through song and instrumental excellence.",
  },
  {
    title: "Global Ministry",
    img: "/global.png",
    desc: "Reaching beyond borders to share the message of hope. We support missions and community development projects around the world.",
  },
  {
    title: "Prison Ministry",
    img: "/prison.png",
    desc: "Bringing light to the darkest places. We visit and support those incarcerated, sharing the transformative power of grace and second chances.",
  },
  {
    title: "Youth Ministry",
    img: "/hero-1.png",
    desc: "Empowering the next generation to live boldly for their faith. We provide a space for growth, mentorship, and vibrant community.",
  },
];

/* -------------------- PAGE -------------------- */
export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Suspense fallback={<Loading pageName="Home" />}>
      <main className="min-h-screen bg-white overflow-x-hidden">
        {/* HERO SLIDER */}
        <HeroSlider />

        {/* FEATURE CARDS */}
        <FeatureCards />

        {/* ABOUT */}
        <section id="about" className="py-24 px-4">
          <FadeUp>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <img
                src="/church-interior.png"
                className="rounded shadow-2xl h-[500px] w-full object-cover"
                alt="Church"
              />
              <div>
                <span className="text-red-700 text-xs uppercase tracking-widest font-bold">
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 uppercase">
                  Making the world better through faith
                </h2>
                <p className="text-gray-500 italic mb-8">
                  “The name of the Lord is a strong tower; the righteous run
                  into it and are safe.”
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <Heart className="text-red-700 mb-3" />
                    <h4 className="font-bold uppercase text-sm">
                      Place of Heaven
                    </h4>
                  </div>
                  <div>
                    <BookOpen className="text-red-700 mb-3" />
                    <h4 className="font-bold uppercase text-sm">Study Bible</h4>
                  </div>
                </div>
                <button className="bg-red-700 text-white px-8 py-4 uppercase text-xs font-bold hover:bg-gray-900 transition">
                  Learn More
                </button>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* CALL TO ACTION - GLOWING VERSION */}
        <section className="relative py-32 text-white overflow-hidden">
          <img
            src="/church-interior.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="People praying"
          />
          <div className="absolute inset-0 bg-[#0a1227]/90" />

          <FadeUp>
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
              <div className="mb-12 flex justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full border border-red-500/20 animate-pulse" />
                  <div className="absolute w-20 h-20 rounded-full border border-red-500/40 animate-ping duration-[3000ms]" />
                  <div className="relative w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <Heart
                      size={22}
                      className="text-white"
                      fill="none"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight max-w-3xl mx-auto px-4">
                  “Pray! And listen to God! You can do this alone, but{" "}
                  <br className="hidden md:block" /> find somebody to do it with
                  you”
                </h2>
                <p className="text-gray-400 font-serif italic text-[13px] md:text-[15px] tracking-wide">
                  Real Story Cross Journey from Anna Hampton
                </p>
              </div>

              <div className="flex justify-center">
                <button className="group relative border-2 border-red-700/50 px-12 py-4 overflow-hidden transition-all hover:border-red-700">
                  <span className="relative z-10 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                    Donate Online
                  </span>
                  <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* MINISTRIES - REFACTORED TO MATCH IMAGE */}
        <section id="ministries" className="py-24 px-4 bg-white">
          <FadeUp>
            <div className="text-center mb-16 relative">
              <span className="text-red-700 uppercase text-[10px] tracking-[0.3em] font-black">
                Ministries
              </span>
              <h2 className="text-4xl font-black text-gray-900 uppercase mt-3 tracking-tighter">
                Our Ministries
              </h2>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-8 h-[2px] bg-red-700"></div>
                <div className="w-4 h-[2px] bg-red-700"></div>
              </div>
            </div>
          </FadeUp>

          <div className="max-w-7xl mx-auto relative px-4">
            <div className="flex justify-end mb-8 gap-2">
              <button
                ref={prevRef}
                className="bg-red-700 w-10 h-10 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-colors z-10"
              >
                <ChevronLeft className="-rotate-45" size={20} />
              </button>
              <button
                ref={nextRef}
                className="bg-red-700 w-10 h-10 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-colors z-10"
              >
                <ChevronRight className="-rotate-45" size={20} />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
              }}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {ministries.map((m, i) => (
                <SwiperSlide key={i}>
                  <FadeUp delay={`delay-${i}`}>
                    <div className="group bg-[#fcfcfc] border border-gray-100 rounded-sm overflow-hidden flex flex-col h-[500px] transition-all duration-500 hover:shadow-2xl relative">
                      <div className="h-60 overflow-hidden">
                        <img
                          src={m.img}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          alt={m.title}
                        />
                      </div>

                      <div className="p-8 flex flex-col flex-1">
                        <h4 className="font-black text-xl uppercase tracking-tighter text-gray-900 mb-4">
                          {m.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                          {m.desc}
                        </p>
                        <div className="mt-auto">
                          <button className="text-red-700 font-bold uppercase text-[11px] tracking-widest border-b border-transparent hover:border-red-700 transition-all">
                            Read More
                          </button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-red-700 transition-colors duration-300"></div>
                    </div>
                  </FadeUp>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="bg-gray-50 py-24 px-4">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black uppercase">Upcoming Events</h2>
            </div>
          </FadeUp>
          <EventSlider events={events} />
        </section>

        {/* CONTACT */}
        <section className="relative pb-32">
          <div
            className="relative h-[500px] flex flex-col items-center justify-start pt-20 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/church-interior.png')",
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-[#0a1227]/80"></div>
            <div className="relative z-10 text-center space-y-2">
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
                Get In Touch
              </h2>
              <div className="w-12 h-[2px] bg-red-700 mx-auto mt-4"></div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 -mt-48 relative z-20">
            <FadeUp>
              <div className="bg-white rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-14 space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light resize-none"
                    />
                  </div>
                  <button className="bg-red-700 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all duration-300 shadow-lg">
                    Send Now
                  </button>
                </div>
                <div className="relative min-h-[300px] hidden md:block">
                  <img
                    src="/contact-hand.jpg"
                    alt="Contact"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-red-900/10 transition-all"></div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <LatestPosts />
      </main>
    </Suspense>
  );
}
