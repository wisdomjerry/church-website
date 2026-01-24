"use client";

import { useRef } from "react";

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

// Icons
import {
  Heart,
  BookOpen,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
      "Putting our faith into action by serving the local community.",
  },
];

const ministries = [
  { title: "Music Ministry", img: "/music.png", desc: "Leading worship through music." },
  { title: "Global Ministry", img: "/global.png", desc: "Reaching the world with love." },
  { title: "Prison Ministry", img: "/prison.png", desc: "Hope behind bars." },
  { title: "Youth Ministry", img: "/hero-1.png", desc: "Empowering the next generation." },
];

/* -------------------- PAGE -------------------- */

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSlider />
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
                “The name of the Lord is a strong tower; the righteous run into it and are safe.”
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <Heart className="text-red-700 mb-3" />
                  <h4 className="font-bold uppercase text-sm">Place of Heaven</h4>
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

      {/* CALL TO ACTION */}
      <section className="relative py-24 text-white">
        <img
          src="/church-interior.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-[#0f172a]/90" />

        <FadeUp>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <Heart size={48} className="mx-auto text-red-700 mb-6" />
            <h2 className="text-3xl md:text-4xl italic font-bold mb-6">
              “Pray! And listen to God!”
            </h2>
            <button className="border-2 border-red-700 px-10 py-4 uppercase text-xs font-bold hover:bg-red-700 transition">
              Donate Online
            </button>
          </div>
        </FadeUp>
      </section>

      {/* MINISTRIES */}
      <section id="ministries" className="py-24 px-4">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-red-700 uppercase text-xs tracking-widest font-bold">
              Ministries
            </span>
            <h2 className="text-4xl font-black uppercase mt-3">Our Ministries</h2>
          </div>
        </FadeUp>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:flex absolute right-0 -top-14 gap-3">
            <button ref={prevRef} className="bg-red-700 p-3 rotate-45 text-white">
              <ChevronLeft className="-rotate-45" />
            </button>
            <button ref={nextRef} className="bg-red-700 p-3 rotate-45 text-white">
              <ChevronRight className="-rotate-45" />
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
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {ministries.map((m, i) => (
              <SwiperSlide key={i}>
                <FadeUp>
                  <div className="bg-white shadow hover:shadow-xl transition rounded overflow-hidden">
                    <img src={m.img} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <h4 className="font-bold uppercase mb-2">{m.title}</h4>
                      <p className="text-sm text-gray-500">{m.desc}</p>
                    </div>
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

        <FadeUp>
          <EventSlider events={events} />
        </FadeUp>
      </section>

      {/* CONTACT */}
      <section className="bg-[#0f172a] py-24 text-white">
        <FadeUp>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
            <div>
              <PhoneCall size={40} className="mb-6" />
              <h3 className="text-4xl font-black uppercase mb-6">
                Contact Us
              </h3>
              <p className="text-gray-400">
                We usually respond within 24 hours.
              </p>
            </div>

            <button className="bg-red-700 px-10 py-5 uppercase text-xs font-bold hover:bg-white hover:text-red-700 transition">
              Open Live Chat
            </button>
          </div>
        </FadeUp>
      </section>

      <LatestPosts />
    </main>
  );
}
