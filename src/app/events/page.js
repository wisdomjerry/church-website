import EventCard from "../components/EventCard";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday - 10:00 AM",
    location: "Main Sanctuary",
    description:
      "Join us for our weekly worship service with inspiring sermons and uplifting music.",
  },
  {
    title: "Youth Fellowship",
    date: "Friday - 6:00 PM",
    location: "Youth Hall",
    description:
      "A time for our youth to meet, pray, and grow together in faith and fellowship.",
  },
  {
    title: "Community Outreach",
    date: "1st Saturday of every month",
    location: "Church Grounds",
    description:
      "Serving our community through volunteering, charity events, and support programs.",
  },
];

const nextBigEvent = {
  title: "Christmas Celebration",
  date: "December 25, 2026",
  location: "Main Sanctuary",
  description:
    "Celebrate the birth of Christ with us! Worship, choir performances, and community dinner.",
  image: "/christmas-event.jpg", // Place an image in public folder
};

export default function EventsPage() {
  return (
    <main className="bg-purple-50 text-purple-900 min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-purple-700 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Events</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Join our church events to grow in faith, serve the community, and connect with others.
        </p>
      </section>

      {/* Highlight Next Big Event */}
      <section className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={nextBigEvent.image}
          alt={nextBigEvent.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{nextBigEvent.title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            {nextBigEvent.date} | {nextBigEvent.location}
          </p>
          <p className="mb-4">{nextBigEvent.description}</p>
          <a
            href="#rsvp"
            className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded hover:bg-yellow-300 transition"
          >
            RSVP Now
          </a>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 px-4 bg-purple-100">
        <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <img src="/past-event1.jpg" alt="Past Event 1" className="rounded-lg shadow-md" />
          <img src="/past-event2.jpg" alt="Past Event 2" className="rounded-lg shadow-md" />
          <img src="/past-event3.jpg" alt="Past Event 3" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Don't Miss Any Event!</h2>
        <p className="mb-6">
          Sign up for our newsletter to get updates on upcoming events and church activities.
        </p>
        <a
          href="#newsletter"
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
        >
          Subscribe Now
        </a>
      </section>
    </main>
  );
}
