'use client';

import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectsSection = () => {
  const { t } = useTranslation('projects');
  const [activeCategory, setActiveCategory] = useState('all');
  const carouselRef = useRef(null);

  const allProjects = useMemo(
    () => [
      {
        id: 'procurement',
        imageSrc: './images/project1.webp',
        techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
        liveSiteLink: 'https://app.logisteed.id/login',
        category: 'fullstack',
      },
      {
        id: 'inventory',
        imageSrc: './images/project2.webp',
        techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
        liveSiteLink: 'https://maestroapps.my.id/login',
        category: 'fullstack',
      },
      {
        id: 'quotation',
        imageSrc: './images/project3.webp',
        techIcons: ['./images/php.png', './images/laravel.png', './images/tailwind.png', './images/javascript.png', './images/mysql.png', './images/cpanel.png'],
        liveSiteLink: 'https://quot.logisteed.id/login',
        category: 'fullstack',
      },
    ],
    []
  );

  const filteredProjects = useMemo(
    () => (activeCategory === 'all' ? allProjects : allProjects.filter((p) => p.category === activeCategory)),
    [activeCategory, allProjects]
  );

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 16; // margin gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 16;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative z-10 lg:px-20 md:px-16 px-10 py-15">
      <div className="max-w-7xl mx-auto font-poppins text-center">
        <h1 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text mb-4">
          {t('title')}
        </h1>
        <p className="text-[20px] text-gray-100 mb-8 max-w-2xl mx-auto">{t('description')}</p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${activeCategory === 'all' ? 'bg-purple-700 text-white shadow-md' : 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'}`}
          >
            {t('categories.all')}
          </button>
        </div>

        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-full shadow-md hidden md:flex"
          >
            <FaArrowLeft />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 scroll-smooth pb-4 md:pb-0 no-scrollbar"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[90%] md:w-[45%] snap-start"
              >
                <ProjectCard
                  project={{
                    ...project,
                    title: t(`projects_content.${project.id}.title`),
                    description: t(`projects_content.${project.id}.description`),
                  }}
                />
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-full shadow-md hidden md:flex"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
