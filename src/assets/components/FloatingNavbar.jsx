// src/components/HidingNavbar.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Import ikon hamburger dan silang

const FloatingNavbar = () => {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Default: terlihat saat awal
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu mobile

  // Handler untuk menyembunyikan/menampilkan navbar saat scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Gulir ke bawah
      if (isVisible && window.scrollY > 100) {
        // Sembunyikan setelah 100px gulir ke bawah
        controls.start({ y: -100, opacity: 0 });
        setIsVisible(false);
      }
    } else {
      // Gulir ke atas
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

  // Fungsi untuk menutup menu mobile saat link diklik
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                   w-[calc(100%-2rem)] max-w-4xl mx-auto
                   bg-white bg-opacity-10 backdrop-blur-md
                   rounded-full shadow-lg p-3 flex items-center justify-between
                   border border-white border-opacity-20"
      >
        {/* Logo atau Nama Situs */}
        <div className="text-white text-xl font-bold z-50">YourLogo</div>

        {/* Navigasi Desktop */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-purple-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-300 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Tombol Aksi Desktop (opsional) */}
        <div className="hidden md:block">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors">Get Started</button>
        </div>

        {/* Tombol Hamburger/Close untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl focus:outline-none" aria-label="Toggle navigation">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Overlay dan Menu Mobile (hanya muncul di layar kecil) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden" // Overlay gelap
            onClick={() => setIsMobileMenuOpen(false)} // Tutup saat klik overlay
          >
            <motion.ul
              initial={{ x: '100%' }} // Mulai dari kanan layar
              animate={{ x: 0 }} // Bergeser ke kiri
              exit={{ x: '100%' }} // Bergeser ke kanan saat keluar
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-3/4 bg-gray-900 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-bold shadow-lg"
              onClick={(e) => e.stopPropagation()} // Mencegah klik di menu menutup overlay
            >
              <li>
                <a href="#home" onClick={handleNavLinkClick} className="hover:text-purple-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavLinkClick} className="hover:text-purple-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleNavLinkClick} className="hover:text-purple-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleNavLinkClick} className="hover:text-purple-300 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button onClick={handleNavLinkClick} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors mt-4">
                  Get Started
                </button>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
