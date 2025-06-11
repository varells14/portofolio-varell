// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Magnet from '../../visuals/Magnet';
import TiltedCard from '../../visuals/TiltedCard';
import GradientCircle from '../../visuals/GradientCircle';
import { FiSend } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

// ... (kode varian animasi Anda tidak perlu diubah)
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

function HeroSection() {
  const { t } = useTranslation('hero');

  return (
    <section id="home" className="relative z-10 lg:px-20 md:px-16 px-10 py-20 pt-25">
      {/* --- KONTAINER PEMBATAS DITAMBAHKAN DI SINI --- */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap-reverse md:flex-nowrap w-full">
          {/* Konten kolom kiri (teks) */}
          <motion.div className="md:w-1/2 w-full md:pt-0 pt-10 font-poppins" variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <motion.p className="md:text-[40px] text-[25px] text-gray-300 font-bold" variants={fadeInUpVariants}>
              {t('greet')}
            </motion.p>
            <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
              Syelamat siang
            </motion.h1>
            <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
              Developer
            </motion.h1>
            <motion.p className="text-gray-200 pt-7 pr-5 text-[20px] pb-10" variants={fadeInUpVariants}>
              {t('paragraph')}
            </motion.p>
            <Magnet disabled={false}>
              <motion.a href="#" className="px-4 py-2 rounded-full bg-transparent font-bold transition-all border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white" variants={fadeInUpVariants}>
                Download CV <i className="fas fa-download pl-2 "></i>
              </motion.a>
            </Magnet>
          </motion.div>

          {/* Konten kolom kanan (gambar) */}
          <motion.div className="md:w-1/2 flex justify-center items-center w-full " variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <TiltedCard
              imageSrc="./images/iam.jpeg"
              altText="My Foto"
              captionText="Ichramsyah"
              containerHeight="390px"
              containerWidth="390px"
              imageHeight="350px"
              imageWidth="320px"
              rotateAmplitude={18}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="relative w-full h-full">
                  <div className="flex items-center bg-white w-[20rem] justify-between rounded-t-xl py-2 pl-3 pr-5">
                    <div className="flex items-center">
                      <img src="/images/ig-profile.JPG" className="rounded-full w-7 h-7" alt="" />
                      <a href="https://instagram.com/ichramabdr" target="_blank" rel="noreferrer" className="font-bold text-[14px] pl-2">
                        Ichramabdr
                      </a>
                    </div>
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                  <div className="absolute top-[20rem] bg-white rounded-b-xl w-[20rem]">
                    <div className="py-2 px-3 flex item-center gap-3">
                      <i className="far fa-heart hover:text-red-500 text-[18px]"></i>
                      <i className="far fa-comment hover:text-gray-500 text-[18px]"></i>
                      <FiSend className="hover:text-yellow-500" size={18} />
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>

      <GradientCircle size="w-[600px] h-[600px]" colors={['#A428FD', '#6401AC', '#3B0264']} opacity={0.3} blur="blur-3xl" className="absolute top-[-17rem] right-[-17rem]" animationDuration={10} />
    </section>
  );
}

export default HeroSection;
