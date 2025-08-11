import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      console.log(formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-6">
      <div className="backdrop-blur-lg bg-white/30 shadow-xl rounded-2xl p-8 w-full max-w-4xl border border-white/40">
        <h2 className="text-4xl font-bold mb-6 text-center text-pink-700 drop-shadow">
          Contact Me
        </h2>
        <p className="text-center text-gray-700 mb-8">
          I'd love to hear from you! Fill out the form below or reach me directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-700 text-2xl" />
              <span className="text-gray-800">aseerabbas492@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-pink-700 text-2xl" />
              <span className="text-gray-800">+923449087302</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-700 text-2xl" />
              <span className="text-gray-800">Dera Ismail Khan, Pakistan</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/aseerabbas77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow hover:shadow-lg transition hover:scale-105"
              >
                <FaGithub className="text-gray-800 text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/aseerabbas77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow hover:shadow-lg transition hover:scale-105"
              >
                <FaLinkedin className="text-blue-600 text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded text-center font-medium animate-fade-in">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 text-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-700">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 text-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-700">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 text-lg bg-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-700">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-pink-700 text-white font-semibold py-3 rounded hover:bg-pink-800 transition text-lg shadow hover:shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              {!loading && <FaPaperPlane />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
