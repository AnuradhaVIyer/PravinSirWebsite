import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass =
    "text-gray-300 hover:text-yellow-400 font-medium transition";

  const mobileClass =
    "block w-full text-left text-gray-300 hover:text-yellow-400 px-3 py-2 font-medium transition";

  const goToSection = async (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");      // NO REFRESH
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);            // allows Home page to load
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo → Scroll to Home without refresh */}
          <div className="flex items-center cursor-pointer" onClick={() => goToSection("home")}>
            <img src={logo} alt="Logo" className="h-16 w-40 object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goToSection("home")} className={linkClass}>
              Home
            </button>

            <a
              href="https://university.pravinmishra.in/learn"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              University
            </a>

            <a
              href="https://blog.pravinmishra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Blog
            </a>

            <button onClick={() => goToSection("book")} className={linkClass}>
              Book
            </button>

            <RouterLink to="/dmi" className={linkClass}>
              DMI
            </RouterLink>

            <button onClick={() => goToSection("courses")} className={linkClass}>
              Courses
            </button>

            <button
              onClick={() => goToSection("contact")}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-3 py-4 space-y-2">

            <button onClick={() => goToSection("home")} className={mobileClass}>
              Home
            </button>

            <a
              href="https://university.pravinmishra.in/learn"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileClass}
            >
              University
            </a>

            <a
              href="https://pravinmishra.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileClass}
            >
              Blog
            </a>

            <button onClick={() => goToSection("book")} className={mobileClass}>
              Book
            </button>

            <RouterLink to="/dmi" className={mobileClass}>
              DMI
            </RouterLink>

            <button onClick={() => goToSection("courses")} className={mobileClass}>
              Courses
            </button>

            <button
              onClick={() => goToSection("contact")}
              className="block w-full text-left px-3 py-2 bg-yellow-400 text-black rounded-md font-semibold"
            >
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
