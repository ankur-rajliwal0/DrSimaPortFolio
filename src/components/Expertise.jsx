import React from "react";

import Pulmonology from "../assets/Images/Pulmonology.jpg";
import Tuberculosis from "../assets/Images/Tuberculosis.jpg";
import Respiratory from "../assets/Images/Respiratory Diseases.webp";
import CriticalCare from "../assets/Images/Critical Care.jpg";
import LungHealth from "../assets/Images/Lung Health.avif";
import PatientCare from "../assets/Images/Patient-Centered Care.jpg"; // <-- Add this image

const expertise = [
  {
    image: Pulmonology,
    title: "Pulmonology",
    description:
      "Comprehensive diagnosis and management of respiratory and lung diseases.",
  },
  {
    image: Tuberculosis,
    title: "Tuberculosis",
    description:
      "Evaluation, diagnosis and treatment planning for tuberculosis patients.",
  },
  {
    image: Respiratory,
    title: "Respiratory Diseases",
    description:
      "Care for asthma, chronic cough, breathing disorders and chest conditions.",
  },
  {
    image: CriticalCare,
    title: "Critical Care",
    description:
      "Specialized consultation for critically ill patients requiring intensive medical care.",
  },
  {
    image: LungHealth,
    title: "Lung Health",
    description:
      "Focused assessment and treatment to improve respiratory wellness.",
  },
  {
    image: PatientCare,
    title: "Patient-Centered Care",
    description:
      "Personalized treatment plans with compassionate and professional guidance.",
  },
];

function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-blue-700 font-semibold">
            Areas of Expertise
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Specialized Medical Expertise
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Dedicated to providing advanced respiratory care with accurate
            diagnosis, personalized treatment, and compassionate patient
            support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Title on Image */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-slate-600 leading-7">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="h-1 w-14 rounded-full bg-blue-700 group-hover:w-28 transition-all duration-500"></div>

                  <button className="text-blue-700 font-semibold hover:text-cyan-600 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;