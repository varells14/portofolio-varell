import React from 'react';
import { motion } from 'framer-motion';
import GradientBackground from '../../visuals/GradientBackground';
import GradientCircle from '../../visuals/GradientCircle';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren', // Pastikan parent muncul dulu sebelum anak-anak
      staggerChildren: 0.1, // Jeda 0.1 detik antar setiap anak
      delayChildren: 0.2, // Delay 0.2 detik sebelum anak pertama muncul
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function TechStackSection() {
  // Array data untuk ikon dan teks, ini membuat kode lebih bersih dan mudah dikelola
  const techStackItems = [
    { src: './images/react.png', name: 'React' },
    { src: './images/nodejs.png', name: 'Node JS' },
    { src: './images/laravel.png', name: 'Laravel' },
    { src: './images/tailwind.png', name: 'Tailwind CSS' },
    { src: './images/php.png', name: 'PHP' },
    { src: './images/bootstrap.png', name: 'Bootstrap' },
    { src: './images/html.png', name: 'HTML5' },
    { src: './images/css.png', name: 'CSS3' },
    { src: './images/javascript.png', name: 'Javascript' },
    { src: './images/mysql.png', name: 'MySQL' },
    { src: './images/git.png', name: 'Git' },
    { src: './images/postman.png', name: 'Postman' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CPanel_logo.svg/2560px-CPanel_logo.svg.png', name: 'cPanel' },
    { src: './images/figma.png', name: 'Figma' },
    { src: './images/adobe illustrator.png', name: 'Adobe Illustrator' },
    { src: './images/vite.png', name: 'Vite' },
  ];

  return (
    // Membungkus seluruh section dengan motion.section untuk animasi on-scroll
    <motion.section
      id="tech"
      className="relative z-10 lg:px-20 md:px-16 px-10 py-15"
      variants={sectionVariants} // Gunakan variants yang didefinisikan
      initial="hidden" // Mulai dari state 'hidden'
      whileInView="visible" // Animasikan ke state 'visible' saat masuk viewport
      viewport={{ once: true, amount: 0.3 }} // Trigger sekali saat 30% elemen terlihat
    >
      <div className="text-center font-poppins">
        <motion.h1 // Animasi untuk h1 "Tech Stack"
          className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text"
          variants={textVariants}
        >
          Tech Stack
        </motion.h1>
        <motion.p // Animasi untuk paragraf deskripsi
          className="text-[20px] text-gray-100"
          variants={textVariants}
        >
          Our skills enable us to transform your ideas into an inspiring web project.
        </motion.p>
      </div>

      <div className="flex pt-8 flex-wrap justify-center ">
        <div className="grid md:grid-cols-5 grid-cols-2 space-x-3 space-y-4 justify-center items-center">
          {/* Mapping melalui array techStackItems untuk merender setiap ikon */}
          {techStackItems.map((item, index) => (
            <motion.div // Animasi untuk setiap item ikon
              key={item.name} // Key unik sangat penting saat mapping
              className="block text-center"
              variants={itemVariants}
            >
              <GradientBackground>
                <img src={item.src} className="w-28 h-28 p-5 rounded-xl bg-[#1D042F]" alt={item.name} />
              </GradientBackground>
              <p className="text-gray-300">{item.name}</p>
            </motion.div>
          ))}
          <p></p>
        </div>
      </div>
      <GradientCircle
        size="w-[390px] h-[700px]" // Ukuran lebih besar lagi
        colors={['#A428FD', '#6401AC', '#3B0264']} // Warna lebih terang
        opacity={0.3}
        blur="blur-3xl"
        className="absolute top-0 left-[-15rem]" // Posisikan di luar layar sedikit
        animationDuration={10}
      />
    </motion.section>
  );
}

export default TechStackSection;
