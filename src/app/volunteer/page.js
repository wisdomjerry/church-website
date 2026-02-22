"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, Users, Zap, Smile, MessageCircle, CheckCircle, MapPin, Clock } from "lucide-react";
import FadeUp from "../components/FadeUp";
import Loading from "../components/Loading";

const STYLES = {
  sectionLabel: "text-red-700 uppercase text-[10px] tracking-[0.3em] font-black mb-3 block",
  sectionTitle: "text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900",
  lightSectionTitle: "text-4xl md:text-5xl font-black uppercase tracking-tighter text-white",
};

const SectionHeader = ({ label, title, center = false, light = false }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {label && <span className={STYLES.sectionLabel}>{label}</span>}
    <h2 className={light ? STYLES.lightSectionTitle : STYLES.sectionTitle}>
      {title}
    </h2>
    <div className={`flex ${center ? "justify-center" : "justify-start"} gap-1 mt-4`}>
      <div className="w-8 h-[2px] bg-red-700"></div>
      <div className="w-4 h-[2px] bg-red-700"></div>
    </div>
  </div>
);

const OpportunityCard = ({ icon: Icon, title, description, commitment, location, requirements }) => (
  <FadeUp>
    <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-6">
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-xl font-black uppercase text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

      <div className="space-y-3 text-sm text-gray-600 mb-6">
        {commitment && (
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-red-700 shrink-0" />
            <span>{commitment}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-red-700 shrink-0" />
            <span>{location}</span>
          </div>
        )}
      </div>

      {requirements && (
        <div className="mb-6 p-4 bg-[#fffbf0] rounded border border-gray-200">
          <p className="text-[11px] font-black uppercase text-gray-900 mb-2">Requirements:</p>
          <p className="text-xs text-gray-600">{requirements}</p>
        </div>
      )}

      <button className="w-full bg-red-700 text-white px-6 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all">
        Learn More
      </button>
    </div>
  </FadeUp>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <FadeUp>
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-black uppercase text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeUp>
);

const TestimonialCard = ({ name, role, quote, image }) => (
  <FadeUp>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-black text-gray-900 uppercase text-sm">{name}</h4>
          <p className="text-red-700 text-[11px] font-black uppercase tracking-widest">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm italic leading-relaxed">"{quote}"</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  </FadeUp>
);

export default function VolunteerPage() {
  const opportunities = [
    {
      icon: Users,
      title: "Ushering & Welcoming",
      description: "Be the friendly face that greets visitors and members. Help with seating and create a warm, welcoming atmosphere during services.",
      commitment: "2-4 hours per Sunday",
      location: "Main Sanctuary",
      requirements: "Friendly, organized, reliable"
    },
    {
      icon: Smile,
      title: "Children's Ministry",
      description: "Work with children ages 2-12 in our vibrant kids ministry. Lead activities, teach biblical lessons, and create a safe, fun environment.",
      commitment: "3-4 hours per Sunday",
      location: "Children's Wing",
      requirements: "Background check required, love for children"
    },
    {
      icon: Zap,
      title: "Technical & Media",
      description: "Operate cameras, audio/visual equipment, and live streaming technology during services and events.",
      commitment: "2-3 hours per Sunday",
      location: "Sound & Video booth",
      requirements: "Technical skills or willingness to learn"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Participate in service projects, food distribution, community cleanup, and outreach activities that make a real difference.",
      commitment: "Flexible",
      location: "Community locations",
      requirements: "Passion for serving others"
    },
    {
      icon: MessageCircle,
      title: "Event Coordination",
      description: "Help plan and execute church events, conferences, retreats, and special gatherings. Coordinate volunteers and logistics.",
      commitment: "5-10 hours per month",
      location: "Various",
      requirements: "Organizational skills, attention to detail"
    },
    {
      icon: Users,
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, communication, and administrative work that keeps our ministry running smoothly.",
      commitment: "4-8 hours per week",
      location: "Church Office",
      requirements: "Computer skills, attention to detail"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Deepen your faith as you serve others and witness God's work through your actions."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Make meaningful connections with fellow volunteers and church members who share your values."
    },
    {
      icon: Zap,
      title: "Use Your Gifts",
      description: "Discover and develop your unique talents and abilities while making a tangible difference."
    },
    {
      icon: Smile,
      title: "Make an Impact",
      description: "Be part of transforming lives and strengthening our community through direct service."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Children's Ministry Volunteer",
      quote: "Volunteering with the children's ministry has been the most rewarding experience of my faith journey. Seeing the kids grow spiritually is incredible!",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769349036/pastor_Matthew_gnyjms.webp"
    },
    {
      name: "David Martinez",
      role: "Tech Team Leader",
      quote: "I never thought my technical skills could be used to serve God so directly. Being part of the tech team makes me feel like I'm part of something larger.",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769349670/pastor_Gerald_asmd1b.jpg"
    },
    {
      name: "Grace Okoye",
      role: "Outreach Coordinator",
      quote: "Serving our community through Faith Harvest's outreach programs has opened my eyes to the real needs around us and how much our service matters.",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769348191/pastor-bishop_qz7zxj.jpg"
    }
  ];

  return (
    <Suspense fallback={<Loading pageName="Volunteer" />}>
      <main className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[65vh] flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 animate-slow-zoom"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769352637/church-about_i9bd4p.png')",
              }}
            >
              <div className="absolute inset-0 bg-[#0a1227]/60"></div>
            </div>
          </div>

          <div className="relative z-10 text-center text-white px-4 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 drop-shadow-2xl">
              Join Our Volunteer Team
            </h1>
            <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-gray-400">
                <ChevronRight size={16} strokeWidth={4} />
              </span>
              <span className="text-white/80 font-medium">Volunteer</span>
            </div>
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow">
            <div className="relative w-20 h-20 bg-red-700 rounded-full rounded-br-none rotate-[225deg] border-[6px] border-white shadow-xl flex items-center justify-center">
              <div className="-rotate-[225deg] relative w-6 h-9">
                <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2"></div>
                <div className="absolute left-0 top-[30%] w-full h-[3px] bg-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-24 px-6 bg-[#fffbf0] pt-32">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Service" title="Why Volunteer?" center />
            </FadeUp>

            <FadeUp delay="delay-1">
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-center mb-12">
                Volunteering is a powerful way to live out your faith, strengthen your spiritual journey, and make a real difference in our community. Whether you have a few hours per month or can commit regularly, there's a place for you on our team.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, idx) => (
                <BenefitCard key={idx} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Positions" title="Available Opportunities" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {opportunities.map((opp, idx) => (
                <OpportunityCard key={idx} {...opp} />
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <SectionHeader label="Standards" title="Volunteer Requirements" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <FadeUp>
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-black uppercase text-gray-900 mb-4 flex items-center gap-3">
                    <CheckCircle size={24} className="text-red-700" />
                    Commitment Level
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>• Reliable and punctual attendance</li>
                    <li>• At least 1-2 months commitment</li>
                    <li>• Willingness to complete training</li>
                    <li>• Professional and Christ-like conduct</li>
                    <li>• Adherence to church policies</li>
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay="delay-1">
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-black uppercase text-gray-900 mb-4 flex items-center gap-3">
                    <CheckCircle size={24} className="text-red-700" />
                    Background Check Policy
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>• Required for all youth/children workers</li>
                    <li>• Optional for other volunteer roles</li>
                    <li>• Confidential processing</li>
                    <li>• No cost to volunteer</li>
                    <li>• Protects our community</li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Process" title="How to Get Started" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { step: "1", title: "Explore", desc: "Browse available volunteer opportunities that match your interests and schedule" },
                { step: "2", title: "Apply", desc: "Fill out a volunteer application form with your information and preferences" },
                { step: "3", title: "Meet", desc: "Connect with a ministry leader who will discuss your role and answer questions" },
                { step: "4", title: "Serve", desc: "Start your volunteer journey and make an impact in our community" }
              ].map((item, idx) => (
                <FadeUp key={idx} delay={`delay-${idx}`}>
                  <div className="bg-[#fffbf0] p-8 rounded-lg text-center">
                    <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-black uppercase text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Stories" title="Volunteer Testimonials" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <SectionHeader label="Join Us" title="Volunteer Application" center />
            </FadeUp>

            <FadeUp delay="delay-1">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-2 border-red-700">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+256 703 886422"
                        className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                        Preferred Opportunity
                      </label>
                      <select className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light bg-white">
                        <option>Select an opportunity...</option>
                        <option>Ushering & Welcoming</option>
                        <option>Children's Ministry</option>
                        <option>Technical & Media</option>
                        <option>Community Outreach</option>
                        <option>Event Coordination</option>
                        <option>Administrative Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                      Availability
                    </label>
                    <select className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light bg-white">
                      <option>Select availability...</option>
                      <option>Sundays only</option>
                      <option>Weekdays only</option>
                      <option>Weekends</option>
                      <option>Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                      Tell us about yourself
                    </label>
                    <textarea
                      placeholder="Share your interests, skills, and why you want to volunteer..."
                      rows={5}
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 accent-red-700"
                    />
                    <label htmlFor="terms">
                      I agree to the volunteer policies and understand that background checks may be required for certain roles.
                    </label>
                  </div>

                  <button className="w-full bg-red-700 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all shadow-lg">
                    Submit Volunteer Application
                  </button>
                </form>
              </div>
            </FadeUp>

            <FadeUp delay="delay-2">
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Have questions? Contact our volunteer coordinator at
                  <Link href="mailto:christianfaithharvestchurch@gmail.com" className="text-red-700 font-bold ml-1 hover:text-red-900">
                    christianfaithharvestchurch@gmail.com
                  </Link>
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-[#0a1227]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <h2 className={STYLES.lightSectionTitle}>Ready to Make a Difference?</h2>
              <p className="text-gray-300 mt-6 mb-10 leading-relaxed max-w-2xl mx-auto">
                Your talents and passion can transform lives. Join our growing volunteer community and experience the joy of serving others in faith.
              </p>
              <button className="inline-block bg-red-700 text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-red-700 transition-all shadow-lg">
                Apply Now
              </button>
            </FadeUp>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
