import React from "react";
import drImage from "../assets/Images/dr.webp";
import {
  FaStethoscope,
  FaHeartbeat,
  FaCheckCircle,
} from "react-icons/fa";

function AboutDocter() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-200 blur-[120px] opacity-40"></div>

            {/* Doctor Image */}
            <div className="relative z-10 rounded-[35px] border-8 border-white shadow-[0_25px_70px_rgba(0,0,0,.15)]">
              <img
                src={drImage}
                alt="Dr. Seema"
                className="w-[420px] h-[560px] object-cover object-top rounded-[28px]"
              />
            </div>

            {/* TOP CARD */}
            <div className="absolute top-8 -right-8 z-50 bg-white rounded-2xl shadow-2xl border border-blue-100 px-6 py-5 w-64">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  <FaStethoscope />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Pulmonologist
                  </h4>

                  <p className="text-sm text-gray-500">
                    Critical Care Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div className="absolute bottom-8 -left-8 z-50 bg-white rounded-2xl shadow-2xl border border-blue-100 px-6 py-5 w-64">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  <FaHeartbeat />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Patient First
                  </h4>

                  <p className="text-sm text-gray-500">
                    Compassionate Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
              About Doctor
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Dr. Seema Chhangani
            </h2>

            <p className="text-blue-700 text-xl font-semibold mt-3">
              Consultant Pulmonology & Critical Care Medicine
            </p>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              Dr. Seema Chhangani is dedicated to providing comprehensive
              respiratory and pulmonary care with a patient-first approach.
              She combines clinical expertise with compassionate treatment
              to help patients achieve better lung health and improved
              quality of life.
            </p>

            {/* Qualifications */}
            <div className="mt-10 space-y-5">
              {[
                "MBBS",
                "MD (Tuberculosis & Respiratory Disease / Pulmonary Medicine)",
                "Certificate in Critical Care Medicine",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-blue-700 mt-1" />

                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise */}
            <div className="grid grid-cols-2 gap-5 mt-12">
              {[
                "Pulmonology",
                "Respiratory Diseases",
                "Tuberculosis",
                "Critical Care",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-700 pl-4 py-3 hover:translate-x-2 transition-all duration-300"
                >
                  <h4 className="font-semibold text-lg text-slate-900">
                    {item}
                  </h4>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-12">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutDocter;