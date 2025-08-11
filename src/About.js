import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center px-8 py-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      
      {/* Text Section */}
      <div className="max-w-2xl p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/10">
        <h1 className="text-4xl font-extrabold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 animate-pulse">
          ABOUT
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">
          I’m a Full-Stack Web Developer
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          I am a MERN Stack Developer with 1 year of hands-on experience in
          building responsive and scalable web applications. My skillset
          includes <span className="text-pink-300 font-semibold">HTML5</span>,{" "}
          <span className="text-pink-300 font-semibold">CSS3</span>,{" "}
          <span className="text-pink-300 font-semibold">JavaScript (ES6+)</span>
          , <span className="text-pink-300 font-semibold">React.js</span>,{" "}
          <span className="text-pink-300 font-semibold">Node.js</span>,{" "}
          <span className="text-pink-300 font-semibold">Express.js</span> and{" "}
          <span className="text-pink-300 font-semibold">MongoDB</span>.  
          I also work with Tailwind CSS, Material UI, REST APIs, GitHub, and React Router.  
          I focus on writing clean, maintainable code and love turning ideas
          into real-world solutions. I'm eager to grow and contribute in a
          collaborative development environment.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl ml-10 border-4 border-pink-400 transform hover:scale-105 transition duration-500 hover:shadow-pink-500/50">
        <img
          src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=400&auto=format&fit=crop&q=60"
          alt="Developer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default About;
