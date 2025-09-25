'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNavbar = () => {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll hide/show
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      if (isVisible && window.scrollY > 100) {
        controls.start({ y: -100, opacity: 0 });
        setIsVisible(false);
      }
    } else {
      if (!isVisible) {
        controls.start({ y: 0, opacity: 1 });
        setIsVisible(true);
      }
    }
    setLastScrollY(window.scrollY);

    // Active link by scroll
    let current = 'home';
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = link.id;
        }
      }
    });
    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isVisible, controls]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
                 w-[92%] max-w-3xl mx-auto 
                 bg-[#0a0a1a]/50 backdrop-blur-xl
                 border border-purple-700/40 shadow-lg
                 rounded-full px-6 py-3 flex items-center justify-center"
    >
      <ul className="flex flex-row flex-wrap gap-5 text-gray-200 font-medium text-sm md:text-base">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            <a
              href={`#${link.id}`}
              className={`transition-colors ${
                activeSection === link.id
                  ? 'text-purple-400'
                  : 'hover:text-purple-300'
              }`}
            >
              {link.label}
            </a>
            {activeSection === link.id && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-500 rounded-full"
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default FloatingNavbar;
