'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';
import GradientCircle from '../../visuals/GradientCircle';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const EducationExperienceSection = () => {
  const { t } = useTranslation('education-experience');
  const educationItems = t('education', { returnObjects: true });
  const experienceItems = t('experience', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });

  return (
    <section id="education-experience-skills" className="relative z-10 px-10 md:px-16 lg:px-20 py-10 text-white font-poppins">
      <motion.div className="max-w-6xl mx-auto" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {/* Pendidikan */}
        
        <GradientCircle size="w-[390px] h-[700px]" colors={['#A428FD', '#6401AC', '#3B0264']} opacity={0.3} blur="blur-3xl" className="absolute top-0 right-[-15rem]" animationDuration={10} />

        {/* Pengalaman */}
        <div className="mb-20">
          <motion.h3 className="text-5xl md:text-5xl font-bold mb-10 text-left animated-gradient-text" variants={subHeadingVariants}>
            {t('experienceTitle')}
          </motion.h3>
          <div className="relative border-l-2 border-gray-700 ml-6 md:ml-1">
            {experienceItems.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
        
        <div className="mb-20">
          <motion.h3 className="text-5xl md:text-5xl font-bold mb-10 text-left animated-gradient-text" variants={subHeadingVariants}>
            {t('educationTitle')}
          </motion.h3>
          <div className="relative border-l-2 border-gray-700 ml-6 md:ml-1">
            {educationItems.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Keahlian */}
        <div>
          <motion.h3 className="text-4xl md:text-5xl font-bold text-purple-500 mb-8 text-center" variants={subHeadingVariants}>
            {t('skillsTitle')}
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
        <GradientCircle
          size="w-[390px] h-[580px]" // Ukuran lebih besar lagi
          colors={['#A428FD', '#6401AC', '#3B0264']} // Warna lebih terang
          opacity={0.3}
          blur="blur-3xl"
          className="absolute bottom-[5rem] left-[15rem]" // Posisikan di luar layar sedikit
          animationDuration={10}
        />
      </motion.div>
    </section>
  );
};

export default EducationExperienceSection;
