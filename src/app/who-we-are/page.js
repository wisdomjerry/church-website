"use client";

import { Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, BookOpen, Users, Globe } from "lucide-react";
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

const ValueCard = ({ icon: Icon, title, description }) => (
  <FadeUp>
    <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-6">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-black uppercase text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeUp>
);

const LeadershipCard = ({ name, role, image }) => (
  <FadeUp>
    <div className="group bg-[#0a1227] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-[350px] w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-black uppercase text-white tracking-tight">{name}</h3>
        <p className="text-red-700 text-[11px] font-black uppercase tracking-widest mt-2">
          {role}
        </p>
      </div>
    </div>
  </FadeUp>
);

export default function WhoWeArePage() {
  const leadership = [
    {
      name: "Bishop Israel Baguma",
      role: "Senior Pastor",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769348191/pastor-bishop_qz7zxj.jpg",
    },
    {
      name: "Pastor Matthew",
      role: "Assistant Pastor",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769349036/pastor_Matthew_gnyjms.webp",
    },
    {
      name: "Pastor Gerald",
      role: "Assistant Pastor",
      image: "https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769349670/pastor_Gerald_asmd1b.jpg",
    },
  ];

  return (
    <Suspense fallback={<Loading pageName="Who We Are" />}>
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
              Who We Are
            </h1>
            <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-gray-400">
                <ChevronRight size={16} strokeWidth={4} />
              </span>
              <span className="text-white/80 font-medium">Who We Are</span>
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

        {/* Mission Section */}
        <section className="py-24 bg-[#fffbf0] px-6 pt-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-full h-full border-[15px] border-gray-100 -z-10"></div>
                <Image
                  src="https://res.cloudinary.com/dnxnr4ocz/image/upload/v1769441803/Church_Interior_g5pd12.png"
                  alt="Church interior"
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-sm shadow-lg"
                />
                <div className="absolute bottom-8 left-8 bg-red-700 p-6 text-white text-center min-w-[140px]">
                  <span className="block text-4xl font-black">20+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest leading-none">
                    Years of <br /> Service
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay="delay-2">
              <div className="space-y-6">
                <span className={STYLES.sectionLabel}>Our Identity</span>
                <h2 className={STYLES.sectionTitle}>
                  Our Mission & Vision
                </h2>
                <div className="flex gap-1 mb-6">
                  <div className="w-10 h-1 bg-red-700"></div>
                  <div className="w-3 h-1 bg-red-700"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black uppercase text-red-700 mb-2">Mission</h3>
                    <p className="text-gray-600 leading-relaxed italic border-l-4 border-red-700 pl-4">
                      To bring hope, love, and spiritual growth to our community through the transformative power of Jesus Christ, worship, and sacrificial service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase text-red-700 mb-2">Vision</h3>
                    <p className="text-gray-600 leading-relaxed italic border-l-4 border-red-700 pl-4">
                      To be a Christ-centered community of believers empowered by the Holy Spirit to impact our nation and world with the Gospel of Jesus Christ.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Foundation" title="Our Core Values" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <ValueCard
                icon={Heart}
                title="Faith"
                description="We believe in the transformative power of faith in Jesus Christ and His promises for our lives."
              />
              <ValueCard
                icon={Users}
                title="Community"
                description="We are committed to building strong relationships and supporting one another in our spiritual journey."
              />
              <ValueCard
                icon={Globe}
                title="Service"
                description="We serve with compassion, putting the needs of others before ourselves and making a difference in our community."
              />
              <ValueCard
                icon={BookOpen}
                title="Biblical Truth"
                description="We are grounded in the Word of God and seek to grow in knowledge and understanding of Scripture."
              />
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Leadership" title="Meet Our Pastors" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {leadership.map((pastor, index) => (
                <LeadershipCard
                  key={index}
                  {...pastor}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Our leadership team is dedicated to guiding our congregation in faith and growing together in Christ. We believe in transparency, integrity, and servant leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Doctrine" title="What We Believe" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: "The Trinity",
                  desc: "We believe in the one God revealed in three persons: Father, Son, and Holy Spirit."
                },
                {
                  title: "The Deity of Christ",
                  desc: "We believe Jesus Christ is God's Son, born of a virgin, who died for our sins and rose again."
                },
                {
                  title: "The Holy Spirit",
                  desc: "We believe in the Holy Spirit's power to indwell believers and empower them for service."
                },
                {
                  title: "Salvation",
                  desc: "We believe salvation comes through faith in Jesus Christ and is available to all who believe."
                },
                {
                  title: "The Bible",
                  desc: "We believe the Bible is God's infallible Word and the authority for all doctrine and practice."
                },
                {
                  title: "Resurrection",
                  desc: "We believe in the resurrection of the dead and the promise of eternal life with Christ."
                }
              ].map((belief, idx) => (
                <FadeUp key={idx} delay={`delay-${idx}`}>
                  <div className="bg-[#fffbf0] p-8 rounded-lg border border-gray-200 hover:border-red-700 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-black uppercase text-gray-900 mb-3">{belief.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{belief.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Our Story" title="Church History" center />
            </FadeUp>

            <div className="max-w-3xl mx-auto mt-12">
              <FadeUp>
                <div className="space-y-8">
                  <div className="border-l-4 border-red-700 pl-6 py-4">
                    <h3 className="text-xl font-black text-gray-900 mb-2">Established 2004</h3>
                    <p className="text-gray-600">
                      Christian Faith Harvest Church was founded with a passion for spreading the Gospel and building a faith community dedicated to spiritual growth and excellence in worship.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-700 pl-6 py-4">
                    <h3 className="text-xl font-black text-gray-900 mb-2">First Decade (2004-2014)</h3>
                    <p className="text-gray-600">
                      Through faithful ministry and community outreach, our church grew significantly. We expanded our facilities and launched several key ministries including youth, women's, and global missions programs.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-700 pl-6 py-4">
                    <h3 className="text-xl font-black text-gray-900 mb-2">Growth & Impact (2014-Present)</h3>
                    <p className="text-gray-600">
                      We have continued to deepen our commitment to biblical teaching, community service, and spiritual transformation. Today, we serve hundreds of families and continue expanding our mission locally and globally.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#0a1227]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <h2 className={STYLES.lightSectionTitle}>Join Us</h2>
              <p className="text-gray-300 mt-6 mb-10 leading-relaxed max-w-2xl mx-auto">
                We would love to welcome you into our church family. Whether you're visiting for the first time or looking for a spiritual home, we invite you to experience the warmth and hospitality of Christian Faith Harvest Church.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events" className="bg-red-700 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-red-700 transition-all shadow-lg">
                  Upcoming Services
                </Link>
                <Link href="/contact" className="border-2 border-red-700 text-red-700 px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all">
                  Get in Touch
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
