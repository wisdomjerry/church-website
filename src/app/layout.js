import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Christain Faith Harvest Church",
  description: "Church website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
          {/* This will now appear on every page of your site */}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
