export default function ContactPage() {
  return (
    <main className="min-h-screen bg-purple-50 text-purple-900 py-20 px-4">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or want to get involved? Send us a message, and we’ll get back to you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="mt-16 max-w-3xl mx-auto text-center space-y-4">
        <p>
          <strong>Address:</strong> 123 Faith Street, Kampala, Uganda
        </p>
        <p>
          <strong>Phone:</strong> +256 700 123 456
        </p>
        <p>
          <strong>Email:</strong> info@faithharvestchurch.org
        </p>
      </section>
    </main>
  );
}
