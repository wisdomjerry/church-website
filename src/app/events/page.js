"use client";
import { useState } from "react";
import { ChevronRight, Plus, Calendar, MapPin, Minus } from "lucide-react";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday - 10:00 AM",
    location: "Main Sanctuary",
    description:
      "Join us for our weekly worship service with inspiring sermons and uplifting music.",
  },
  {
    title: "Youth Fellowship",
    date: "Friday - 6:00 PM",
    location: "Youth Hall",
    description:
      "A time for our youth to meet, pray, and grow together in faith and fellowship.",
  },
  {
    title: "Community Outreach",
    date: "1st Saturday of every month",
    location: "Church Grounds",
    description:
      "Serving our community through volunteering, charity events, and support programs.",
  },
  {
    title: "Mid-Week Prayer Meeting",
    date: "Wednesday - 7:00 PM",
    location: "Grace Chapel",
    description:
      "A dedicated time of intercession and spiritual renewal as we seek God's guidance for our families and nation.",
  },
  {
    title: "Women's Bible Study",
    date: "Tuesday - 10:30 AM",
    location: "Fellowship Room",
    description:
      "Deepen your understanding of the Word while building lasting relationships with other women in our community.",
  },
  {
    title: "Monthly Family Brunch",
    date: "Last Saturday - 11:00 AM",
    location: "Main Hall",
    description:
      "Bringing families together for food, laughter, and shared stories. All generations are welcome to join the table.",
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
      {/* Hero Section - Fixed height and relative positioning to prevent overlap */}
      <section
        className="relative h-[65vh] w-full flex items-center justify-center bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
        style={{
          backgroundImage: "url('/church-events.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay - Matches Zegen template opacity */}
        <div className="absolute inset-0 bg-[#0a1227]/50"></div>

        <div className="relative z-10 text-center text-white pt-10 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl">
            Our Events
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em]">
            <span className="text-red-700 hover:text-red-600 transition-colors cursor-pointer">
              Home
            </span>
            <span className="text-gray-400">
              <ChevronRight size={16} strokeWidth={4} />
            </span>
            <span className="text-white">Events</span>
          </nav>
        </div>

        {/* Hero Droplet Badge - Point Down */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Saint Template Style */}
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
                className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-300 pb-12 transition-all duration-300 hover:opacity-80"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-serif text-[#333333] leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
                    {event.description}
                  </p>
                </div>

                <div className="w-full md:w-[180px] space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif text-[#333333]">
                      May 27Th
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-wider">
                      <Calendar size={14} className="text-[#B38B59]" />
                      <span>10 AM - 14 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-wider">
                    <MapPin size={14} className="text-[#B38B59]" />
                    <span>{event.location}</span>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#"
                      className="text-[#B38B59] font-bold text-[11px] uppercase tracking-[0.2em] hover:underline"
                    >
                      Learn More
                    </a>
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
        style={{ backgroundImage: "url('/community-bg.jpg')" }}
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
          <button className="bg-[#B38B59] hover:bg-[#8e6e46] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl">
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
              <button className="bg-[#8B5A2B] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#724a23] transition-colors">
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
