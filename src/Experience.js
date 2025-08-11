import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl w-full">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-pink-600 tracking-wider uppercase">
          Experience
        </h2>

        <div className="relative border-l-4 border-pink-500 pl-8 space-y-12">
          {/* Experience Item */}
          <div className="group relative transform transition duration-500 hover:-translate-y-1">
            <div className="absolute -left-4 top-2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white animate-pulse"></div>

            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
              MERN Stack Developer
            </h3>
            <p className="italic text-gray-600 mb-1">
              East and West Web Development Agency
            </p>
            <p className="text-gray-600 mb-4 font-medium">Duration: 1 Year</p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>
                Developed and maintained full-stack web applications using{" "}
                <span className="font-semibold text-pink-500">
                  MongoDB, Express.js, React.js, and Node.js
                </span>
                .
              </li>
              <li>
                Built responsive and user-friendly interfaces with{" "}
                <span className="font-semibold">React & Tailwind CSS</span>.
              </li>
              <li>
                Integrated RESTful APIs and managed backend logic with efficient
                database handling.
              </li>
              <li>
                Collaborated in agile teams to optimize performance and add new
                features.
              </li>
              <li>
                Deployed and maintained CI/CD pipelines for smooth releases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
