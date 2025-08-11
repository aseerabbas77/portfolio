import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call یا فارم سبمٹ کرنے کا عمل یہاں کریں
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-zinc-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-xl">
        <h2 className="text-4xl font-bold mb-8 text-pink-700 text-center">Contact Me</h2>

        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 mb-6 rounded text-center font-medium">
            Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full border border-gray-300 rounded px-4 py-3 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 text-white font-semibold py-3 rounded hover:bg-pink-800 transition text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
