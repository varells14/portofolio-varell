'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection = () => {
  const { t } = useTranslation('about');
  return (
    <section id="about" className="relative z-10 lg:px-20 md:px-16 px-0 py-15 text-white font-poppins">
      <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className=" w-full text-center ">
          <motion.h2 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text mb-6" variants={textVariants}>
            {t('title')}
          </motion.h2>
          <motion.p className="md:text-[20px] px-10 md:px-20 text-[17px] text-gray-300 leading-relaxed mb-4" variants={textVariants}>
            {t('paragraph')}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
