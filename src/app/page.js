"use client";

import { useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

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

// Icons
import { Heart, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- STYLES & CONSTANTS -------------------- */

const STYLES = {
  sectionTitle:
    "text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900",
  sectionLabel:
    "text-red-700 uppercase text-[10px] tracking-[0.3em] font-black mb-3 block",
  globalReadMore:
    "text-red-700 text-[10px] font-black uppercase tracking-widest border-b-2 border-red-700 pb-0.5 inline-block group-hover:text-gray-900 group-hover:border-gray-900 transition-all cursor-pointer",
};

/* -------------------- DATA -------------------- */

const events = [
  {
    slug: "sunday-worship",
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431105/Sunday_Worship_Service_uh1fbg.png",
    description:
      "Join us for our weekly worship service featuring inspiring sermons, communal prayer, and uplifting music.",
  },
  {
    slug: "youth-fellowship",
    title: "Youth Fellowship",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431591/youth-fellowship_kq568z.png",
    description:
      "A dynamic and high-energy environment for our youth to meet, pray, and grow together.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    date: "1st Saturday",
    time: "9:00 AM",
    location: "Church Grounds",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431107/community_outreach_ix7cro.png",
    description:
      "Putting our faith into action. Join us as we serve our local community through volunteering.",
  },
  {
    slug: "mid-week-prayer",
    title: "Mid-Week Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Grace Chapel",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431105/Mid-Week_Prayer_Meeting_u7d2hm.png",
    description: "A dedicated time of intercession and spiritual renewal.",
  },
  {
    slug: "spiritually-reborn",
    title: "Spiritually Reborn As God’s Children",
    date: "Sep 20",
    time: "8.00 pm",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431441/Reborn_wrskko.png",
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
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/Women_fellowship_oph9rz.png",
    description: 
      "Deepen your understanding of the Word while building supportive relationships.",
  },
  {
    slug: "youth-night-light",
    title: "Youth Night: Light of the World",
    date: "Dec 24",
    time: "07.00 pm",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431106/Youth_Night_inlcbk.png",
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
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431104/Monthly_Family_Brunch_djk0pb.png",
    description:
      "Bringing all generations together for food, laughter, and shared stories.",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769428710/Worship_Hero_l55ji4.png",
    slug: "music",
    desc: "Our music ministry is dedicated to leading the congregation into a deep and authentic worship experience.",
  },
  {
    title: "Global Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769420255/global_o8y8jh.png",
    slug: "global",
    desc: "Reaching beyond borders to share the message of hope. We support missions and development around the world.",
  },
  {
    title: "Women Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/pattern_leq5tv.png",
    slug: "women",
    desc: "A community of women dedicated to growing in faith, supporting one another, and serving with love.",
  },
  {
    title: "Married's Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769427589/married-hero_uib5mh.png",
    slug: "married",
    desc: "Strengthening the bonds of family through faith-based guidance and community support.",
  },
  {
    title: "Youth Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769424371/ministry-3_ndb1gf.png",
    slug: "youth",
    desc: "Empowering the next generation to live boldly for their faith through mentorship and community.",
  },
  {
    title: "Children Ministry",
    img: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769425461/hero-bg_z1lish.png",
    slug: "children",
    desc: "Creating a safe and fun environment for children to discover the love of God.",
  },
];

/* -------------------- SUB-COMPONENTS -------------------- */

const SectionHeader = ({ label, title, center = false, light = false }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {label && (
      <span className={`${STYLES.sectionLabel} ${light ? "text-red-500" : ""}`}>
        {label}
      </span>
    )}
    <h2
      className={`${STYLES.sectionTitle} ${light ? "text-white" : "text-gray-900"}`}
    >
      {title}
    </h2>
    <div
      className={`flex ${center ? "justify-center" : "justify-start"} gap-1 mt-4`}
    >
      <div className="w-8 h-[2px] bg-red-700"></div>
      {/* Keeping your gap design if needed */}
      <div className="w-4 h-[2px] bg-red-700"></div>
    </div>
  </div>
);

const MinistryCard = ({ ministry }) => (
  <Link href={`/ministries/${ministry.slug}`} className="group block h-full">
    <div className="bg-[#fcfcfc] border border-gray-100 rounded-xl overflow-hidden flex flex-col h-[500px] transition-all duration-500 hover:shadow-2xl relative">
      <div className="h-60 relative overflow-hidden">
        <Image
          src={ministry.img}
          alt={ministry.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h4 className="font-black text-xl uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
          {ministry.title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {ministry.desc}
        </p>
        <div className="mt-auto">
          <span className={STYLES.globalReadMore}>Read More</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-red-700 transition-colors duration-300" />
    </div>
  </Link>
);

/* -------------------- MAIN PAGE -------------------- */

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Suspense fallback={<Loading pageName="Home" />}>
      <main className="min-h-screen bg-white overflow-x-hidden">
        <HeroSlider />
        <FeatureCards />

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4">
          <FadeUp>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Church_Interior_g5pd12.png"
                  fill
                  className="object-cover"
                  alt="Church Interior"
                />
              </div>
              <div>
                <SectionHeader
                  label="About Us"
                  title="Making the world better through faith"
                />
                <p className="text-gray-500 italic mb-8">
                  “The name of the Lord is a strong tower; the righteous run
                  into it and are safe.”
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col items-start">
                    <Heart className="text-red-700 mb-3" />
                    <h4 className="font-bold uppercase text-sm">
                      Place of Heaven
                    </h4>
                  </div>
                  <div className="flex flex-col items-start">
                    <BookOpen className="text-red-700 mb-3" />
                    <h4 className="font-bold uppercase text-sm">Study Bible</h4>
                  </div>
                </div>
                <Link href="/about" className="group">
                  <span className={STYLES.globalReadMore}>Learn More</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* MINISTRIES SECTION */}
        <section id="ministries" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto relative">
            <FadeUp>
              <SectionHeader label="Ministries" title="Our Ministries" center />
            </FadeUp>

            {/* Navigation Arrows */}
            <div className="flex justify-end mb-8 gap-2">
              <button
                ref={prevRef}
                className="bg-red-700 w-10 h-10 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-all z-10"
              >
                <ChevronLeft className="-rotate-45" size={20} />
              </button>
              <button
                ref={nextRef}
                className="bg-red-700 w-10 h-10 rotate-45 flex items-center justify-center text-white hover:bg-gray-900 transition-all z-10"
              >
                <ChevronRight className="-rotate-45" size={20} />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onInit={(s) => {
                s.params.navigation.prevEl = prevRef.current;
                s.params.navigation.nextEl = nextRef.current;
                s.navigation.init();
                s.navigation.update();
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
                <SwiperSlide key={m.slug}>
                  <FadeUp delay={`delay-${i}`}>
                    <MinistryCard ministry={m} />
                  </FadeUp>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section id="events" className="bg-gray-50 py-24 px-4">
          <FadeUp>
            <div className="text-center mb-2">
              <span className="text-red-700 font-bold uppercase tracking-[0.2em] text-[11px]">
                Connect with our community
              </span>
            </div>

            <SectionHeader title="Upcoming Events" center />
          </FadeUp>
          <EventSlider events={events} />
        </section>

        {/* CONTACT SECTION */}
        <section className="relative pb-32">
          <div
            className="relative h-[500px] flex flex-col items-center justify-start pt-20 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/church-interior.png')",
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-[#0a1227]/80"></div>
            <div className="relative z-10 text-center">
              {/* Passed 'light' here to make the title white */}
              <SectionHeader
                label="Contact Us"
                title="Get In Touch"
                center
                light
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 -mt-48 relative z-20">
            <FadeUp>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                <form className="p-10 md:p-14 space-y-6">
                  <div className="space-y-4">
                    {["Name", "Email", "Phone"].map((placeholder) => (
                      <input
                        key={placeholder}
                        type={placeholder === "Email" ? "email" : "text"}
                        placeholder={placeholder}
                        className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                      />
                    ))}
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full border-b border-gray-200 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light resize-none"
                    />
                  </div>
                  <button className="bg-red-700 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all shadow-lg">
                    Send Now
                  </button>
                </form>
                <div className="relative hidden md:block">
                  <Image
                    src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769266055/contact-hand_frwyrz.png"
                    alt="Contact hands"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-red-900/10" />
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
