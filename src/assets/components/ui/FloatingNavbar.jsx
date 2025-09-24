'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNavbar = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
                 w-[92%] max-w-3xl mx-auto 
                 bg-[#0a0a1a]/50 backdrop-blur-xl
                 border border-purple-700/40 shadow-lg
                 rounded-full px-6 py-3 flex items-center justify-between"
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

      {/* Dropdown Language */}
      <div className="relative">
        <button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full
                     bg-purple-600 hover:bg-purple-700 text-white transition"
        >
          <FiGlobe className="text-lg" />
          {currentLang.toUpperCase()}
        </button>
        {isLangDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 bg-[#1B002F] border border-purple-600 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <li>
              <button
                onClick={() => changeLanguage('id')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${
                  currentLang === 'id' ? 'bg-purple-600 text-white' : 'text-gray-300'
                }`}
              >
                Indonesia
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${
                  currentLang === 'en' ? 'bg-purple-600 text-white' : 'text-gray-300'
                }`}
              >
                English
              </button>
            </li>
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;
