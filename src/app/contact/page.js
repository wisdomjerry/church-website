"use client";
import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      {/* Hero Section - Maintaining consistency with your Events page */}
      <section
        className="relative h-[65vh] w-full flex items-center justify-center bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
        style={{
          backgroundImage: "url('/church-contact.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay - Matches Zegen template opacity */}
        <div className="absolute inset-0 bg-[#0a1227]/80"></div>

        <div className="relative z-10 text-center text-gray-400 pt-10 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl">
            Contact Us
          </h1>

          <nav className="flex items-center justify-center gap-3 text-[12px] font-bold  tracking-[0.2em]">
            <span className="text-red-700 hover:text-red-600 transition-colors cursor-pointer">
              Home
            </span>
            <span className="text-gray-400">
              <ChevronRight size={16} strokeWidth={4} />
            </span>
            <span className="text-gray-400">Contact</span>
          </nav>
        </div>

        {/* Hero Droplet Badge */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
            <div className="-rotate-[225deg] relative w-6 h-9">
              <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
              <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Side: Contact Information (Zegen Style) */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <span className="text-[#B38B59] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl font-serif text-[#333333] leading-tight">
                Visit Our Church <br /> & Join Fellowship
              </h2>
            </div>

            <div className="space-y-8">
              {/* Info Item: Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-red-700 shrink-0 border border-gray-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase  text-[11px] tracking-widest mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Faith Street, Kampala, Uganda
                  </p>
                </div>
              </div>

              {/* Info Item: Phone/Email */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-red-700 shrink-0 border border-gray-100">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase  text-[11px] tracking-widest mb-1">
                    Contact Details
                  </h4>
                  <p className="text-gray-500 text-sm">+256 700 123 456</p>
                  <p className="text-gray-500 text-sm">
                    info@faithharvestchurch.org
                  </p>
                </div>
              </div>

              {/* Info Item: Hours */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-red-700 shrink-0 border border-gray-100">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase  text-[11px] tracking-widest mb-1">
                    Service Times
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Sun: 9:00 AM & 11:00 AM
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Wed: 7:00 PM (Prayer)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Saint Style) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold  tracking-widest text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#F9F6F0] rounded-lg border-none px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#B38B59] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold  tracking-widest text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-[#F9F6F0] border-none rounded-lg px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#B38B59] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold  tracking-widest text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-[#F9F6F0] rounded-lg border-none px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#B38B59] transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold  tracking-widest text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows="6"
                  className="w-full bg-[#F9F6F0] border-none rounded-lg px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#B38B59] transition-all"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="bg-[#8B5A2B] text-white rounded-lg px-12 py-5 text-[11px] font-bold  tracking-[0.2em] hover:bg-[#724a23] transition-all shadow-lg w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-gray-200 grayscale contrast-[1.1]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.165038165!2d32.5188469!3d0.3136111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db1d623edc5bb%3A0x597116809772c9a!2sKampala!5e0!3m2!1sen!2sug!4v1710000000000!5m2!1sen!2sug"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
