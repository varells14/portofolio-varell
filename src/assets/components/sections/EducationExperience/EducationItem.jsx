import React from 'react';
import { motion } from 'framer-motion';

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const EducationItem = ({ logo, institution, degree, period, description }) => (
  <motion.div variants={timelineItemVariants} className="mb-12 flex items-start -ml-2">
    <div className="w-4 h-4 bg-purple-600 rounded-full absolute -left-2 " />
    <div className="flex-grow pl-10 md:pl-12">
      <div className="bg-[#1D042F] p-6 rounded-xl shadow-lg border border-purple-700 flex md:flex-nowrap flex-wrap items-start space-x-6 space-y-5">
        {logo && <img src={logo} alt={institution} className="w-20 h-20 object-contain rounded-lg bg-white p-2 flex-shrink-0" />}
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-1">{institution}</h4>
          <p className="text-lg text-gray-300 md:mb-1 mb-2">{degree}</p>
          <p className="text-md text-gray-400 md:mb-2 mb-3">{period}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default EducationItem;
