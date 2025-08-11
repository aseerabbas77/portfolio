import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Education from './Education';  // Education import کیا
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-black min-h-screen w-full relative">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">Aseerii</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-lg font-medium">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About</a></li>
              <li><a href="#education" className="hover:text-yellow-500">Education</a></li>  {/* Education added */}
              <li><a href="#experience" className="hover:text-yellow-500">Experience</a></li>
              <li><a href="#skills" className="hover:text-yellow-500">Skills</a></li>
              <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-white text-lg font-medium py-4 space-y-2">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">About</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Education</a></li>  {/* Education added */}
            <li><a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Experience</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Sections */}
      <div className='bg-zinc-200'>
        <div id="home" className="w-full min-h-screen flex items-center justify-center ">
          <div className="w-full max-w-7xl px-4"><Home /></div>
        </div>

        <div id="about" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><About /></div>
        </div>

        <div id="education" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><Education /></div>
        </div>

        <div id="experience" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><Experience /></div>
        </div>

        <div id="skills" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><Skills /></div>
        </div>

        <div id="projects" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><Projects /></div>
        </div>

        <div id="contact" className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl px-4"><Contact /></div>
        </div>
      </div>

      {/* Fixed arrow up */}
      <div
        onClick={scrollToHome}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer bg-yellow-400 rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300"
        title="Go to Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default App;
