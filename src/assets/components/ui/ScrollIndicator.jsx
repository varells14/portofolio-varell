'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUp, FiGlobe, FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const ScrollIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
  if (!localStorage.getItem('i18nextLng')) {
    i18n.changeLanguage('en');
  }
}, [i18n]);

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
    handleScroll();
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
      scrollToSection(0);
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="fixed right-5 bottom-10 md:bottom-16 z-50 flex flex-col items-center gap-3">
      {/* Modern Language Dropdown */}
      <div className="relative">
        <motion.button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-1 text-sm px-4 py-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all"
        >
          <FiGlobe className="text-lg" />
          {currentLang.toUpperCase()}
        </motion.button>

        {isLangDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full mb-3 w-36 bg-[#1B002F]/95 border border-purple-600 rounded-lg shadow-2xl overflow-hidden z-50 backdrop-blur-sm"
          >
            <li>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-purple-700 transition ${
                  currentLang === 'en' ? 'bg-purple-600 text-white' : 'text-gray-300'
                }`}
              >
                English
                {currentLang === 'en' && <FiCheck className="text-white" />}
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('id')}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-purple-700 transition ${
                  currentLang === 'id' ? 'bg-purple-600 text-white' : 'text-gray-300'
                }`}
              >
                Indonesia
                {currentLang === 'id' && <FiCheck className="text-white" />}
              </button>
            </li>
          </motion.ul>
        )}
      </div>

      {/* Scroll Arrow */}
      {activeIndex < sections.length - 1 ? (
        <motion.button
          onClick={handleClick}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all"
        >
          <FiArrowDown size={24} />
        </motion.button>
      ) : (
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollIndicator;
