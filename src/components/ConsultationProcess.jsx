import React from "react";
import {
  FaCalendarCheck,
  FaUserMd,
  FaClipboardCheck,
  FaHeartbeat,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    description:
      "Schedule your appointment by phone or email at your preferred time.",
  },
  {
    icon: <FaUserMd />,
    title: "Consultation",
    description:
      "Meet the specialist for a detailed discussion of your symptoms.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Diagnosis",
    description:
      "Receive an accurate diagnosis with a personalized treatment plan.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Recovery & Follow-up",
    description:
      "Regular follow-up visits to ensure long-term respiratory wellness.",
  },
];

function ConsultationProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Consultation Process
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Your Journey to Better Lung Health
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            A smooth and patient-friendly consultation process designed to
            provide accurate diagnosis, expert guidance, and personalized
            treatment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-blue-100"></div>

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Circle */}
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex items-center justify-center text-3xl shadow-xl relative z-10">
                  {step.icon}
                </div>

                {/* Number */}
                <div className="mt-4 text-blue-700 font-bold text-sm tracking-widest">
                  STEP {index + 1}
                </div>

                {/* Content */}
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConsultationProcess;