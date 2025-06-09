'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';

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
    <section id="education-experience-skills" className="relative z-10 px-10 md:px-16 lg:px-20 py-20 text-white font-poppins">
      <motion.div className="max-w-6xl mx-auto" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {/* Pendidikan */}
        <div className="mb-20">
          <motion.h3 className="text-4xl md:text-5xl font-bold text-purple-500 mb-10 text-center md:text-left" variants={subHeadingVariants}>
            {t('educationTitle')}
          </motion.h3>
          <div className="relative border-l-2 border-gray-700 ml-6 md:ml-1">
            {educationItems.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Pengalaman */}
        <div className="mb-20">
          <motion.h3 className="text-4xl md:text-5xl font-bold text-purple-500 mb-10 text-center md:text-left" variants={subHeadingVariants}>
            {t('experienceTitle')}
          </motion.h3>
          <div className="relative border-l-2 border-gray-700 ml-6 md:ml-1">
            {experienceItems.map((item, index) => (
              <ExperienceItem key={index} {...item} />
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
      </motion.div>
    </section>
  );
};

export default EducationExperienceSection;
