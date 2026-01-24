import FadeUp from "../components/FadeUp";

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 px-6 bg-[#fffbf0]">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 shadow-sm border border-gray-100">
        <FadeUp>
          <span className="text-red-700 font-black uppercase text-[10px] tracking-[0.3em]">Legal</span>
          <h1 className="text-4xl font-black uppercase mt-2 mb-8 tracking-tighter">Privacy Policy</h1>
          
          <div className="prose prose-red text-gray-600 space-y-6">
            <p className="italic">Last Updated: January 2026</p>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase">1. Information Collection</h2>
              <p>We collect information you provide directly to us, such as when you submit a prayer request, sign up for our newsletter, or make a donation.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase">2. Use of Information</h2>
              <p>Your information is used solely to respond to your inquiries, process donations, and keep you informed about church events and ministries.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase">3. Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personal information to outside parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase">4. Cookies</h2>
              <p>Our website may use "cookies" to enhance the user experience. You may choose to set your web browser to refuse cookies, though some parts of the site may not function properly.</p>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}