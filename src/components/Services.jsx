import React from "react";
import {
  FaLungs,
  FaUserMd,
  FaStethoscope,
  FaProcedures,
  FaHeartbeat,
  FaNotesMedical,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLungs size={38} />,
    title: "Pulmonology Consultation",
    description:
      "Comprehensive consultation for lung and respiratory health concerns.",
  },
  {
    icon: <FaStethoscope size={38} />,
    title: "Respiratory Diseases",
    description:
      "Diagnosis and treatment of common and chronic respiratory disorders.",
  },
  {
    icon: <FaNotesMedical size={38} />,
    title: "Tuberculosis Care",
    description:
      "Evaluation, diagnosis, and management of tuberculosis with proper medical guidance.",
  },
  {
    icon: <FaProcedures size={38} />,
    title: "Critical Care",
    description:
      "Expert consultation and management for critically ill patients requiring specialized care.",
  },
  {
    icon: <FaHeartbeat size={38} />,
    title: "Lung Health Assessment",
    description:
      "Assessment and monitoring of overall lung function and respiratory wellness.",
  },
  {
    icon: <FaUserMd size={38} />,
    title: "Specialist Consultation",
    description:
      "Personalized treatment plans based on individual patient needs.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Comprehensive Respiratory Care
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide professional consultation and specialized care for
            respiratory diseases, pulmonary disorders, tuberculosis, and
            critical care medicine with a patient-first approach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-blue-700 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;