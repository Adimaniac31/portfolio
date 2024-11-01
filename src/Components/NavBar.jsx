// Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after navigation
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background-dark p-4 shadow-lg z-50">
      <div className="flex justify-between items-center">
        <div className="text-text-muted text-xl font-semibold">My Portfolio</div>
        <div className="block md:hidden">
          <button
            className="text-text-muted focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:items-center`}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="text-text-muted" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="text-text-muted" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="text-text-muted" onClick={() => scrollToSection('experience')}>
              Experience
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="text-text-muted" onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="text-text-muted" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

