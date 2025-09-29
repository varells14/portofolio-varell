'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from "@heroicons/react/24/outline";



const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } }
};

export default function CertificateModal({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-[#1a1a1a] rounded-2xl p-6 max-w-lg w-full shadow-2xl"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
      <button
  onClick={onClose}
  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-transform hover:scale-110"
>
  ✕
</button>




        {/* Content */}
        <div className="flex flex-col items-center">
          <img
            src={cert.image}
            alt={cert.title}
            className="rounded-lg max-h-80 mb-4 object-contain"
          />
          <h3 className="text-2xl font-bold text-purple-400">{cert.title}</h3>
          <p className="text-gray-300 mt-2">{cert.issuer} </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
