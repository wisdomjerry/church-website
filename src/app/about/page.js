export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-purple-900">
      {/* Hero Banner for About */}
      <section className="bg-purple-700 text-white py-20 px-4 text-center h-[80vh]">
        <h1 className="text-5xl md:text-6xl pt-40 font-bold mb-4">About Faith Harvest Church</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Growing in faith, spreading love, and serving the community.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to bring hope, love, and spiritual growth to our community. 
          We believe in nurturing faith through worship, fellowship, and service.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-purple-100 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-2">Faith</h3>
            <p>We are grounded in faith and encourage spiritual growth for everyone.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-2">Love</h3>
            <p>We serve our community with love, kindness, and compassion.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-2">Service</h3>
            <p>We give back to society through outreach, support, and fellowship.</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our History</h2>
        <p className="text-lg">
          Founded over 20 years ago, Faith Harvest Church has been a pillar of faith and 
          community support. We continue to grow, embracing all generations with open arms.
        </p>
      </section>
    </main>
  );
}
