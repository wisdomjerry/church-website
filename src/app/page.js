import EventCard from "./components/EventCard";

const events = [
  {
    title: "Sunday Service",
    date: "Every Sunday - 10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our weekly worship and sermon. All are welcome!",
  },
  {
    title: "Youth Fellowship",
    date: "Friday - 6:00 PM",
    location: "Youth Hall",
    description: "A time for young members to meet, pray, and build community.",
  },
  {
    title: "Community Outreach",
    date: "1st Saturday of every month",
    location: "Church Grounds",
    description:
      "Helping our community through volunteering and support programs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 h-[80vh]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Faith Harvest Church
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Join us in worship, fellowship, and growing in faith. Everyone is
          welcome!
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded hover:bg-yellow-300 transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-purple-900 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Optional placeholder sections */}
      <section
        id="about"
        className="bg-white text-purple-900 py-20 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Our Church</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Faith Harvest Church is dedicated to spreading love, hope, and faith
          to all. Join us for weekly services and community events.
        </p>
      </section>

      <section
        id="events"
        className="bg-purple-800 text-white py-20 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Stay tuned for our weekly sermons, community outreach programs, and
          youth activities.
        </p>
      </section>
      {/* Events Section */}
      <section id="events" className="bg-purple-800 text-white py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
