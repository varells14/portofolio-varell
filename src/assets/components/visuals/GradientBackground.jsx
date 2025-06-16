import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground = ({ children, backgroundColor = '#1B0930', gradientColors = [''], animationDuration = 6, className = '' }) => {
  return (
    <motion.div
      className={`relative p-1 rounded-xl overflow-hidden ${className}`}
      whileHover={{
        scale: 1.08,
        y: -10,
        boxShadow: '0 15px 20px rgb(62, 0, 106), 0 0 15px rgb(225, 225, 225)',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
          duration: 0.3,
        },
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to right top,
            ${backgroundColor},
            ${gradientColors[0]},
            ${backgroundColor},
            ${gradientColors[1]},
            ${backgroundColor},
            ${gradientColors[2]},
            ${backgroundColor},
            ${gradientColors[3]},
            ${backgroundColor}
          )`,
          backgroundSize: '400% 400%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ ease: 'linear', duration: animationDuration, repeat: Infinity }}
      />

      <div className="relative z-10 flex items-center justify-center w-full h-full rounded-xl bg-transparent ">{children}</div>
    </motion.div>
  );
};

export default GradientBackground;
