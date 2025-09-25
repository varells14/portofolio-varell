'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Paksa English saat halaman dibuka
  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  // Scroll tracking
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

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="fixed right-5 bottom-10 md:bottom-16 z-50 flex flex-col items-center gap-4">

      {/* Desktop: Toggle */}
      <div className="hidden md:flex relative items-center w-24 h-10 bg-gray-800 rounded-full cursor-pointer p-1">
        <motion.div
          className="absolute w-1/2 h-full bg-purple-500 rounded-full shadow-md"
          animate={{ x: currentLang === 'en' ? 0 : 96 / 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
        <div className="relative flex justify-between w-full px-2 text-sm font-medium text-white z-10 select-none">
          <span onClick={() => toggleLanguage('en')}>EN</span>
          <span onClick={() => toggleLanguage('id')}>ID</span>
        </div>
      </div>

      {/* Mobile: Globe Button */}
      <div className="md:hidden relative">
        <motion.button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg"
        >
          <FiGlobe size={24} />
        </motion.button>

        <AnimatePresence>
          {isLangDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 w-32 right-1/2 translate-x-1/2 bg-[#1B002F]/95 border border-purple-600 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm"
            >
              {['en', 'id'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`w-full px-4 py-2 text-sm flex items-center justify-between transition ${
                    currentLang === lang
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-700'
                  }`}
                >
                  {lang === 'en' ? 'English' : 'Indonesia'}
                  {currentLang === lang && <FiCheck className="ml-1" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
