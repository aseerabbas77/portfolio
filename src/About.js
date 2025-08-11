import React from 'react';

function About() {
    return (
     <div className="bg-zinc-200 flex flex-wrap justify-center px-8 py-8">
  {/* Text Section */}
  <div className=" max-w-2xl">
    <h1 className="text-2xl font-bold  flex justify-center mb-5 mt-5 text-pink-700">ABOUT</h1>
        <h1 className="text-2xl font-bold mb-4 flex justify-center">Iam A Full-Stack Web- Developer</h1>
    <p className="text-gray-800 leading-relaxed ml-10" style={{width:'90%'}}>
      I am a MERN Stack Developer with 1 year of hands-on experience in building responsive and scalable web applications. My skillset includes HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB. I also work with Tailwind CSS, Material UI, REST APIs, GitHub, and React Router. I’ve built various full-stack projects, from SPAs to complete CRUD systems. I focus on writing clean, maintainable code and love turning ideas into real-world solutions. I'm eager to grow and contribute in a collaborative development environment.
    </p>
  </div>

  {/* Image or Box Section */}
  <div className="w-60 h-60  bg-white shadow-2xl my-20 mx-10  " >
    <img src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
    alt=""
    className='w-full h-full object-cover   transform transition duration-300 hover:scale-110' />
  </div>
</div>

        
    );
}

export default About;
