import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";
import {Link} from "react-router-dom"
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* ======================= BRAND SECTION ======================= */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Pravin Mishra" className="w-32 h-20" />

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md mt-4">
              Empowering individuals and organizations with cutting-edge Cloud
              and DevOps expertise through courses, books, and consulting.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/pravin-mishra-aws-trainer/"
                target="_blank" className="social-icon"><Linkedin size={20} /></a>

              <a href="https://x.com/pravinmishra88"
                target="_blank" className="social-icon"><Twitter size={20} /></a>

              <a href="https://github.com/pravinmishraaws"
                target="_blank" className="social-icon"><Github size={20} /></a>

              <a href="mailto:contact@pravinmishra.com"
                className="social-icon"><Mail size={20} /></a>

              <a href="https://www.instagram.com/awspravinmishra/"
                target="_blank" className="social-icon"><Instagram size={20} /></a>

              <a href="https://www.udemy.com/user/pravin-mishra-30/?kw=prav&src=sac"
                target="_blank" className="social-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7l9 5 9-5-9-5zm9 7l-9 5-9-5v6l9 5 9-5V9z" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@awswithpravinmishra"
                target="_blank" className="social-icon"><Youtube size={22} /></a>
            </div>
          </div>

          {/* ======================= SERVICES ======================= */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/#services" className="footer-link">Cloud Courses</a></li>
              <li><a href="/#services" className="footer-link">DevOps Books</a></li>
              <li><a href="/#services" className="footer-link">Consulting</a></li>
              <li><a href="/#services" className="footer-link">Corporate Training</a></li>
            </ul>
          </div>

          {/* ======================= QUICK LINKS ======================= */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="footer-link">About Me</a></li>
              <li><a href="/#contact" className="footer-link">Contact</a></li>

              <li>
                <Link to="/privacy" target="_blank" className="footer-link">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to ="/terms" target="_blank" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ======================= BOTTOM CONTENT ======================= */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pravin Mishra. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with <span className="text-yellow-400">cloud</span> excellence by Pravin Mishra
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
