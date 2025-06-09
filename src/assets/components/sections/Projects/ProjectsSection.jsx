// src/components/section/ProjectsSection.jsx
'use client'; // Penting untuk Next.js App Router

import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import ProjectCard from './ProjectCard';
import GradientCircle from '../../visuals/GradientCircle';
import { useTranslation } from 'react-i18next';

// Variasi animasi untuk judul section
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeOut' } },
};

// Variants untuk container kartu proyek agar ada stagger effect
// Disesuaikan agar lebih cepat saat kategori berubah, karena ini akan dipicu ulang
const projectsGridVariants = {
  hidden: { opacity: 0, y: 20 }, // Sedikit efek y saat muncul
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Jeda antar kartu sedikit lebih cepat
      delayChildren: 0.1, // Delay sebelum kartu pertama muncul sedikit lebih cepat
    },
  },
};

const categoryButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ProjectsSection() {
  const { t } = useTranslation('projects');

  // State untuk menyimpan kategori yang sedang aktif. Defaultnya 'all'
  const [activeCategory, setActiveCategory] = useState('all');

  // **PENTING: Pastikan setiap proyek memiliki properti 'category'**
  const allProjects = [
    {
      id: 'rinema', // gunanya jadi key untuk i18n
      imageSrc: './images/project1.png',
      date: 'February 2025',
      techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
      githubLink: 'https://github.com/ichramsyah/rinema-fullstack-webapp',
      liveSiteLink: 'https://rinemaa.paramadina.ac.id/',
      category: 'application',
    },
    {
      id: 'filmPage',
      imageSrc: './images/project2.png',
      date: 'April 2025',
      techIcons: ['./images/react.png', './images/tailwind.png'],
      githubLink: 'https://github.com/ichramsyah/rinema-fullstack-webapp',
      liveSiteLink: 'https://rinemaa.paramadina.ac.id/',
      category: 'application',
    },
    {
      id: 'cafeDesign',
      imageSrc: './images/design-project.png',
      date: 'March 2024',
      techIcons: ['./images/figma.png', './images/adobe illustrator.png'],
      githubLink: '',
      liveSiteLink: '',
      category: 'other',
    },
  ];

  // Fungsi untuk mengelola klik kategori
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(`Kategori diubah menjadi: ${category}`); // Debug: Konfirmasi perubahan kategori
  };

  // Filter proyek berdasarkan kategori aktif
  const filteredProjects =
    activeCategory === 'all'
      ? allProjects
      : allProjects.filter((project) => {
          // Debug: Cek apakah kategori proyek cocok dengan kategori aktif
          // console.log(`Proyek "${project.title}" (${project.category}) vs Aktif (${activeCategory}): ${project.category === activeCategory}`);
          return project.category === activeCategory;
        });

  // Debug: Cek jumlah proyek yang difilter
  useEffect(() => {
    console.log('Proyek yang difilter:', filteredProjects);
    console.log('Jumlah proyek yang difilter:', filteredProjects.length);
  }, [filteredProjects]); // Efek ini berjalan setiap kali filteredProjects berubah

  return (
    <motion.section
      id="projects"
      className="relative z-10 lg:px-20 md:px-16 px-10 py-15"
      initial="hidden" // State awal untuk seluruh section
      whileInView="visible" // Animasikan saat masuk viewport
      viewport={{ once: true, amount: 0.2 }} // Trigger sekali saat 20% terlihat
    >
      <div className="font-poppins text-center">
        <motion.h1
          className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text mb-4"
          variants={headingVariants} // Animasi untuk judul "Projects"
        >
          {t('title')}
        </motion.h1>
        <motion.div
          variants={headingVariants} // Animasi untuk paragraf deskripsi
        >
          <p className="text-[20px] text-gray-100 mb-8 max-w-2xl mx-auto"> {t('description')} </p>

          {/* --- Tombol Kategori --- */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={categoryButtonVariants}>
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === 'all' ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'}`}
            >
              {t('categories.all')}
            </button>
            <button
              onClick={() => handleCategoryClick('application')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === 'application' ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'}`}
            >
              {t('categories.application')}
            </button>
            <button
              onClick={() => handleCategoryClick('other')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === 'other' ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'}`}
            >
              {t('categories.other')}
            </button>
          </motion.div>
        </motion.div>

        {/* --- Grid Proyek --- */}
        <AnimatePresence mode="wait">
          {' '}
          {/* Gunakan AnimatePresence dengan mode="wait" */}
          <motion.div
            key={activeCategory} // **Ini sangat penting untuk merestart animasi stagger**
            className="flex flex-wrap justify-center"
            variants={projectsGridVariants}
            initial="hidden" // Selalu mulai dari hidden saat key berubah
            animate="visible" // Animasikan ke visible
            exit="hidden" // Animasikan ke hidden saat keluar
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-5">
              {' '}
              {/* Tambah gap-8 dan sesuaikan pt-5 */}
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  // Gunakan key yang unik dan stabil. project.title lebih baik dari index.
                  // Jika project.title tidak unik, tambahkan id unik ke setiap proyek.
                  <ProjectCard
                    key={project.id}
                    project={{
                      ...project,
                      title: t(`projects_content.${project.id}.title`),
                      description: t(`projects_content.${project.id}.description`),
                    }}
                  />
                ))
              ) : (
                <motion.p
                  key="no-projects-message" // Key unik untuk pesan ini
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-400 text-lg col-span-full py-10" // Tambah py-10 untuk jarak
                >
                  No projects found in this category.
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <GradientCircle size="w-[520px] h-[520px]" colors={['#A428FD', '#6401AC', '#3B0264']} opacity={0.3} blur="blur-3xl" className="absolute top-[-10rem] md:right-[-4rem] right-[-15rem]" animationDuration={10} />
    </motion.section>
  );
}

export default ProjectsSection;
