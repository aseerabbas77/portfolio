import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl w-full">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-pink-600 tracking-wider uppercase">
          Education
        </h2>

        <div className="relative border-l-4 border-pink-500 pl-8 space-y-12">
          {/* Bachelor Degree */}
          <div className="group relative transform transition duration-500 hover:-translate-y-1">
            <div className="absolute -left-4 top-2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white animate-pulse"></div>
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
              Bachelor Degree
            </h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Gomal University{" "}
              <span className="italic text-sm text-gray-500">
                (2021 - 2025)
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Specialization in Full-Stack Web Development, focusing on MERN
              stack and scalable applications.
            </p>
          </div>

          {/* FSC ICS */}
          <div className="group relative transform transition duration-500 hover:-translate-y-1">
            <div className="absolute -left-4 top-2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white animate-pulse"></div>
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
              FSC (ICS) - 80%
            </h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Iqra Science School{" "}
              <span className="italic text-sm text-gray-500">
                (2019 - 2021)
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Focused on Computer Science, Mathematics, and foundational
              programming concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
