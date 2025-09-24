'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const ScrollIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let current = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = index;
          }
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // panggil sekali biar langsung sinkron
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const target = document.getElementById(sections[index].id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClick = () => {
    if (activeIndex < sections.length - 1) {
      scrollToSection(activeIndex + 1);
    } else {
      // kalau sudah di contact -> balik ke home
      scrollToSection(0);
    }
  };

  return (
    <div className="fixed right-5 bottom-10 md:bottom-16 z-50">
      {activeIndex < sections.length - 1 ? (
        <motion.button
          onClick={handleClick}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg cursor-pointer"
        >
          <FiArrowDown size={24} />
        </motion.button>
      ) : (
        <button
          onClick={handleClick}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollIndicator;
