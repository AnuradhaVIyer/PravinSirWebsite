import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              TheCloud
              <span className="text-yellow-400">Advisory</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">

              {/* Home */}
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Home
              </button>

              {/* University (opens in new tab) */}
              <a
                href="https://university.pravinmishra.in/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                University
              </a>

              {/* Blog (opens in new tab) */}
              <a
                href="https://pravinmishra.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Blog
              </a>

              {/* DMI (opens in new tab) */}
              <a
                href="./dmi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                DMI Internship
              </a>

              {/* Book */}
              <button
                onClick={() => scrollToSection('book')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Book
              </button>

              {/* Courses */}
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Courses
              </button>

              {/* Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/50"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
    {isOpen && (
  <div className="md:hidden bg-black border-t border-gray-800">
    <div className="px-2 pt-2 pb-3 space-y-1">

      <button onClick={() => scrollToSection('home')} className="mobile-item">
        Home
      </button>

      <a href="https://university.pravinmishra.in/learn" target="_blank"
         rel="noopener noreferrer" className="mobile-item">
        University
      </a>

      <a href="https://pravinmishra.in/" target="_blank"
         rel="noopener noreferrer" className="mobile-item">
        Blog
      </a>

      <button onClick={() => scrollToSection('book')} className="mobile-item">
        Book
      </button>

      <button onClick={() => scrollToSection('courses')} className="mobile-item">
        Courses
      </button>

      <button
        onClick={() => scrollToSection('contact')}
        className="block w-full text-left px-3 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 transition-colors"
      >
        Contact
      </button>

    </div>
  </div>
)}

    </nav>
  );
}