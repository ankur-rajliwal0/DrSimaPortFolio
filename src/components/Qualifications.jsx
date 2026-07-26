import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const qualifications = [
  {
    title: "MBBS",
    subtitle: "Bachelor of Medicine & Bachelor of Surgery",
  },
  {
    title: "MD",
    subtitle: "Tuberculosis & Respiratory Disease (Pulmonary Medicine)",
  },
  {
    title: "Certificate",
    subtitle: "Critical Care Medicine",
  },
];

function Qualifications() {
  return (
    <section id="qualification" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Qualifications
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Education & Professional Training
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Academic qualifications and specialized training in pulmonary
            medicine and critical care.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-100"></div>

          {qualifications.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-8 mb-12"
            >
              {/* Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg">
                <FaGraduationCap />
              </div>

              {/* Card */}
              <div className="flex-1 bg-slate-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualifications;