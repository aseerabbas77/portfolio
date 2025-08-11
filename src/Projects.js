import React from 'react';

function Projects() {
  return (
    <div className='bg-zinc-200 min-h-screen p-6'>
      <div className='flex justify-center pt-10'>
        <div>
          <h1 className='text-3xl font-bold flex justify-center mb-5 text-pink-700'>
            Projects
          </h1>
          <h1 className='text-3xl font-bold mb-5'>What I Have Built</h1>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-6 p-4'>

        {/* Employee Management App */}
        <div className="relative group h-[300px] w-[400px] rounded-[20px] overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
          <img
            src="Screenshot 2025-07-04 160338.png" // اپنی image path ڈالنا
            alt="Employee Management App"
            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4">
            <p className="text-white text-lg font-semibold text-center">
              Employee Management App — A full-stack MERN application for managing employees with CRUD operations.
            </p>
            <a
              href="https://github.com/aseerabbas77/employee-management-app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-lg transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-6 h-6"
              />
              <span className="font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>

        {/* MERN Auth Project */}
        <div className="relative group h-[300px] w-[400px] rounded-[20px] overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
          <img
            src="Screenshot 2025-07-11 150104.png" // اپنی image path ڈالنا
            alt="MERN Authentication"
            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4">
            <p className="text-white text-lg font-semibold text-center">
              MERN Stack User Authentication — login & signup system with JWT token authorization.
            </p>
            <a
              href="https://github.com/aseerabbas77/user-athentication-and-user-login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-lg transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-6 h-6"
              />
              <span className="font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>

        {/* E-commerce Project */}
        <div className="relative group h-[300px] w-[400px] rounded-[20px] overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
          <img
            src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.jpg?s=1024x1024&w=is&k=20&c=TW1sWVSVTo-GtbD7tLz3IO98v_JUJWqAnbgMrjtKLfs=" // یہاں اپنی e-commerce project کی image کا path ڈالنا
            alt="E-commerce Project"
            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4">
            <p className="text-white text-lg font-semibold text-center">
              Full-stack E-commerce project — MERN stack application featuring product listings, cart functionality, and secure checkout and payment integration.
            </p>
            <a
              href="https://github.com/aseerabbas77/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-lg transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-6 h-6"
              />
              <span className="font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
