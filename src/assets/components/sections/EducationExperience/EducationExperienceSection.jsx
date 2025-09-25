'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';
import GradientCircle from '../../visuals/GradientCircle';

// Animasi fade-in + scale ringan
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Staggered container untuk Experience/Education
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const EducationExperienceSection = () => {
  const { t } = useTranslation('education-experience');

  // Gunakan useMemo untuk mencegah re-render
  const educationItems = useMemo(() => t('education', { returnObjects: true }), [t]);
  const experienceItems = useMemo(() => t('experience', { returnObjects: true }), [t]);
  const skills = useMemo(() => t('skills', { returnObjects: true }), [t]);

  return (
    <section id="education-experience-skills" className="relative z-10 px-6 md:px-16 lg:px-20 py-10 text-white font-poppins">
      {/* Gradient circles */}
      <GradientCircle
        size="w-[390px] h-[700px]"
        colors={['#A428FD', '#6401AC', '#3B0264']}
        opacity={0.25}
        blur="blur-2xl" // kurangi blur
        className="absolute top-0 right-[-15rem] will-change-transform"
        animationDuration={12}
      />
      <GradientCircle
        size="w-[390px] h-[580px]"
        colors={['#A428FD', '#6401AC', '#3B0264']}
        opacity={0.2}
        blur="blur-2xl"
        className="absolute bottom-[5rem] left-[15rem] will-change-transform"
        animationDuration={12}
      />

      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Experience */}
        <motion.h3 className="text-4xl md:text-5xl font-bold mb-8 text-left animated-gradient-text" variants={fadeInScale}>
          {t('experienceTitle')}
        </motion.h3>
        <motion.div className="relative border-l-2 border-gray-700 ml-6 md:ml-1 space-y-8" variants={containerVariants}>
          {experienceItems.map((item, index) => (
            <motion.div key={index} variants={fadeInScale}>
              <ExperienceItem {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.h3 className="text-4xl md:text-5xl font-bold my-8 text-left animated-gradient-text" variants={fadeInScale}>
          {t('educationTitle')}
        </motion.h3>
        <motion.div className="relative border-l-2 border-gray-700 ml-6 md:ml-1 space-y-8" variants={containerVariants}>
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={fadeInScale}>
              <EducationItem {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.h3 className="text-4xl md:text-5xl font-bold text-purple-500 mb-8 text-center" variants={fadeInScale}>
          {t('skillsTitle')}
        </motion.h3>
        <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-[#1D042F] rounded-lg shadow-md border border-purple-700 will-change-transform"
            >
              <SkillItem skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationExperienceSection;
