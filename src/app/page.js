"use client";
import { useRef } from "react";
// 1. Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EventSlider from "./components/EventSlider";
import HeroSlider from "./components/HeroSlider";
import FeatureCards from "./components/FeatureCards";
import Reveal from "./components/Reveal";
import {
  Heart,
  BookOpen,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const events = [
  {
    title: "Spiritually Reborn As God’s Children",
    date: "Sep 20",
    time: "8.00 pm",
    image: "/church-interior.jpg",
  },
  {
    title: "Zegen Church Jesus Hymn Song",
    date: "Oct 27",
    time: "12.00 pm",
    image: "/music.jpg",
  },
  {
    title: "Faith Harvest Community Prayer",
    date: "Nov 05",
    time: "10.00 am",
    image: "/global.jpg",
  },
  {
    title: "Biblical Family Values Workshop",
    date: "Dec 12",
    time: "09.00 am",
    image: "/prison.jpg",
  },
  {
    title: "Youth Night: Light of the World",
    date: "Dec 24",
    time: "07.00 pm",
    image: "/church-interior.jpg",
  },
  {
    title: "New Year Praise & Testimony",
    date: "Jan 01",
    time: "11.00 pm",
    image: "/music.jpg",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    img: "/music.png",
    desc: "Children's ministry is the most important memory in our church. This ministry helps kids learn about the.",
  },
  {
    title: "Global Ministry",
    img: "/global.png",
    desc: "Children's ministry is the most important memory in our church. This ministry helps kids learn about the.",
  },
  {
    title: "Prison Ministry",
    img: "/prison.png",
    desc: "Children's ministry is the most important memory in our church. This ministry helps kids learn about the.",
  },
  {
    title: "Family Ministry",
    img: "/hero-3.png",
    desc: "Building strong foundations for families. We provide resources and community to help families grow together in faith.",
  },
  {
    title: "Youth Ministry",
    img: "/hero-1.png",
    desc: "Empowering the next generation to lead with faith and purpose. A space for teens to find their identity in Christ.",
  },
  {
    title: "Worship Ministry",
    img: "/hero-2.png",
    desc: "Lifting our voices in praise. Our worship team leads the congregation into the presence of God through music and song.",
  },
  {
    title: "Outreach Ministry",
    img: "/hero-3.png",
    desc: "Taking the church to the streets. Serving our local community through food drives, support, and active presence.",
  },
];

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />
      <FeatureCards />

      {/* 1. About Section */}
      <Reveal>
        <section id="about" className="bg-white py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -top-10 -left-10 w-32 h-32 opacity-10 hidden md:block"
                style={{
                  backgroundImage:
                    "radial-gradient(#000 1.5px, transparent 1.5px)",
                  backgroundSize: "15px 15px",
                }}
              ></div>
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10 hidden md:block"
                style={{
                  backgroundImage:
                    "radial-gradient(#000 1.5px, transparent 1.5px)",
                  backgroundSize: "15px 15px",
                }}
              ></div>
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/church-interior.png"
                  alt="Church"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div className="text-left">
              <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px]">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 uppercase text-gray-900 leading-tight">
                We are taking small steps to <br /> make earth better planet
              </h2>
              <div className="flex gap-1 mb-8">
                <div className="w-8 h-1 bg-red-700"></div>
                <div className="w-2 h-1 bg-red-700"></div>
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm italic">
                "The name of the Lord is a strong tower; the righteous run into
                it and are safe."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <div className="bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-gray-900">
                    Place of Heaven
                  </h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen size={20} fill="currentColor" />
                  </div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-gray-900">
                    Study Bible
                  </h4>
                </div>
              </div>
              <button className="bg-red-700 rounded-sm text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Call to Action Section with Glowing Heart */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/church-interior.png"
            alt="Praying Hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            {/* The Glowing Heart Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center animate-heart-glow shadow-[0_0_15px_rgba(185,28,28,0.5)]">
                <Heart size={28} className="text-white" fill="currentColor" />
              </div>
            </div>

            {/* Quote Text */}
            <h2 className="text-2xl md:text-4xl font-bold italic mb-6 leading-tight">
              "Pray! And listen to God! You can do this alone, but{" "}
              <br className="hidden md:block" />
              find somebody to do it with you"
            </h2>

            {/* Author Text */}
            <p className="text-gray-400 font-serif italic text-lg mb-10">
              Real Story Cross Journey from Anna Hampton
            </p>

            {/* Button with Red Border */}
            <button className="border-2 border-red-700 rounded-sm px-10 py-4 text-[13px] font-black uppercase tracking-[0.2em] hover:bg-red-700 transition-all duration-300">
              Donate Online
            </button>
          </Reveal>
        </div>
      </section>

      {/* 2. Ministries Section - Slider Implementation */}
      <section id="ministries" className="py-24 bg-white px-4 relative">
        <div className="max-w-6xl mx-auto relative mb-16">
          <Reveal>
            <div className="text-center md:text-center">
              <span className="text-red-700  font-bold uppercase tracking-[0.3em] text-[11px]">
                Ministries
              </span>
              <h2 className="text-4xl font-black text-gray-900 uppercase mt-2">
                Our Ministries
              </h2>
              <div className="flex justify-center md:justify-center gap-1 mt-4">
                <div className="w-8 h-[2px] bg-red-700"></div>
                <div className="w-2 h-[2px] bg-red-700"></div>
              </div>
            </div>
          </Reveal>

          {/* Connected Diamond Arrows */}
          <div className="hidden md:flex absolute right-0 bottom-0 gap-3 z-20">
            <button
              ref={prevRef}
              className="w-10 h-10 bg-red-700 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-lg active:scale-90"
            >
              <ChevronLeft size={20} className="-rotate-45" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 bg-red-700 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-lg active:scale-90"
            >
              <ChevronRight size={20} className="-rotate-45" />
            </button>
          </div>
        </div>

        {/* Swiper Slider with 3 Card Display */}
        <div className="max-w-6xl mx-auto ministry-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {ministries.map((m, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-white rounded-t-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 border-b-[4px] border-b-red-700 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={m.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt={m.title}
                    />
                    <div className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8 text-left flex flex-col flex-grow">
                    <h4 className="font-black uppercase text-xl text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {m.desc}
                    </p>
                    <button className="text-red-700 text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-red-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-all w-fit">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <Reveal>
        <section className="relative bg-[#0f172a] mt-20 pb-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="relative z-30  -mt-20  h-[400px] w-full perspective-1000 group">
              <div className="w-full h-full  animate-float group-hover:[animation-play-state:paused]">
                <div className="relative w-full h-full transition-transform duration-700  preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-red-700 shadow-2xl flex flex-col items-center justify-center p-12 text-white text-center rounded-lg">
                    <div className="mb-6 p-5 bg-white/10 rounded-full border border-white/20">
                      <PhoneCall size={32} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-black uppercase tracking-[0.2em] text-lg mb-4">
                      Call Us
                    </h4>
                    <div className="w-8 h-[2px] bg-white/40 mx-auto mb-6"></div>
                    <p className="text-sm opacity-80 mb-2">
                      684 West College St. Sun City, USA.
                    </p>
                    <p className="text-2xl font-black">+8 (123) 985 789</p>
                    <p className="text-xs mt-8 opacity-60 uppercase tracking-widest font-bold">
                      Hover to Message
                    </p>
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-white shadow-2xl rotate-y-180 flex flex-col items-center justify-center p-10 text-center border-2 rounded-lg ">
                    <h4 className="font-black uppercase tracking-widest text-red-700 text-lg mb-4">
                      Send a Message
                    </h4>
                    <p className="text-gray-500 text-sm mb-6">
                      We usually respond within 24 hours.
                    </p>
                    <div className="w-full space-y-3 text-left">
                      <span className="text-[10px] font-black uppercase text-gray-400">
                        Office Hours
                      </span>
                      <p className="text-gray-900 font-bold text-sm">
                        Mon - Fri: 9:00 AM - 5:00 PM
                      </p>
                      <button className="w-full bg-red-700 text-white py-3 text-[10px] rounded-sm font-black uppercase tracking-widest hover:bg-gray-900 transition-colors">
                        Open Live Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-12 lg:pl-20 flex flex-col justify-center items-start">
              <span className="text-red-700 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[2px] bg-red-700"></span> Get in touch
              </span>
              <h3 className="text-4xl font-black text-white uppercase mt-4 mb-6 leading-tight">
                Don't hesitate <br /> Contact Us
              </h3>
              <p className="text-gray-400 text-sm max-w-xl mb-10 leading-relaxed">
                Feel free to contact us, Zegen Church WP Theme comes with
                sermons, ministries, events, testimonials, staff members, church
                locations and colors to enhance your website.
              </p>
              <button className="bg-red-700 text-white px-10 py-5 text-[11px] rounded-sm font-black uppercase tracking-widest hover:bg-white hover:text-red-700 transition-all shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Events Section */}
      <section id="events" className="bg-[#f8f9fa] py-24 px-4 overflow-hidden">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center mb-16">
            <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px]">
              Join Us
            </span>
            <h2 className="text-4xl font-black mt-2 uppercase text-gray-900">
              Upcoming Events
            </h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-8 h-1 bg-red-700"></div>
              <div className="w-2 h-1 bg-red-700"></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay="delay-2">
          <EventSlider events={events} />
        </Reveal>
      </section>
    </main>
  );
}
