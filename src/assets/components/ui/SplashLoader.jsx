import { motion } from "framer-motion";

export default function SplashLoader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-40 h-40"
      >
        {/* Path huruf V */}
        <motion.path
          d="M40 20 L100 180 L160 20"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c00d4" />
            <stop offset="50%" stopColor="#c272fc" />
            <stop offset="100%" stopColor="#6c00f1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}
