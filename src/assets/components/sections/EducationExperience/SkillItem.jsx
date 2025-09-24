import React from 'react';
import { motion } from 'framer-motion';

const skillItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillItem = ({ skill }) => (
  <motion.div
    variants={skillItemVariants}
    whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 10px 25px rgba(160, 64, 252, 0.6)' }}
    className="relative group bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 p-[2px] rounded-xl cursor-pointer transition-transform duration-300"
  >
    <div className="bg-[#1D042F] rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-center text-white text-sm md:text-lg font-semibold transition-all duration-300 group-hover:text-purple-400">
      {skill}
    </div>
    {/* Optional inner glow effect */}
    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-purple-600 blur-xl transition-opacity duration-300"></span>
  </motion.div>
);

export default SkillItem;
