"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { ChevronRight, CreditCard, Clock, HeartHandshake, Lock, CheckCircle } from "lucide-react";
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

const PaymentMethod = ({ icon: Icon, title, description, features, action }) => (
  <FadeUp>
    <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center mb-6">
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-xl font-black uppercase text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
            <CheckCircle size={16} className="text-red-700 mt-1 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {action && (
        <button className="w-full bg-red-700 text-white px-6 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all">
          {action}
        </button>
      )}
    </div>
  </FadeUp>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeUp>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#fffbf0] transition-colors text-left"
        >
          <h3 className="text-base font-black text-gray-900 flex-1">{question}</h3>
          <ChevronRight
            size={20}
            className={`text-red-700 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
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

export default function PaymentsPage() {
  const paymentMethods = [
    {
      icon: HeartHandshake,
      title: "In-Person Giving",
      description: "Give during our worship services with confidence and community support.",
      features: [
        "Give in offering baskets during services",
        "Envelopes provided for privacy",
        "Weekly giving opportunities",
        "Special offerings for projects"
      ],
      action: "Find Service Times"
    },
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Secure online donations through our trusted payment platform.",
      features: [
        "Safe and encrypted transactions",
        "One-time or recurring gifts",
        "Multiple payment options accepted",
        "Instant confirmation and receipts"
      ],
      action: "Give Now"
    },
    {
      icon: Clock,
      title: "Automatic Giving",
      description: "Set up recurring monthly donations for consistent, convenient support.",
      features: [
        "Automated monthly transfers",
        "Tax receipts automatically sent",
        "Easy to modify or cancel anytime",
        "Peace of mind for committed giving"
      ],
      action: "Set Up Recurring"
    },
    {
      icon: HeartHandshake,
      title: "Special Offerings",
      description: "Participate in focused giving campaigns for specific church projects.",
      features: [
        "Building fund projects",
        "Mission trip support",
        "Community outreach initiatives",
        "Emergency relief efforts"
      ],
      action: "View Campaigns"
    }
  ];

  const faqs = [
    {
      question: "How secure is online giving?",
      answer: "Our online giving platform uses bank-level SSL encryption and is PCI-DSS compliant. Your payment information is never stored on our servers and is processed securely by trusted payment processors."
    },
    {
      question: "Can I change or cancel my recurring gift?",
      answer: "Absolutely! You can modify or cancel your recurring gift at any time through your account settings. Simply log in and adjust your preferences, or contact our office for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and bank transfers. Online giving is available 24/7 for your convenience."
    },
    {
      question: "Will I receive a tax receipt for my donation?",
      answer: "Yes! We automatically send tax receipts for all online donations. Annual statements are also provided in January for tax filing purposes. Christian Faith Harvest Church is a 501(c)(3) nonprofit organization."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Your privacy is extremely important to us. We never share your personal or payment information with third parties and comply with all federal privacy regulations."
    },
    {
      question: "Can I give anonymously?",
      answer: "Yes. If you prefer to give anonymously, you can use cash in the offering basket during services, or contact our office about anonymous online giving options."
    },
    {
      question: "What if I have technical difficulties with online giving?",
      answer: "Contact our support team at support@faithharvestchurch.com or call us during office hours. We're happy to help troubleshoot any issues or assist with your donation."
    },
    {
      question: "Can I give on behalf of someone else?",
      answer: "Yes! You can make donations in honor of, or in memory of, a loved one. Please specify this in the giving form, and we'll send an acknowledgment to that person or their family."
    }
  ];

  return (
    <Suspense fallback={<Loading pageName="Payments" />}>
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
              Ways to Give
            </h1>
            <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-gray-400">
                <ChevronRight size={16} strokeWidth={4} />
              </span>
              <span className="text-white/80 font-medium">Payments</span>
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

        {/* Message Section */}
        <section className="py-24 px-6 bg-[#fffbf0] pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className={STYLES.sectionLabel}>Generosity</span>
              <h2 className={STYLES.sectionTitle}>Why We Give</h2>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-8 h-[2px] bg-red-700"></div>
                <div className="w-4 h-[2px] bg-red-700"></div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-8 max-w-2xl mx-auto">
                Giving is an essential expression of faith and gratitude for God's blessings in our lives. When we give to our church, we're investing in our spiritual community and enabling our ministry to serve, teach, and transform lives. Whether you give little or much, every donation is a blessing that helps us fulfill our mission.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Options" title="Ways to Give" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {paymentMethods.map((method, idx) => (
                <PaymentMethod
                  key={idx}
                  {...method}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Giving Process Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionHeader label="Guide" title="How to Give Online" center />
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {[
                { step: "1", title: "Visit", desc: "Go to our secure giving portal" },
                { step: "2", title: "Choose", desc: "Select gift amount and category" },
                { step: "3", title: "Provide", desc: "Enter your payment information" },
                { step: "4", title: "Confirm", desc: "Receive instant confirmation" }
              ].map((item, idx) => (
                <FadeUp key={idx} delay={`delay-${idx}`}>
                  <div className="bg-white p-8 rounded-lg text-center">
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

        {/* Security Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-12 text-white">
                <div className="flex items-start gap-6">
                  <Lock size={40} className="shrink-0 mt-2" />
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-4">Your Security is Our Priority</h3>
                    <ul className="space-y-3 text-sm">
                      <li>✓ Bank-level SSL encryption for all transactions</li>
                      <li>✓ PCI-DSS compliance for payment processing</li>
                      <li>✓ Your information is never stored on our servers</li>
                      <li>✓ Trusted payment processors and secure gateways</li>
                      <li>✓ Privacy protection and confidentiality guaranteed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-[#fffbf0]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <SectionHeader label="Questions" title="Giving FAQs" center />
            </FadeUp>

            <div className="space-y-4 mt-12">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#0a1227]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <h2 className={STYLES.lightSectionTitle}>Ready to Give?</h2>
              <p className="text-gray-300 mt-6 mb-10 leading-relaxed max-w-2xl mx-auto">
                Start your giving journey today. Choose the method that works best for you and know that your generosity is making a real difference in our community.
              </p>
              <Link href="/donate" className="inline-block bg-red-700 text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-red-700 transition-all shadow-lg">
                Give Now
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
