"use client";
import { useState } from "react";
import { ChevronRight, Plus, Calendar, MapPin, Minus } from "lucide-react";
import Link from "next/link";

const events = [
  {
    slug: "sunday-worship",
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431105/Sunday_Worship_Service_uh1fbg.png",
    description:
      "Join us for our weekly worship service featuring inspiring sermons, communal prayer, and uplifting music. It is a time for the whole family to come together and experience the presence of God.",
  },
  {
    slug: "youth-fellowship",
    title: "Youth Fellowship",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Hall",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431591/youth-fellowship_kq568z.png", // Using the Youth Pastor's context or a youth-related image
    description:
      "A dynamic and high-energy environment for our youth to meet, pray, and grow together. We focus on building a strong foundation in faith while navigating the challenges of modern life.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    date: "1st Saturday",
    time: "9:00 AM",
    location: "Church Grounds",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431107/community_outreach_ix7cro.png",
    description:
      "Putting our faith into action. Join us as we serve our local community through volunteering, charity distribution, and various support programs to help those in need.",
  },
  {
    slug: "mid-week-prayer",
    title: "Mid-Week Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Grace Chapel",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431105/Mid-Week_Prayer_Meeting_u7d2hm.png",
    description:
      "A dedicated time of intercession and spiritual renewal. We set aside our mid-week worries to seek God's guidance for our families, our church, and our nation.",
  },
  {
    slug: "spiritually-reborn",
    title: "Spiritually Reborn As God’s Children",
    date: "Sep 20",
    time: "8.00 pm",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431441/Reborn_wrskko.png",
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
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769426691/Women_fellowship_oph9rz.png", // Using the Worship Leader/Women's ministry context
    description:
      "Deepen your understanding of the Word while building lasting, supportive relationships with other women. A safe space for discussion, growth, and shared wisdom.",
  },
  {
    slug: "youth-night-light",
    title: "Youth Night: Light of the World",
    date: "Dec 24",
    time: "07.00 pm",
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431106/Youth_Night_inlcbk.png",
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
    image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769431104/Monthly_Family_Brunch_djk0pb.png",
    description:
      "Bringing all generations together for food, laughter, and shared stories. This monthly gathering is designed to strengthen the bonds within our church family over a shared meal.",
  },
];

export default function EventsPage() {
  const [openIndex, setOpenIndex] = useState(4);

  const faqs = [
    {
      question: "What services do you offer at the church?",
      answer:
        "Our Sunday services feature dynamic worship, an inspiring sermon, and a welcoming community. You can expect a blend of traditional and contemporary worship styles.",
    },
    {
      question: "How can I get involved in church activities?",
      answer:
        "We have various volunteer opportunities and small groups. Everyone is welcome, and we encourage visitors to feel at home.",
    },
    {
      question: "Do you have programs for children and youth?",
      answer:
        "Yes, we offer specialized ministries for both children and youth to help them grow in faith in a fun, safe environment.",
    },
    {
      question: "How can I donate to the church?",
      answer:
        "You can donate through our website's 'Donate' button, during our services, or via mobile giving apps.",
    },
    {
      question: "What should I expect during a Sunday service?",
      answer:
        "Our Sunday services feature dynamic worship, an inspiring sermon, and a welcoming community. You can expect a blend of traditional and contemporary worship styles, with opportunities for prayer and fellowship. Everyone is welcome, and we encourage visitors to feel at home.",
    },
  ];

  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769436010/church-events_nacqjh.png')" }}
          >
            <div className="absolute inset-0 bg-[#0a1227]/50"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white pt-10 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl">
            Our Events
          </h1>

          <nav className="flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em]">
            {/* Added Link to Home */}
            <Link
              href="/"
              className="text-red-700 hover:text-red-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">
              <ChevronRight size={16} strokeWidth={4} />
            </span>
            <span className="text-white">Events</span>
          </nav>
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] text-white">
              <Calendar size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#B38B59] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Our Event
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#333333] leading-tight max-w-3xl mx-auto">
              Upcoming Events: Join Us <br /> for Growth and Fellowship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-300 pb-12 transition-all duration-300"
              >
                <div className="flex-1 space-y-4">
                  {/* Link Title to Slug */}
                  <Link href={`/events/${event.slug}`}>
                    <h3 className="text-3xl font-serif text-[#333333] leading-tight group-hover:text-red-700 transition-colors cursor-pointer">
                      {event.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
                    {event.description.substring(0, 120)}...
                  </p>
                </div>

                <div className="w-full md:w-[180px] space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif text-[#333333]">
                      {event.date}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-wider">
                      <Clock size={14} className="text-[#B38B59]" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-wider">
                    <MapPin size={14} className="text-[#B38B59]" />
                    <span>{event.location}</span>
                  </div>

                  <div className="pt-2">
                    {/* Link Button to Slug */}
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-[#B38B59] font-black text-[11px] uppercase tracking-[0.2em] border-b border-transparent hover:border-[#B38B59] transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Parallax */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769436072/community-bg_avserd.png')" }}
      >
        <div className="absolute inset-0 bg-[#0a1227]/40"></div>
        <div className="relative z-10 w-[90%] max-w-5xl border border-white/30 px-6 py-16 md:py-24 text-center text-white backdrop-blur-[2px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block opacity-80">
            Join Us
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Become a Part of Our <br /> Community Today
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed opacity-90 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#B38B59] hover:bg-[#8e6e46] text-white rounded-lg px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl">
            Get Started
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F9F6F0] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <span className="text-[#B38B59] font-bold uppercase tracking-[0.3em] text-[10px]">
              FAQS
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#333333] leading-tight">
              Frequently Ask Question
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="pt-4">
              <button className="bg-[#8B5A2B] text-white px-10 rounded-lg py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#724a23] transition-colors">
                See More
              </button>
            </div>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-6 flex justify-between items-center text-left transition-all group"
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${openIndex === index ? "text-[#B38B59]" : "text-gray-900"}`}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={18} className="text-[#B38B59]" />
                  ) : (
                    <Plus
                      size={18}
                      className="text-gray-400 group-hover:text-gray-900"
                    />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-8" : "max-h-0"}`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Clock({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
