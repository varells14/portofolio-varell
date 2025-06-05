import React from 'react';
import { motion } from 'framer-motion';

// Komponen untuk membungkus gambar dengan animasi gradient background DAN efek hover
const GradientBackground = ({ children, backgroundColor = '#1B0930', gradientColors = [''], animationDuration = 6, className = '' }) => {
  return (
    // Menggunakan motion.div di sini agar kita bisa menerapkan efek hover.
    // Efek hover akan diterapkan pada seluruh kotak yang berisi gambar dan background animasinya.
    <motion.div
      className={`relative p-1 rounded-xl overflow-hidden ${className}`}
      // Efek Hover yang Powerful:
      whileHover={{
        scale: 1.08, // Memperbesar elemen hingga 108% dari ukuran aslinya
        y: -10, // Menggeser elemen ke atas sebanyak 10px
        boxShadow: '0 15px 20px rgb(62, 0, 106), 0 0 15px rgb(225, 225, 225)', // Menambahkan bayangan yang lebih gelap dan glow putih tipis
        transition: {
          type: 'spring', // Menggunakan tipe animasi "spring" untuk efek yang lebih alami dan 'memantul'
          stiffness: 400, // Kekakuan pegas (semakin tinggi, semakin cepat respons)
          damping: 15, // Redaman pegas (semakin tinggi, semakin sedikit 'pantulan')
          duration: 0.3, // Durasi transisi hover yang cepat
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
        // Properti animate untuk background gradient
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        // Transisi untuk background gradient (terpisah dari transisi hover)
        transition={{ ease: 'linear', duration: animationDuration, repeat: Infinity }}
      />

      {/* Konten utama (gambar Anda) yang akan berada di atas background animasi */}
      <div className="relative z-10 flex items-center justify-center w-full h-full rounded-xl bg-transparent ">{children}</div>
    </motion.div>
  );
};

export default GradientBackground;
