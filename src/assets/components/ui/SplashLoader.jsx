"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, User, Globe } from "lucide-react"; 
import { FaReact } from "react-icons/fa";

export default function SplashLoader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish && onFinish();
    }, 5000); // total durasi splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  // Variants untuk animasi
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.5, duration: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0a0015] via-[#100024] to-[#1a0038] z-[9999] flex flex-col items-center justify-center"
    >
      {/* ICONS */}
      <div className="flex space-x-6 mb-6">
        {[Code2, User, FaReact].map((Icon, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1f0035] shadow-lg"
            style={{
              boxShadow: "0 0 20px rgba(140, 90, 255, 0.6)",
            }}
          >
            <Icon className="text-purple-300" size={26} />
          </motion.div>
        ))}
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center">
        {["Welcome To My", "Portfolio Website"].map((line, i) => (
          <motion.h1
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`text-3xl md:text-5xl text-center ${
              i === 1
                ? "text-purple-700 leading-[90px] font-bold animated-gradient-text"
                : "text-gray-200 font-bold"
            }`}
          >
            {line}
          </motion.h1>
        ))}

        {/* URL */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 flex items-center space-x-2 text-purple-300"
        >
          <Globe size={18} />
          <span className="text-lg">Varell</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
