// src/components/HidingNavbar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const FloatingNavbar = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isVisible, controls]);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                  md:w-[26rem] w-[90%] max-w-xl mx-auto 
                  bg-tranparent bg-opacity-10 backdrop-blur-md
                  rounded-full shadow-lg p-3 flex md:pr-0 pr-6 items-center justify-end md:justify-center
                  border border-white border-opacity-20"
      >
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-purple-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#tech" className="hover:text-purple-400 transition-colors">
              Tech
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
          </li>

          <li className="relative">
            <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="text-sm px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2">
              {currentLang.toUpperCase()}
            </button>
            {isLangDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-[#1B002F] border border-purple-600 rounded shadow-lg z-50">
                <li>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('id');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${currentLang === 'id' ? 'bg-purple-600' : ''}`}
                  >
                    Indonesia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${currentLang === 'en' ? 'bg-purple-600' : ''}`}
                  >
                    English
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl focus:outline-none" aria-label="Toggle navigation">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden font-poppins" // Overlay gelap
            onClick={() => setIsMobileMenuOpen(false)} // Tutup saat klik overlay
          >
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-3/4 bg-[#1B002F] flex flex-col items-center justify-center space-y-8 text-white text-2xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <li>
                <a href="#home" onClick={handleNavLinkClick} className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavLinkClick} className="hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tech" onClick={handleNavLinkClick} className="hover:text-purple-400 transition-colors">
                  Tech
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleNavLinkClick} className="hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>

              <li className="relative w-full flex flex-col items-center">
                <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="px-4 text-[18px] py-2  rounded  text-center bg-purple-600 hover:bg-purple-700 transition">
                  {currentLang.toUpperCase()}
                </button>

                {isLangDropdownOpen && (
                  <ul className="mt-2 w-32 bg-[#1B002F] border border-purple-600 rounded shadow-lg z-50">
                    <li>
                      <button
                        onClick={() => {
                          i18n.changeLanguage('id');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${currentLang === 'id' ? 'bg-purple-600' : ''}`}
                      >
                        Indonesia
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          i18n.changeLanguage('en');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-700 ${currentLang === 'en' ? 'bg-purple-600' : ''}`}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
