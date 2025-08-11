import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white text-black min-h-screen w-full relative">
        
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-lg transition-all duration-500">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                Aseerii<span className="text-yellow-300">.</span>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-8 text-lg font-medium">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Education", path: "/education" },
                  { name: "Experience", path: "/experience" },
                  { name: "Skills", path: "/skills" },
                  { name: "Projects", path: "/projects" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="relative text-white hover:text-yellow-300 transition duration-300 group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-3xl text-white focus:outline-none"
                >
                  {isOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col items-center bg-gradient-to-b from-pink-600 to-indigo-700 text-lg font-medium py-4 space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Education", path: "/education" },
                { name: "Experience", path: "/experience" },
                { name: "Skills", path: "/skills" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-yellow-300 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Routing Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
