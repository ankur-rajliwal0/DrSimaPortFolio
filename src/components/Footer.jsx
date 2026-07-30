import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaHeartbeat,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B2C5F] text-white">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white text-blue-700 flex items-center justify-center">
                <FaHeartbeat size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Dr. Seema Chhangani
                </h2>
                <p className="text-blue-200 text-sm">
                  Pulmonology & Critical Care
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-300 leading-7">
              Dedicated to providing compassionate and professional respiratory
              healthcare with a patient-first approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#qualification" className="hover:text-white transition">
                  Qualifications
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-300" />
                <span>+91 70231 23152</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-300" />
                <span>seemachhangani13@gmail.com</span>
              </div>

              
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Clinic Address
            </h3>

            <div className="flex gap-3 text-gray-300 leading-7">
              <FaMapMarkerAlt className="mt-1 text-blue-300" />
              <p>
               Sharda clinic, near Yash meridian hotel, Bharat Mata circle, Narayan Vihar 
Mangyawas, Mansarovar extension Jaipur 302029
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dr. Seema Chhangani. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;