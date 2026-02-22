"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
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

const FAQItem = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeUp>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-start justify-between hover:bg-[#fffbf0] transition-colors text-left"
        >
          <div className="flex-1">
            <p className="text-[11px] text-red-700 font-black uppercase tracking-widest mb-2">{category}</p>
            <h3 className="text-base font-black text-gray-900 pr-4">{question}</h3>
          </div>
          <ChevronDown
            size={20}
            className={`text-red-700 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="px-6 py-5 border-t border-gray-200 bg-[#fffbf0]">
            <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </FadeUp>
  );
};

const ContactCard = ({ icon: Icon, title, content, link }) => (
  <FadeUp>
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-black uppercase text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{content}</p>
      {link && (
        <a href={link} className="text-red-700 text-[11px] font-black uppercase tracking-widest hover:text-gray-900 transition-colors">
          Get Help →
        </a>
      )}
    </div>
  </FadeUp>
);

export default function SupportFAQPage() {
  const faqs = [
    {
      category: "Services",
      question: "What time are Sunday worship services?",
      answer: "Our main Sunday worship service starts at 10:00 AM in the main sanctuary. We also have additional services and prayer meetings throughout the week. Please check our events page for the full schedule."
    },
    {
      category: "Services",
      question: "Is there parking available at the church?",
      answer: "Yes, we have ample free parking available on our church grounds. We also have designated accessible parking spaces for our elderly and disabled members. Parking attendants are available to assist on Sundays."
    },
    {
      category: "Services",
      question: "Can I bring my children to services?",
      answer: "Absolutely! We warmly welcome children of all ages. We offer a children's ministry program during main services for ages 2-12, with age-appropriate activities and biblical teaching in a safe, nurturing environment."
    },
    {
      category: "Membership",
      question: "How do I become a church member?",
      answer: "We invite you to attend our membership orientation class, typically held monthly. During this class, you'll learn about our beliefs, values, and commitments. Contact our office or speak with a pastor to register for the next session."
    },
    {
      category: "Membership",
      question: "What are the expectations for church members?",
      answer: "Members are encouraged to engage in regular worship, biblical study, and service. We believe in the importance of spiritual growth, supporting one another, and living out Christian values in our daily lives."
    },
    {
      category: "Membership",
      question: "Do I have to be baptized to join?",
      answer: "We encourage baptism as a public declaration of faith. While not a barrier to attending, baptism is an important step in your faith journey. Our pastors can discuss this with you and arrange a baptism service."
    },
    {
      category: "Ministries",
      question: "How can I get involved in ministry?",
      answer: "We have numerous ministry opportunities including music, youth, women's, men's, children's, and community outreach. Visit our ministries page or speak with our ministry coordinator to find an area that matches your gifts and passion."
    },
    {
      category: "Ministries",
      question: "Do you have youth programs?",
      answer: "Yes! We have vibrant youth programs including youth fellowship meetings, Bible studies, youth camps, and special events. Our youth ministry is designed to help young people grow spiritually and build lasting friendships."
    },
    {
      category: "Ministries",
      question: "What volunteer opportunities are available?",
      answer: "We welcome volunteers in many areas: ushering, welcoming, children's ministry, music, technical support, event coordination, and community service. Visit our volunteer page or contact us to learn more about available opportunities."
    },
    {
      category: "Giving",
      question: "How does the church use my donations?",
      answer: "Your generous gifts support our ministry operations, staff, building maintenance, community outreach programs, and mission work. We maintain transparency with our finances and are committed to good stewardship of all resources."
    },
    {
      category: "Giving",
      question: "Are donations tax-deductible?",
      answer: "Yes! Christian Faith Harvest Church is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. We provide donation receipts and annual statements for your records."
    },
    {
      category: "Giving",
      question: "How can I give if I can't attend services?",
      answer: "We offer multiple giving options including online giving through our website, automated recurring gifts via bank transfer, and mailing checks to our office. You can also speak with a pastor about other giving methods available."
    },
    {
      category: "Website",
      question: "How do I find information about specific events?",
      answer: "Visit our events page to see all upcoming services, meetings, and special events. You can also subscribe to our newsletter or check our social media for regular updates and announcements."
    },
    {
      category: "Website",
      question: "Can I listen to sermons online?",
      answer: "Yes! We post our sermon recordings on our website and social media platforms. You can access previous sermons anytime to grow spiritually at your own pace."
    }
  ];

  return (
    <Suspense fallback={<Loading pageName="Support and FAQs" />}>
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
              Help & Support
            </h1>
            <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-gray-400">
                <ChevronRight size={16} strokeWidth={4} />
              </span>
              <span className="text-white/80 font-medium">Support & FAQs</span>
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

        {/* Contact Methods Section */}
        <section className="py-24 px-6 bg-[#fffbf0] pt-32">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Get Help" title="How Can We Assist You?" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <ContactCard
                icon={Mail}
                title="Email Support"
                content="Send us a message and we'll respond within 24 hours"
                link="mailto:support@faithharvestchurch.com"
              />
              <ContactCard
                icon={Phone}
                title="Phone Support"
                content="Call us Monday-Friday, 9 AM - 5 PM"
                link="tel:+256703886422"
              />
              <ContactCard
                icon={MessageSquare}
                title="Live Chat"
                content="Connect with our team for instant assistance"
              />
              <ContactCard
                icon={HelpCircle}
                title="Knowledge Base"
                content="Browse answers to common questions anytime"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <SectionHeader label="Common Questions" title="Frequently Asked Questions" center />
            </FadeUp>

            <div className="space-y-4 mt-12">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12">
                <span className={STYLES.sectionLabel}>Still Have Questions?</span>
                <h2 className={STYLES.sectionTitle}>Contact Our Team</h2>
                <div className="flex justify-center gap-1 mt-4">
                  <div className="w-8 h-[2px] bg-red-700"></div>
                  <div className="w-4 h-[2px] bg-red-700"></div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay="delay-1">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
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

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                      Category
                    </label>
                    <select className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light bg-white">
                      <option>Select a category...</option>
                      <option>General Inquiry</option>
                      <option>Membership Question</option>
                      <option>Giving/Donations</option>
                      <option>Ministry Involvement</option>
                      <option>Technical Issue</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Please share your question or concern..."
                      rows={6}
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-red-700 transition-colors text-sm font-light resize-none"
                    />
                  </div>

                  <button className="w-full bg-red-700 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#fffbf0] p-8 rounded-lg">
                  <h3 className="text-lg font-black uppercase text-gray-900 mb-6">Office Hours</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-bold text-gray-900">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-bold text-gray-900">10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-bold text-gray-900">After Services</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#fffbf0] p-8 rounded-lg">
                  <h3 className="text-lg font-black uppercase text-gray-900 mb-6">Contact Info</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>
                      <p className="font-bold text-gray-900">Phone</p>
                      <p>+256 703 886422</p>
                    </li>
                    <li>
                      <p className="font-bold text-gray-900">Email</p>
                      <p>support@faithharvestchurch.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
