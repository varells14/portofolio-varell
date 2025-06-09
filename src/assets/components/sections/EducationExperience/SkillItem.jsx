import React from 'react';
import { motion } from 'framer-motion';

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const SkillItem = ({ skill }) => (
  <motion.div variants={skillItemVariants} className="bg-[#1D042F] text-white px-6 py-3 rounded-full border border-purple-700 shadow-md text-lg font-medium">
    {skill}
  </motion.div>
);

export default SkillItem;
