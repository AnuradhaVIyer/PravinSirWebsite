import React from "react";

const Header = () => {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "University", url: "/university" },
    { label: "Blog", url: "/blog" },
    { label: "Book", url: "/book" },
    
    { label: "Courses", url: "/courses" },
    { label: "Contact", url: "/contact", accent: true },
  ];

  return (
    <header
      className="
        w-full 
        py-4 
        px-6 
        md:px-12 
        flex 
        items-center 
        justify-between 
        font-jakarta 
        shadow-sm 
        border-b 
        sticky 
        top-0 
        z-50 
        backdrop-blur-xl
      "
      style={{ backgroundColor: "#232F3E", borderColor: "#374151" }}
    >
      {/* Logo */}
      <a
        href="/"
        className="
          text-xl 
          font-semibold 
          tracking-wide 
          cursor-pointer 
          text-white 
          hover:text-[#FF9900] 
          transition-all 
          duration-200
        "
      >
        <span className="text-[#FF9900]">Pravin</span>Mishra
      </a>

      {/* Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm font-medium uppercase">
          {navLinks.map(({ label, url, accent }) => (
            <li key={label}>
              <a
                href={url}
                className={`
                  px-4 
                  py-2 
                  rounded-md 
                  transition-all 
                  duration-200 
                  ${
                    accent
                      ? "bg-[#0078D4] text-white hover:bg-[#005ea0]"
                      : "bg-transparent text-white hover:bg-[#FF9900] hover:text-black"
                  }
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white cursor-pointer hover:text-[#FF9900] text-2xl">
        ☰
      </button>
    </header>
  );
};

export default Header;
