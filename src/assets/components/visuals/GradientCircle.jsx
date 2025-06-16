import { motion } from 'framer-motion';

const GradientCircle = ({
  size = 'w-48 h-48',
  colors = ['#8F87F1', '#E9A5F1', '#FED2E2'],
  animationDuration = 2,
  opacity = 0.3, //
  blur = 'blur3xl',
  className = '',
}) => {
  return (
    <motion.div
      className={`rounded-full ${size} ${blur} ${className} z-[-1] overflow-hidden`}
      style={{
        background: `radial-gradient(circle at center, ${colors.join(', ')})`,
        opacity: opacity,
        backgroundSize: '200% 200%',
      }}
      animate={{
        scale: [1, 1.05, 1],
        rotate: 360,
      }}
      transition={{
        ease: 'linear',
        duration: animationDuration,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

export default GradientCircle;
