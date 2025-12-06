// Newsletter.jsx
import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-white text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b99ce]">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Stay updated with the latest clubs, events, and news from ClubSphere.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="relative w-full sm:w-2/3">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0b99ce]"
            />
          </div>
          <button
            className="bg-[#0b99ce] hover:bg-[#fe3885] transition-colors text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 mt-4 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
