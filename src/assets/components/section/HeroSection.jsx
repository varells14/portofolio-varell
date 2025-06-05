// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Magnet from '../Magnet';
import TiltedCard from '../TiltedCard';
import GradientCircle from '../GradientCircle';

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
  return (
    <div className="relative z-10 lg:px-20 md:px-16 px-10 py-20">
      <section className="flex flex-wrap-reverse md:flex-nowrap w-full">
        <motion.div className="md:w-1/2 w-full md:pt-0 pt-10 font-poppins" variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p className="md:text-[40px] text-[25px] text-gray-300 font-bold" variants={fadeInUpVariants}>
            I am Ichram
          </motion.p>
          <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
            FullStack Web
          </motion.h1>
          <motion.h1 className="md:text-[75px] text-[55px] text-purple-700 leading-[90px] font-bold animated-gradient-text" variants={fadeInUpVariants}>
            Developer
          </motion.h1>
          <motion.p className="text-gray-200 pt-7 pr-5 text-[20px] pb-10" variants={fadeInUpVariants}>
            With creativity and deep analysis, I solve user experience challenges, creating solutions that connect people worldwide with integrity.
          </motion.p>
          <Magnet disabled={false}>
            <motion.a href="#" className="px-4 py-2 rounded-full bg-transparent font-bold transition-all border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white" variants={fadeInUpVariants}>
              Download CV <i className="fas fa-download pl-2 "></i>
            </motion.a>
          </Magnet>
        </motion.div>

        <motion.div className="md:w-1/2 flex justify-center items-center w-full " variants={fadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <TiltedCard
            imageSrc="./images/iam.jpeg"
            altText="My Foto"
            captionText="Ichramsyah"
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={18}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className=" bg-gradient-to-r from-purple-600 to-purple-800 rounded-sm py-1 px-3">
                <p className="text-white font-bold font-poppins">Photo</p>
                <div className="absolute w-full left-32 top-35 ">
                  <p className="text-white italic">Hover me</p>
                </div>
              </div>
            }
          />
        </motion.div>
      </section>
      <GradientCircle
        size="w-[600px] h-[600px]" // Ukuran lebih besar lagi
        colors={['#A428FD', '#6401AC', '#3B0264']} // Warna lebih terang
        opacity={0.3}
        blur="blur-3xl"
        className="absolute top-[-17rem] right-[-17rem]" // Posisikan di luar layar sedikit
        animationDuration={10}
      />
    </div>
  );
}

export default HeroSection;
