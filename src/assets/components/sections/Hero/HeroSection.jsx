'use client';

import { motion } from 'framer-motion';
import TiltedCard from '../../visuals/TiltedCard';
import GradientCircle from '../../visuals/GradientCircle';
import { useTranslation } from 'react-i18next';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

function HeroSection() {
  const { t } = useTranslation('hero');

  return (
    <section id="home" className="relative z-10 lg:px-20 md:px-16 px-10 py-20 pt-25">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap-reverse md:flex-nowrap w-full">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 w-full md:pt-0 pt-10 font-poppins will-change-transform"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div id="home-text"></div>
            <motion.p className="md:text-[40px] text-[25px] text-gray-300 font-bold" variants={fadeInUpVariants}>
              {t('greet')}
            </motion.p>
            <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
              FullStack Web
            </motion.h1>
            <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
              Developer
            </motion.h1>
            <motion.p className="text-gray-200 pt-7 pr-5 text-[20px] pb-10" variants={fadeInUpVariants}>
              {t('paragraph')}
            </motion.p>
            <motion.a
              href="/images/varell.pdf"
              download="varell.pdf"
              className="px-4 py-2 rounded-full bg-transparent font-bold transition-all border-2 border-purple-700 text-white hover:bg-purple-700 hover:text-white"
              variants={fadeInUpVariants}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Card Section */}
          <motion.div
            className="md:w-1/2 flex justify-center items-center w-full will-change-transform"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <TiltedCard
              imageSrc="./images/iam.jpeg"
              altText="My Foto"
              captionText="Va.rells"
              containerHeight="390px"
              containerWidth="390px"
              imageHeight="350px"
              imageWidth="320px"
              rotateAmplitude={12} // kurangi rotasi
              scaleOnHover={1.05}  // kurangi scale hover
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<div className="relative w-full h-full"></div>}
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient Circle */}
      <GradientCircle
        size="w-[600px] h-[600px]"
        colors={['#A428FD', '#6401AC', '#3B0264']}
        opacity={0.25}
        blur="blur-2xl"
        className="absolute top-[-17rem] right-[-17rem] will-change-transform"
        animationDuration={10}
      />
    </section>
  );
}

export default HeroSection;
