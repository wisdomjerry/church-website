"use client";
import {
  Heart,
  Landmark,
  Smartphone,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Reveal from "../components/FadeUp";

const givingMethods = [
  {
    icon: <Globe className="text-red-700" size={32} />,
    title: "Online Giving",
    desc: "Give securely via Credit Card or PayPal directly through our portal.",
    button: "Give Online",
    color: "bg-red-50",
  },
  {
    icon: <Landmark className="text-red-700" size={32} />,
    title: "Bank Transfer",
    desc: "Direct deposit to our account. Ideal for tithes and monthly pledges.",
    button: "View Details",
    color: "bg-gray-50",
  },
  {
    icon: <Smartphone className="text-red-700" size={32} />,
    title: "Mobile Apps",
    desc: "Support our mission via CashApp, Venmo, or Zelle using our handle.",
    button: "Open Apps",
    color: "bg-red-50",
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0a1227]">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 animate-slow-zoom"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769495427/donate_ghjwxq.png')" }}
          ></div>
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1227]/80"></div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-2xl">
            Support Our Mission
          </h1>
          <p className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">
            "Each one must give as he has decided in his heart"
          </p>
        </div>

        {/* --- DROPLET BADGE --- */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
          <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 duration-500">
            <div className="-rotate-[225deg] text-white">
              {/* Heart icon for giving/donation theme */}
              <Heart size={28} strokeWidth={2.5} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="text-red-700 font-black uppercase tracking-widest text-xs">
                Your Impact
              </span>
              <h2 className="text-4xl font-black text-gray-900 uppercase leading-tight">
                Your Generosity <br /> Changes Lives
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                When you give, you aren't just supporting a building; you are
                fueling community outreach, youth mentorship, and spiritual
                growth. Your tithes and offerings help us reach the lost and
                provide hope to those in need.
              </p>
              <div className="flex items-center gap-3 text-gray-900 font-bold">
                <ShieldCheck className="text-green-600" />
                <span className="text-sm">Secure & Encrypted Transactions</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay="delay-1">
            <div className="bg-[#fcfcfc] border border-gray-100 p-8 shadow-2xl rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wider">
                Quick Donation
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["$25", "$50", "$100"].map((amt) => (
                  <button
                    key={amt}
                    className="border-2 border-gray-200 py-3 rounded-md font-bold hover:border-red-700 hover:text-red-700 transition-all"
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom Amount ($)"
                className="w-full p-4 border border-gray-200 rounded-md mb-6 outline-none focus:border-red-700"
              />
              <button className="w-full bg-red-700 text-white py-4 font-black uppercase tracking-widest hover:bg-gray-900 transition-all">
                Proceed to Give
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- GIVING METHODS --- */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Ways to Give
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {givingMethods.map((method, idx) => (
              <Reveal key={idx} delay={`delay-${idx}`}>
                <div
                  className={`${method.color} p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col`}
                >
                  <div className="mb-6">{method.icon}</div>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">
                    {method.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {method.desc}
                  </p>
                  <button className="flex items-center gap-2 text-red-700 font-black uppercase text-[10px] tracking-widest group">
                    {method.button}{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SCRIPTURE FOOTER --- */}
      <section className="py-20 text-center px-6">
        <Heart
          className="mx-auto text-red-700 mb-6"
          size={40}
          fill="currentColor"
        />
        <h3 className="text-2xl font-serif italic text-gray-800 max-w-2xl mx-auto leading-relaxed">
          "God is able to bless you abundantly, so that in all things at all
          times, having all that you need, you will abound in every good work."
        </h3>
        <p className="mt-4 text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">
          2 Corinthians 9:8
        </p>
      </section>
    </main>
  );
}
