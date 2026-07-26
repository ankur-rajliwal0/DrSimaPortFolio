import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Expertise",
    "Contact",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl shadow-[0_8px_40px_rgba(15,76,129,0.15)]">
            <div className="flex items-center justify-between h-20 px-8">
              {/* Logo */}
              <a href="/" className="flex flex-col">
                <h1 className="text-2xl font-bold text-[#0F4C81] tracking-wide">
                  Dr. Seema
                </h1>

                <span className="text-xs text-gray-500">
                  Pulmonology & Critical Care
                </span>
              </a>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-10">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-700 font-medium transition hover:text-[#0F4C81] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#0F4C81] after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Button */}
              <a
                href="tel:+917023123152"
                className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              {/* Mobile Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-3xl text-[#0F4C81]"
              >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="mx-6 rounded-2xl backdrop-blur-xl bg-white/90 shadow-xl">
            <div className="flex flex-col py-5">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 text-gray-700 hover:bg-blue-50 transition"
                >
                  {item}
                </a>
              ))}

              <div className="px-6 pt-4">
                <a
                  href="tel:+917023123152"
                  className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] text-white py-3 rounded-full font-semibold"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-32"></div>
    </>
  );
}

export default Navbar;