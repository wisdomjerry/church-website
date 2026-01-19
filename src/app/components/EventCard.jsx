export default function EventCard({ title, date, location, description }) {
  return (
    <div className="bg-white text-purple-900 rounded-lg shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{date} | {location}</p>
      <p className="text-base">{description}</p>
    </div>
  );
}
