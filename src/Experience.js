import React from 'react';

const Experience = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl mx-auto my-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-pink-700">Experience</h2>

      <div className="space-y-8 text-gray-800 text-lg">
        <div>
          <h3 className="text-2xl font-semibold mb-2">MERN Stack Developer</h3>
          <p className="italic text-gray-600 mb-1">East and West Web Development Agency</p>
          <p className="text-gray-600 mb-2">Duration: 1 Year</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
            <li>Built responsive and user-friendly interfaces with React and Tailwind CSS.</li>
            <li>Integrated RESTful APIs and handled backend logic and database management.</li>
            <li>Collaborated with the team to optimize application performance and implement new features.</li>
            <li>Worked on deployment and continuous integration to ensure smooth releases.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
