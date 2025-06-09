import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll(); // Mendapatkan progres scroll dari seluruh dokumen

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]); // Mengubah progres 0-1 menjadi scale 0-1

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX, // Memanfaatkan variabel scaleX dari useTransform
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '9px',
          backgroundColor: '#8903E9',
          transformOrigin: '0%', // Animasi dari kiri ke kanan
          zIndex: 1000,
        }}
      />
    </>
  );
}

export default ScrollProgressBar;
