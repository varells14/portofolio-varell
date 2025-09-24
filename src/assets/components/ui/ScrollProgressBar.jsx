import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // bikin animasinya lebih smooth pake spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX: scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: 'linear-gradient(90deg, #7C3AED, #A855F7, #D946EF)',
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.7)',
        transformOrigin: '0%',
        borderRadius: '0 10px 10px 0',
        zIndex: 1000,
      }}
    />
  );
}

export default ScrollProgressBar;
