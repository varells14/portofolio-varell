import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '9px',
          backgroundColor: '#8903E9',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
    </>
  );
}

export default ScrollProgressBar;
