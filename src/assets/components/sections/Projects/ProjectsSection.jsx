'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import GradientCircle from '../../visuals/GradientCircle';
import { useTranslation } from 'react-i18next';

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: 'easeOut' } },
};

const projectsGridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ProjectsSection() {
  const { t } = useTranslation('projects');
  const [activeCategory, setActiveCategory] = useState('all');

  const allProjects = [
    {
      id: 'rinema',
      imageSrc: './images/project1.webp',
      
      techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
     
      liveSiteLink: 'https://app.logisteed.id/login',
      category: 'fullstack',
    },
    {
      id: 'filmPage',
      imageSrc: './images/project2.webp',
      
      techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
      
      liveSiteLink: 'https://maestroapps.my.id/login',
      category: 'fullstack',
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = activeCategory === 'all' ? allProjects : allProjects.filter((project) => project.category === activeCategory);

  return (
    <motion.section id="projects" className="relative z-10 lg:px-20 md:px-16 px-10 py-15" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="max-w-7xl mx-auto font-poppins text-center">
        <motion.h1 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text mb-4" variants={headingVariants}>
          {t('title')}
        </motion.h1>
        <motion.div variants={headingVariants}>
          <p className="text-[20px] text-gray-100 mb-8 max-w-2xl mx-auto"> {t('description')} </p>

          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={categoryButtonVariants}>
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === 'all' ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'}`}
            >
              {t('categories.all')}
            </button>
            
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} className="flex flex-wrap justify-center" variants={projectsGridVariants} initial="hidden" animate="visible" exit="hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
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
                <motion.p key="no-projects-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-400 text-lg col-span-full py-10">
                  No projects found in this category.
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <GradientCircle size="w-[520px] h-[520px]" colors={['#A428FD', '#6401AC', '#3B0264']} opacity={0.3} blur="blur-3xl" className="absolute top-[-10rem] right-[-10rem]" animationDuration={10} />
    </motion.section>
  );
}

export default ProjectsSection;
