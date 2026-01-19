export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Faith Harvest Church. All rights reserved.</p>
        <p>123 Church Street, Kampala, Uganda | info@faithharvest.com</p>
      </div>
    </footer>
  );
}
