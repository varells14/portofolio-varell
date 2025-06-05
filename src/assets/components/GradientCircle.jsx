import React from 'react';
import { motion } from 'framer-motion';

const GradientCircle = ({
  size = 'w-48 h-48', // Ukuran default lingkaran (misal: w-48 h-48 untuk 192px x 192px)
  colors = ['#8F87F1', '#E9A5F1', '#FED2E2'], // Warna-warna untuk gradien radial (dari tengah ke luar)
  animationDuration = 2, // Durasi satu siklus animasi dalam detik
  opacity = 0.3, // Opasitas lingkaran (agar tidak terlalu dominan jika sebagai background)
  blur = 'blur3xl', // Tingkat blur (misal: blur-none, blur-sm, blur-md, blur-lg, blur-xl, blur-2xl, blur-3xl)
  className = '', // Kelas Tailwind tambahan untuk posisi (misal: 'absolute top-10 left-20')
}) => {
  return (
    <motion.div
      className={`rounded-full ${size} ${blur} ${className} z-[-1] overflow-hidden`}
      style={{
        background: `radial-gradient(circle at center, ${colors.join(', ')})`,
        opacity: opacity,
        // backgroundSize: '200% 200%', // Opsional: Jika ingin menggeser gradien di dalam lingkaran
      }}
      // Animasi subtle:
      // scale: Membuat lingkaran sedikit membesar dan mengecil (efek 'bernapas')
      // rotate: Membuat lingkaran berputar perlahan
      animate={{
        // backgroundPosition: ['0% 0%', '100% 100%'], // Uncomment jika ingin animasi posisi gradien
        scale: [1, 1.05, 1], // Animasi membesar-mengecil
        rotate: 360, // Animasi berputar
      }}
      transition={{
        ease: 'linear',
        duration: animationDuration,
        repeat: Infinity,
        repeatType: 'loop', // Mengulang dari awal (untuk rotate)
      }}
    />
  );
};

export default GradientCircle;
