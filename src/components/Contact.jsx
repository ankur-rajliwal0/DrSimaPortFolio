import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Contact
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Book Your Consultation
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Get in touch for appointments and professional respiratory care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900">
              Dr. Seema Chhangani
            </h3>

            <p className="text-blue-700 font-medium mt-2">
              Consultant Pulmonology & Critical Care Medicine
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a
                    href="tel:+917023123152"
                    className="text-gray-600 hover:text-blue-700"
                  >
                    +91 70231 23152
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:seemachhangani13@gmail.com"
                    className="text-gray-600 hover:text-blue-700"
                  >
                    seemachhangani13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaGlobe />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Website</h4>
                  <p className="text-gray-600">
                    www.drseemachhangani.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Clinic Address</h4>

                  <p className="text-gray-600 leading-7">
                    Amar Jain Hospital
                    <br />
                    374-C, Amrapali Circle
                    <br />
                    Vaishali Nagar
                    <br />
                    Jaipur, Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Appointment Request
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
              />

              <textarea
                rows="5"
                placeholder="Describe your concern..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-blue-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;