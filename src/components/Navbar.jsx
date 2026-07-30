import React, { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiX,
  HiOutlineCalendar,
} from "react-icons/hi";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/Images/image.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Expertise", link: "#expertise" },
    { name: "Contact", link: "#contact" },
  ];

  const clinicAddress =
    "Sharda Clinic, Near Yash Meridian Hotel, Bharat Mata Circle, Narayan Vihar, Mangyawas, Mansarovar Extension, Jaipur – 302029";

  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Sharda+Clinic,+Near+Yash+Meridian+Hotel,+Bharat+Mata+Circle,+Narayan+Vihar,+Mangyawas,+Mansarovar+Extension,+Jaipur+302029";

  return (
    <>
      {/* ================= TOP CLINIC BAR ================= */}

      <div className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-gradient-to-r from-[#063B4C] via-[#075A70] to-[#0A6F82] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-5 lg:px-8 lg:py-2.5">

          {/* Clinic Address */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 flex-1 items-start gap-2 text-[10px] leading-4 text-white/90 transition duration-300 hover:text-white sm:text-xs sm:leading-5 lg:items-center lg:text-sm"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[#9EEAF5] lg:mt-0">
              <FaMapMarkerAlt className="text-[10px]" />
            </span>

            <span className="line-clamp-2 lg:truncate">
              {clinicAddress}
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+917023123152"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white transition duration-300 hover:bg-white hover:text-[#075A70] sm:px-3 sm:text-xs"
          >
            <FaPhoneAlt className="text-[#9EEAF5]" />
            <span className="hidden sm:inline">
              +91 70231 23152
            </span>
          </a>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <header className="fixed left-0 top-[52px] z-[9998] w-full pt-2 sm:top-[48px] lg:top-[48px] lg:pt-4">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

          {/* Navbar Container */}
          <div className="rounded-2xl border border-[#D7EEF2] bg-white/95 shadow-[0_15px_45px_rgba(5,80,95,0.16)] backdrop-blur-xl">

            <div className="flex h-[72px] items-center justify-between px-3 sm:h-[78px] sm:px-5 lg:h-[82px] lg:px-8">

              {/* ================= LOGO ================= */}

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              >
                {/* Logo Image */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md ring-1 ring-[#CBE8ED] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <img
                    src={logo}
                    alt="Dr. Seema Chhangani Logo"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Doctor Details */}
                <div className="min-w-0">

                  <h1 className="max-w-[155px] truncate text-[14px] font-bold leading-tight text-[#064B5C] sm:max-w-none sm:text-lg lg:text-xl">
                    Dr. Seema Chhangani
                  </h1>

                  <p className="mt-0.5 max-w-[155px] truncate text-[8px] font-semibold uppercase tracking-[0.8px] text-[#43808A] sm:max-w-none sm:text-[10px] sm:tracking-[1.3px]">
                    Pulmonology & Critical Care
                  </p>

                </div>
              </a>

              {/* ================= DESKTOP NAVIGATION ================= */}

              <nav className="hidden items-center gap-7 xl:flex">

                {navLinks.map((item) => (

                  <a
                    key={item.name}
                    href={item.link}
                    className="relative py-2 text-sm font-semibold text-slate-600 transition duration-300 hover:text-[#057187] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#11A0B5] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>

                ))}

              </nav>

              {/* ================= DESKTOP APPOINTMENT BUTTON ================= */}

              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#056277] to-[#07869A] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:from-[#064B5C] hover:to-[#057187] md:flex"
              >
                <HiOutlineCalendar className="text-lg" />
                Book Appointment
              </a>

              {/* ================= MOBILE MENU BUTTON ================= */}

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#CDE9ED] bg-[#EFFBFC] text-2xl text-[#056277] transition duration-300 hover:bg-[#DDF5F7] xl:hidden"
              >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>

            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`overflow-hidden transition-all duration-500 xl:hidden ${
              menuOpen
                ? "mt-3 max-h-[650px] opacity-100"
                : "mt-0 max-h-0 opacity-0"
            }`}
          >

            <div className="rounded-2xl border border-[#D7EEF2] bg-white/98 p-3 shadow-2xl backdrop-blur-xl">

              {/* Mobile Navigation */}

              <nav className="flex flex-col">

                {navLinks.map((item, index) => (

                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-5 py-3.5 font-semibold text-slate-700 transition duration-300 hover:bg-[#EFFBFC] hover:text-[#056277] ${
                      index !== navLinks.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>

                ))}

              </nav>

              {/* Mobile Buttons */}

              <div className="mt-3 grid grid-cols-2 gap-3">

                {/* Call Button */}

                <a
                  href="tel:+917023123152"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#BFE2E8] bg-[#EFFBFC] py-3.5 text-sm font-semibold text-[#056277] transition hover:bg-[#DDF5F7]"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>

                {/* Appointment Button */}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#056277] to-[#07869A] py-3.5 text-sm font-semibold text-white transition hover:from-[#064B5C] hover:to-[#057187]"
                >
                  <HiOutlineCalendar className="text-lg" />
                  Appointment
                </a>

              </div>

              {/* Mobile Address */}

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-start gap-3 rounded-xl border border-[#D7EEF2] bg-[#F4FCFD] px-4 py-4 text-xs leading-5 text-slate-600 transition duration-300 hover:bg-[#E9F8FA]"
              >

                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DDF5F7] text-[#057187]">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  {clinicAddress}
                </span>

              </a>

            </div>

          </div>

        </div>
      </header>

      {/* ================= NAVBAR SPACE ================= */}

      <div className="h-[130px] sm:h-[125px] lg:h-40"></div>

    </>
  );
}

export default Navbar;