import React from "react";

const projects = [
  {
    title: "Employee Management App",
    description:
      "A full-stack MERN application for managing employees with CRUD operations.",
    img: "Screenshot 2025-07-04 160338.png",
    github: "https://github.com/aseerabbas77/employee-management-app",
  },
  {
    title: "MERN Stack Authentication",
    description:
      "Login & signup system with JWT token authorization for secure user authentication.",
    img: "Screenshot 2025-07-11 150104.png",
    github:
      "https://github.com/aseerabbas77/user-athentication-and-user-login",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack E-commerce project with product listings, cart, secure checkout, and payment integration.",
    img: "https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.jpg?s=1024x1024&w=is&k=20&c=TW1sWVSVTo-GtbD7tLz3IO98v_JUJWqAnbgMrjtKLfs=",
    github: "https://github.com/aseerabbas77/E-commerce",
  },
];

function Projects() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-pink-500 text-4xl font-extrabold tracking-wider">
          Projects
        </h1>
        <p className="text-white text-2xl mt-3 font-light">
          What I Have Built
        </p>
        <div className="mt-2 w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-lg shadow-xl hover:shadow-pink-500/30 transform transition duration-500 hover:-translate-y-2 hover:scale-105"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-full shadow hover:shadow-lg transition font-semibold"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
