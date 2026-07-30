import React, { useEffect, useState } from "react";

import heropic from "../assets/Images/DrSima.webp";
import image1 from "../assets/Images/heroimage2.jpeg";
import image2 from "../assets/Images/heroimage3.jpeg";
import image3 from "../assets/Images/heroimage4.jpeg";

import {
  FaPhoneAlt,
  FaCalendarCheck,
  FaLungs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
 
    {
      image: image1,
      alt: "Pulmonology Consultation",
      label: "Advanced Lung Care",
    },
    {
      image: image2,
      alt: "Respiratory Health",
      label: "Compassionate Treatment",
    },
    {
      image: image3,
      alt: "Critical Care Consultation",
      label: "Personalized Medical Care",
    },
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1
        ? 0
        : previousSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0
        ? slides.length - 1
        : previousSlide - 1
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-br from-[#eef8ff] via-white to-[#dff3ff]"
    >
      {/* Background Medical Design */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-semibold text-[#0F4C81] shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <FaLungs />
              </span>

              Pulmonology & Critical Care Specialist
            </div>

            {/* Main Heading */}
            <h1 className="mt-7 text-4xl font-bold leading-[1.12] text-slate-900 sm:text-5xl lg:text-6xl">
              Better Breathing.
              <br />

              <span className="relative inline-block text-[#0F4C81]">
                Better Living.

                <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-sky-200/70 -z-10"></span>
              </span>
            </h1>

            {/* Highlighted Text */}
            <div className="mt-6 max-w-xl border-l-4 border-[#1677B8] bg-white/75 py-3 pl-5 pr-4 shadow-sm backdrop-blur-sm">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Expert care for your{" "}
                <span className="font-bold text-[#0F4C81]">
                  lungs, breathing, and respiratory health
                </span>{" "}
                with accurate diagnosis and personalized treatment.
              </p>
            </div>

            {/* Qualification Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                MBBS
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                MD – Respiratory Medicine
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                Critical Care Medicine
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0F4C81] to-[#1677B8] px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FaCalendarCheck />
                Book Appointment
              </a>

              <a
                href="tel:+917023123152"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#0F4C81] bg-white/70 px-7 py-4 font-semibold text-[#0F4C81] transition duration-300 hover:bg-[#0F4C81] hover:text-white"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>

            {/* Small Trust Text */}
            <p className="mt-6 text-sm font-medium text-slate-500">
              Patient-first care • Personalized treatment • Compassionate support
            </p>
          </div>

          {/* ================= RIGHT IMAGE SLIDER ================= */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Decorative Background */}
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border-[18px] border-blue-100/80"></div>

            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-sky-200/50 blur-2xl"></div>

            {/* Slider */}
            <div className="relative h-[430px] overflow-hidden rounded-[35px] border-[8px] border-white bg-blue-100 shadow-[0_25px_70px_rgba(8,59,102,0.22)] sm:h-[500px]">

              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    index === currentSlide
                      ? "scale-100 opacity-100"
                      : "scale-110 opacity-0"
                  }`}
                />
              ))}

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062e50]/70 via-transparent to-transparent"></div>

              {/* Slide Label */}
              <div className="absolute bottom-7 left-7 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
                {slides[currentSlide].label}
              </div>

              {/* Previous Button */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0F4C81] shadow-lg transition hover:bg-white"
              >
                <FaChevronLeft />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0F4C81] shadow-lg transition hover:bg-white"
              >
                <FaChevronRight />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-7 right-7 flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Doctor Info */}
            <div className="absolute -bottom-7 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 text-center shadow-xl backdrop-blur-xl sm:w-[75%]">
              <h3 className="font-bold text-[#083B66]">
                Dr. Seema Chhangani
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Pulmonology & Critical Care Medicine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;