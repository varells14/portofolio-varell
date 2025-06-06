import React from 'react';
import { motion } from 'framer-motion'; // Untuk animasi Framer Motion
import ProjectCard from '../ProjectCard';
import GradientCircle from '../GradientCircle';

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeOut' } },
};

// Variants untuk container kartu proyek agar ada stagger effect
const projectsGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Jeda 0.2 detik antar setiap kartu
      delayChildren: 0.9, // Delay 0.3 detik sebelum kartu pertama muncul
    },
  },
};

function ProjectsSection() {
  const projects = [
    {
      imageSrc: './images/project1.png',
      title: 'Rinema Web App',
      description: 'Digital platform dedicated to celebrating and exploring Indonesian cinema. Designed to build a passionate community of film lovers',
      date: 'February 2025',
      techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
      githubLink: 'https://github.com/ichramsyah/rinema-fullstack-webapp',
      liveSiteLink: 'https://rinemaa.paramadina.ac.id/',
    },
    {
      imageSrc: './images/project1.png',
      title: 'Rebuild Film Page Rinema',
      description: 'Digital platform dedicated to celebrating and exploring Indonesian cinema. Designed to build a passionate community of film lovers',
      date: 'April 2025',
      techIcons: ['./images/react.png', './images/tailwind.png'],
      githubLink: 'https://github.com/ichramsyah/rinema-fullstack-webapp', // Perhatikan jika link github sama
      liveSiteLink: 'https://rinemaa.paramadina.ac.id/', // Perhatikan jika link live site sama
    },
    // Tambahkan proyek lain di sini jika ada
  ];

  return (
    <motion.section
      className="relative z-10 lg:px-20 md:px-16 px-10 py-15"
      initial="hidden" // State awal untuk seluruh section
      whileInView="visible" // Animasikan saat masuk viewport
      viewport={{ once: true, amount: 0.2 }} // Trigger sekali saat 20% terlihat
    >
      <div className="font-poppins">
        <motion.h1
          className="text-center md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text"
          variants={headingVariants} // Animasi untuk judul "Projects"
        >
          Projects
        </motion.h1>
        <motion.div
          className="flex justify-center"
          variants={headingVariants} // Animasi untuk paragraf deskripsi
        >
          <p className="text-[20px] text-gray-100">Our skills enable us to transform your ideas into an inspiring web project.</p>
        </motion.div>

        <motion.div
          className="flex pt-8 flex-wrap justify-center"
          variants={projectsGridVariants} // Animasi stagger untuk grid kartu proyek
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} /> // Render ProjectCard untuk setiap proyek
            ))}
          </div>
        </motion.div>
        <GradientCircle
          size="w-[520px] h-[520px]" // Ukuran lebih besar lagi
          colors={['#A428FD', '#6401AC', '#3B0264']} // Warna lebih terang
          opacity={0.3}
          blur="blur-3xl"
          className="absolute top-[-10rem] md:right-[-4rem] right-[-15rem]" // Posisikan di luar layar sedikit
          animationDuration={10}
        />
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
