'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import SkillItem from './SkillItem';

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
  const educationItems = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo_Universitas_Paramadna.png/1200px-Logo_Universitas_Paramadna.png',
      institution: 'Paramadina University',
      degree: 'S.Kom, Informatics Engineering',
      period: 'September 2021 - Sekarang',
      description: 'Fokus pada pengembangan perangkat lunak, algoritma, dan sistem informasi.',
    },
  ];

  const experienceItems = [
    {
      logo: './images/company-logo-1.png',
      company: 'PT. Teknologi Maju Bersama',
      position: 'Frontend Developer Intern',
      period: 'Juni 2024 - Agustus 2024',
      responsibilities: ['Mengembangkan dan memelihara UI dengan React.js dan Tailwind CSS.', 'Berpartisipasi dalam code review dan debugging.', 'Kolaborasi dengan tim backend untuk integrasi REST API.'],
    },
    {
      logo: './images/company-logo-2.png',
      company: 'Freelance Web Designer',
      position: 'Self-Employed',
      period: 'Januari 2023 - Sekarang',
      responsibilities: ['Merancang situs web responsif untuk klien UMKM.', 'Mengelola proyek dari konsep awal hingga peluncuran.'],
    },
  ];

  const skills = ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Project Management Basics', 'UI/UX Principles', 'Clean Code', 'Debugging'];

  return (
    <section id="education-experience-skills" className="relative z-10 px-10 md:px-16 lg:px-20 py-20 text-white font-poppins">
      <motion.div className="max-w-6xl mx-auto" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {/* Pendidikan */}
        <div className="mb-20">
          <motion.h3 className="text-4xl md:text-5xl font-bold text-purple-500 mb-10 text-center md:text-left" variants={subHeadingVariants}>
            Education
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
            Experience
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
            Skills
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
