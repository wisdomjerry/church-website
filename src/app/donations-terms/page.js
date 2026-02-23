"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import FadeUp from "../components/FadeUp";
import Loading from "../components/Loading";

const STYLES = {
  sectionLabel: "text-red-700 uppercase text-[10px] tracking-[0.3em] font-black mb-3 block",
  sectionTitle: "text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900",
};

const SectionHeader = ({ label, title, center = false }) => (
  <div className={`mb-8 ${center ? "text-center" : ""}`}>
    {label && <span className={STYLES.sectionLabel}>{label}</span>}
    <h2 className={STYLES.sectionTitle}>
      {title}
    </h2>
    <div className={`flex ${center ? "justify-center" : "justify-start"} gap-1 mt-4`}>
      <div className="w-8 h-[2px] bg-red-700"></div>
      <div className="w-4 h-[2px] bg-red-700"></div>
    </div>
  </div>
);

export default function DonationsTermsPage() {
  return (
    <Suspense fallback={<Loading pageName="Donations Terms" />}>
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
              Donations Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="text-red-700 hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-gray-400">
                <ChevronRight size={16} strokeWidth={4} />
              </span>
              <span className="text-white/80 font-medium">Donations Terms</span>
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

        {/* Content Section */}
        <section className="py-24 px-6 bg-white pt-32">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-600 text-sm mb-8 italic">
                  <FileText size={16} className="inline text-red-700 mr-2" />
                  Last Updated: February 22, 2026
                </p>

                {/* Introduction */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Overview" title="1. Introduction" />
                    <p className="text-gray-600 leading-relaxed">
                      Christian Faith Harvest Church ("Church") is a 501(c)(3) nonprofit religious organization. These Donations Terms and Conditions ("Terms") outline the conditions under which individuals and organizations may make financial contributions to the Church. By making a donation, you agree to be bound by these Terms.
                    </p>
                  </div>
                </FadeUp>

                {/* Tax Deductibility */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Tax Information" title="2. Tax Deductibility" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Christian Faith Harvest Church is organized and operated as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. Your donation is tax-deductible to the extent permitted by law.
                    </p>
                    <div className="bg-[#fffbf0] p-6 rounded-lg border-l-4 border-red-700">
                      <p className="text-gray-700 text-sm">
                        <strong>Federal Tax ID: XX-XXXXXXX</strong>
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Consult with a tax professional to determine the tax deductibility of your specific contribution. We cannot provide tax advice. For more information about deductions, consult IRS Publication 526 or speak with a tax advisor.
                      </p>
                    </div>
                  </div>
                </FadeUp>

                {/* Use of Funds */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Administration" title="3. Use of Funds" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      All donations to Christian Faith Harvest Church are used exclusively for the Church's tax-exempt purposes, which include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Spiritual ministry, worship services, and religious education</li>
                      <li>Community outreach and benevolence programs</li>
                      <li>Building maintenance, operations, and improvements</li>
                      <li>Staff compensation and administrative expenses</li>
                      <li>Missions and global ministry initiatives</li>
                      <li>Youth, children's, and family ministry programs</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      The Church maintains transparent financial practices and provides annual financial statements. For questions about how your donation is used, please contact our office.
                    </p>
                  </div>
                </FadeUp>

                {/* Donation Policies */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Policies" title="4. Donation Policies" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Eligible Donations:</strong> We accept monetary donations in the form of cash, checks, credit/debit cards, and bank transfers. Donations must be made with the intention of supporting the Church's mission.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>In-Kind Donations:</strong> We may accept non-monetary donations such as property or equipment. All in-kind donations require prior approval from Church leadership and must have documentation of fair market value.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Restricted Gifts:</strong> Donors may designate gifts for specific purposes (e.g., building fund, youth ministry). The Church will honor reasonable restrictions, but reserves the right to reallocate funds if the designated purpose no longer serves the Church's mission or if funds exceed stated needs.
                    </p>
                  </div>
                </FadeUp>

                {/* Refund Policy */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Cancellation" title="5. Refund and Cancellation Policy" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Refunds:</strong> Once a donation has been processed and received by the Church, it is considered a completed gift and is generally not refundable. However, the Church will consider refund requests made within 30 days of the original donation if an error occurred or if you wish to cancel a recurring gift.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Recurring Donations:</strong> You may cancel a recurring donation at any time by logging into your account or contacting our office. Cancellation will take effect on the next scheduled payment date.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      To request a refund or cancel a recurring donation, contact our office with your name, donation date, and donation amount.
                    </p>
                  </div>
                </FadeUp>

                {/* Privacy of Donor Information */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Privacy" title="6. Donor Privacy and Confidentiality" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We respect the privacy of our donors and maintain confidentiality in accordance with applicable laws. Your personal and financial information will never be sold, rented, or shared with third parties without your explicit consent, except as required by law.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Church maintains secure records of all donations for administrative and tax reporting purposes. Donor information is used only for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Processing and acknowledging contributions</li>
                      <li>Providing tax receipts and annual statements</li>
                      <li>Church communication and updates</li>
                      <li>Financial reporting and stewardship</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      If you wish to remain anonymous, you may give cash in the offering basket during services without providing personal information.
                    </p>
                  </div>
                </FadeUp>

                {/* Payment Processing */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Security" title="7. Payment Processing and Security" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      All online donations are processed securely through trusted payment processors. The Church uses industry-standard SSL encryption and PCI-DSS compliance to protect your payment information.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Payment information is never stored on the Church's servers. Processing fees may apply to online donations, and such fees are clearly disclosed before you complete your transaction.
                    </p>
                  </div>
                </FadeUp>

                {/* Prohibited Donations */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Restrictions" title="8. Prohibited Donations" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Church cannot accept donations that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Come from illegal activities or sources</li>
                      <li>Violate civil rights or discriminatory laws</li>
                      <li>Come with conditions that would compromise the Church's mission or integrity</li>
                      <li>Are contingent upon personal benefit or advantage to the donor</li>
                      <li>Violate the Church's theological or doctrinal standards</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      The Church reserves the right to decline or return any donation it deems inappropriate.
                    </p>
                  </div>
                </FadeUp>

                {/* Acknowledgment of Gifts */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Recognition" title="9. Acknowledgment of Gifts" />
                    <p className="text-gray-600 leading-relaxed">
                      The Church will provide written acknowledgment of all donations for tax purposes. Acknowledgment letters will be sent within 14 days of receiving your donation and will include the amount given, date received, and the Church's tax-exempt status. No goods or services were provided in exchange for this donation unless otherwise indicated.
                    </p>
                  </div>
                </FadeUp>

                {/* Legal Compliance */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Legal" title="10. Legal Compliance" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Church operates in compliance with all applicable federal, state, and local laws. These Terms are governed by the laws of the jurisdiction in which the Church operates and do not create a contract between the donor and the Church beyond the gift itself.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Any legal disputes regarding donations will be subject to the jurisdiction and venue of the courts where the Church is located.
                    </p>
                  </div>
                </FadeUp>

                {/* Changes to Terms */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Updates" title="11. Changes to These Terms" />
                    <p className="text-gray-600 leading-relaxed">
                      The Church reserves the right to modify these Terms at any time. Changes will be posted on our website and are effective immediately upon posting. Continued donations after changes are posted constitute acceptance of the revised Terms.
                    </p>
                  </div>
                </FadeUp>

                {/* Contact Information */}
                <FadeUp>
                  <div className="mb-12">
                    <SectionHeader label="Support" title="12. Contact Information" />
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have questions about these Terms or our donation policies, please contact us:
                    </p>
                    <div className="bg-[#fffbf0] p-6 rounded-lg">
                      <p className="text-gray-700 text-sm mb-2"><strong>Phone:</strong> +256-XXX-XXXX</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Email:</strong> support@faithharvestchurch.com</p>
                      <p className="text-gray-700 text-sm"><strong>Office Hours:</strong> Monday-Friday, 9 AM - 5 PM</p>
                    </div>
                  </div>
                </FadeUp>

                {/* Disclaimer */}
                <FadeUp>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-red-900 text-sm">
                      <strong>Disclaimer:</strong> These Terms constitute the entire donation agreement between you and Christian Faith Harvest Church. The Church makes no warranties or representations regarding the tax deductibility of your donation. Please consult a qualified tax professional for specific advice regarding your tax situation. This document is for informational purposes and does not constitute legal advice.
                    </p>
                  </div>
                </FadeUp>
              </div>
            </FadeUp>

            {/* CTA Section */}
            <FadeUp>
              <div className="mt-16 p-8 bg-[#fffbf0] rounded-lg text-center">
                <p className="text-gray-600 mb-6">
                  Ready to support our mission?
                </p>
                <Link href="/payments" className="inline-block bg-red-700 text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#0a1227] transition-all shadow-lg">
                  View Payment Options
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
