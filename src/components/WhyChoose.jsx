import React from "react";
import {
  FaCheckCircle,
  FaStethoscope,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaStethoscope />,
      title: "Specialized Respiratory Care",
      desc: "Focused consultation for pulmonary and respiratory health with evidence-based medical guidance.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Patient-Centered Approach",
      desc: "Every consultation is tailored to individual health concerns with compassionate care.",
    },
    {
      icon: <FaUserMd />,
      title: "Professional Expertise",
      desc: "Qualified medical care in Pulmonology and Critical Care Medicine for comprehensive treatment.",
    },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-[4px] text-sm text-blue-700 font-semibold">
              Why Choose
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Dedicated Care for
              <br />
              <span className="text-blue-700">
                Better Respiratory Health
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Every patient deserves thoughtful attention, accurate diagnosis,
              and personalized treatment. The goal is to provide quality
              respiratory and critical care with professionalism, compassion,
              and modern medical practices.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Personalized Consultation",
                "Evidence-Based Treatment",
                "Compassionate Patient Care",
                "Professional Medical Guidance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <FaCheckCircle className="text-blue-700 text-xl" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-blue-100"></div>

            <div className="space-y-12">
              {features.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Background Blur */}
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;