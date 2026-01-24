import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Plus,
} from "lucide-react";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0b1221] text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: About */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Plus className="text-red-700" size={18} strokeWidth={3} />
            <h4 className="text-lg font-black uppercase tracking-widest">
              About Christain Faith Harvest Church
            </h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Christian Faith Harvest Church is a Christ-centered community
            focused on spiritual growth and empowerment, guided by faith in
            God’s promises and the biblical mission of sowing, reaping,
            soul-winning, and personal abundance.
          </p>
          <div className="flex gap-2">
            {[
              { Icon: Facebook, link: "#" },
              { Icon: Twitter, link: "#" },
              { Icon: Instagram, link: "#" },
              { Icon: Linkedin, link: "#" },
              { Icon: Youtube, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-9 h-9 bg-[#1e293b] flex items-center justify-center hover:bg-red-700 transition-all duration-300 rounded-sm"
              >
                <social.Icon
                  size={16}
                  strokeWidth={2}
                  className="text-white"
                  /* Note: Removed fill="currentColor" to fix blurriness */
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Plus className="text-red-700" size={18} strokeWidth={3} />
            <h4 className="text-lg font-black uppercase tracking-widest">
              Quick Links
            </h4>
          </div>
          <ul className="space-y-4 text-sm text-gray-400">
            {[
              "Who We Are?",
              "Support And FAQ's",
              "Payments",
              "Donations Terms",
              "Volunteer",
            ].map((link) => (
              <li
                key={link}
                className="footer-link-star hover:text-white cursor-pointer transition-colors flex items-center"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Latest News */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Plus className="text-red-700" size={18} strokeWidth={3} />
            <h4 className="text-lg font-black uppercase tracking-widest">
              Latest News
            </h4>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gray-800 shrink-0 overflow-hidden">
                <img
                  src="/church-interior.png"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h5 className="text-[13px] font-bold group-hover:text-red-700 transition-colors">
                  Giving Back - Uganda Training Centers
                </h5>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">
                  Oct 21, 2019
                </p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gray-800 shrink-0 overflow-hidden">
                <img
                  src="/music.png"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h5 className="text-[13px] font-bold group-hover:text-red-700 transition-colors">
                  Spirit Of The Lord Is From The New Life
                </h5>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">
                  Oct 21, 2019
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Plus className="text-red-700" size={18} strokeWidth={3} />
            <h4 className="text-lg font-black uppercase tracking-widest">
              Newsletter
            </h4>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Sign up for our weekly newsletter to stay updated on all news and
            events.
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white rounded-sm text-gray-900 text-xs px-4 py-3 outline-none focus:ring-1 focus:ring-red-700"
            />
            <button className="bg-red-700 text-white py-3 text-[10px] font-black rounded-sm tracking-widest hover:bg-white hover:text-red-700 transition-all ">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-gray-500">
          Copyrights © {new Date().getFullYear()}{" "}
          <span className="text-white">Christian Faith Harvest Church</span> ❤
        </p>

        <div className="flex gap-6 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          {/* Added Terms of Service Link */}
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of service
          </Link>
          <Link href="/sermons" className="hover:text-white transition-colors">
            Sermons
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
