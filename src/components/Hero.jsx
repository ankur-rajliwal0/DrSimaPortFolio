import React from "react";
import heropic from "../assets/Images/DrSima.webp";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-blue-50 via-white to-sky-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              Pulmonology & Critical Care Specialist
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Breathe Better.
              <br />
              <span className="text-blue-700">Live Healthier.</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Expert consultation for respiratory diseases, tuberculosis,
              pulmonary medicine, and critical care with compassionate,
              patient-focused treatment.
            </p>

            {/* Qualification */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-white shadow px-4 py-2 rounded-full text-gray-700">
                MBBS
              </span>

              <span className="bg-white shadow px-4 py-2 rounded-full text-gray-700">
                MD (Tuberculosis & Respiratory Disease)
              </span>

              <span className="bg-white shadow px-4 py-2 rounded-full text-gray-700">
                Critical Care Medicine
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-full font-semibold transition"
              >
                <FaCalendarCheck />
                Book Appointment
              </a>

              <a
                href="tel:+917023123152"
                className="flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-4 rounded-full font-semibold transition"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute w-[520px]  bg-blue-200 rounded-full blur-3xl opacity-30"></div>

            <img
              src={heropic}
              alt="Dr. Seema Chhangani"
              className="relative w-full max-w-md rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;