import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-6 text-white flex flex-col items-center justify-center">
      
      {/* Intro */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold my-6">
          Hi, I'm <span className="text-pink-500 drop-shadow-lg">Aseer</span>
        </h1>
        
        {/* Profile Image */}
        <div
          className="w-60 h-60 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-pink-500/50 mx-auto"
        >
          <img
            src="l;ll;';.jpg" // तुम्हारा original path वही रखा है
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Description */}
      <div className="my-8 px-4 max-w-2xl">
        <p className="text-center text-lg leading-relaxed text-gray-300">
          I'm a <span className="text-pink-400 font-semibold">Full-Stack Web Developer</span> 
          with expertise in both front-end and back-end technologies. I build 
          and design exceptional digital experiences, focusing on responsive 
          web applications and leveraging my skills in frameworks like 
          <span className="text-pink-400"> React.js</span>, 
          <span className="text-pink-400"> Node.js</span>, and 
          <span className="text-pink-400"> MongoDB</span>.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mt-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/923449087302"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://img.freepik.com/premium-vector/art-illustration_929495-41.jpg"
            alt="Facebook"
            className="w-7 h-7 rounded"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aseer-abbas-6a30622b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://img.freepik.com/free-psd/linkedin-logo-icon-psd-editable_314999-3660.jpg"
            alt="LinkedIn"
            className="w-8 h-8 rounded"
          />
        </a>
      </div>
    </div>
  );
}
