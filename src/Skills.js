import React from "react";

const skills = [
  { name: "HTML", img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" },
  { name: "CSS", img: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-128.png" },
  { name: "JavaScript", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.c1c7776c.png&w=64&q=75" },
  { name: "React", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact.3ac94d47.png&w=64&q=75" },
  { name: "Tailwind CSS", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftailwind.3c2dd1a9.png&w=64&q=75" },
  { name: "Material UI", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaterialui.7834f6f1.png&w=64&q=75" },
  { name: "Node.js", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnode.ec18d39f.png&w=64&q=75" },
  { name: "MongoDB", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmongo.155fdbaf.png&w=64&q=75" },
  { name: "GitHub", img: "https://adil-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub1.f0bbc6e8.png&w=64&q=75" },
  { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png" },
];

function Skills() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-pink-500 text-4xl font-extrabold tracking-wider">Skills</h1>
        <p className="text-white text-2xl mt-3 font-light">What I Can Do</p>
        <div className="mt-2 w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-pink-500/40 transform hover:-translate-y-2 hover:scale-105 transition duration-300"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="h-20 w-20 object-contain mb-4 drop-shadow-lg group-hover:scale-110 transition duration-300"
            />
            <h2 className="text-white font-semibold text-lg tracking-wide group-hover:text-pink-400">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
