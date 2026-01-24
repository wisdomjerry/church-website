import FadeUp from "../components/FadeUp";

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 shadow-sm border border-gray-100">
        <FadeUp>
          <span className="text-red-700 font-black uppercase text-[10px] tracking-[0.3em]">Legal</span>
          <h1 className="text-4xl font-black uppercase mt-2 mb-8 tracking-tighter">Terms of Service</h1>
          
          <div className="text-gray-600 space-y-8 leading-relaxed">
            <p className="italic border-l-4 border-red-700 pl-4 bg-gray-50 py-2">
              Welcome to the Christian Faith Harvest Church website. By accessing our site, you agree to comply with and be bound by the following terms.
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">1. Acceptance of Terms</h2>
              <p>The content provided on this website is for informational and spiritual purposes. By using this site, you signify your acceptance of these terms. If you do not agree, please refrain from using our site.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">2. Use of Content</h2>
              <p>All text, graphics, logos, and images are the property of Christian Faith Harvest Church. You may view and print content for personal, non-commercial use only. Any unauthorized reproduction or distribution is prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">3. Online Donations</h2>
              <p>Donations made through our website are voluntary and non-refundable. We use secure third-party payment processors to ensure your financial information is handled safely.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">4. External Links</h2>
              <p>Our site may contain links to external websites (such as mission partners or social media). We are not responsible for the content or privacy practices of these external sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-3">5. Limitation of Liability</h2>
              <p>Christian Faith Harvest Church will not be liable for any damages arising from the use or inability to use the materials on this site, even if we have been notified of the possibility of such damage.</p>
            </section>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-400">
                Contact us at <span className="text-red-700">info@faithharvest.org</span> if you have questions regarding these terms.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}