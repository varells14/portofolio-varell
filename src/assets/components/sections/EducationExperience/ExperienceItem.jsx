import React from 'react';
import { motion } from 'framer-motion';

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const ExperienceItem = ({ logo, position, company, period, responsibilities }) => (
  <motion.div variants={timelineItemVariants} className="mb-12 flex items-start -ml-2">
    <div className="w-4 h-4 bg-purple-600 rounded-full absolute -left-2 " />
    <div className="flex-grow pl-10 md:pl-12">
      <div className="bg-[#1D042F] p-6 rounded-xl shadow-lg border border-purple-700 flex md:flex-nowrap flex-wrap items-start space-x-6 space-y-5">
        {logo && <img src={logo} alt={company} className="w-20 h-20 object-contain rounded-lg bg-white  flex-shrink-0" />}
        <div>
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{position}</h4>
          <p className="text-lg text-gray-300 mb-1">{company}</p>
          <p className="text-md text-gray-400 mb-2">{period}</p>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-1">
            {responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ExperienceItem;
