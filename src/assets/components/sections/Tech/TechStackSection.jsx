'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import GradientBackground from '../../visuals/GradientBackground';
import GradientCircle from '../../visuals/GradientCircle';
import { useTranslation } from 'react-i18next';

function TechStackSection() {
  const { t } = useTranslation('techstack');
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const controls = useAnimation();

  const techStackItems = [
    { src: './images/react.png', name: 'React' },
    { src: './images/nodejs.png', name: 'Node JS' },
    { src: './images/laravel.png', name: 'Laravel' },
    { src: './images/tailwind.png', name: 'Tailwind CSS' },
    { src: './images/php.png', name: 'PHP' },
    { src: './images/bootstrap.png', name: 'Bootstrap' },
    { src: './images/html.png', name: 'HTML5' },
    { src: './images/css.png', name: 'CSS3' },
    { src: './images/javascript.png', name: 'Javascript' },
    { src: './images/mysql.png', name: 'MySQL' },
    { src: './images/git.png', name: 'Git' },
    { src: './images/postman.png', name: 'Postman' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CPanel_logo.svg/2560px-CPanel_logo.svg.png', name: 'cPanel' },
    { src: './images/figma.png', name: 'Figma' },
    { src: './images/vite.png', name: 'Vite' },
  ];

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hitung lebar container untuk marquee
  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2); // duplikasi
    }
  }, [containerRef, isMobile]);

  // Infinite scroll animation
  useEffect(() => {
    if (scrollWidth > 0) {
      controls.start({
        x: [-0, -scrollWidth],
        transition: {
          repeat: Infinity,
          duration: isMobile ? 12 : 20,
          ease: 'linear',
        },
      });
    }
  }, [scrollWidth, isMobile, controls]);

  // Duplikasi array untuk marquee
  const marqueeItems = [...techStackItems, ...techStackItems];

  return (
    <section id="tech" className="relative z-10 lg:px-20 md:px-16 px-10 py-15 overflow-hidden">
      {/* Header */}
      <div className="text-center font-poppins mb-10">
        <h1 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text">
          {t('header')}
        </h1>
        <p className="text-[20px] text-gray-100">{t('paragraph')}</p>
      </div>

      {/* Horizontal scroll container */}
      <div className="w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex space-x-4 md:space-x-6"
          animate={controls}
          style={{ display: 'flex' }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center min-w-[5rem] ${
                isMobile ? 'md:min-w-[6rem]' : 'md:min-w-[7rem]'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GradientBackground>
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-16 h-16 md:w-28 md:h-28 p-3 md:p-5 rounded-xl bg-[#1D042F]"
                />
              </GradientBackground>
              <p className="text-gray-300 mt-2 text-center text-xs md:text-sm">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Gradient Circle */}
      <GradientCircle
        size="w-[390px] h-[700px]"
        colors={['#A428FD', '#6401AC', '#3B0264']}
        opacity={0.3}
        blur="blur-3xl"
        className="absolute top-0 left-[-15rem]"
        animationDuration={10}
      />
    </section>
  );
}

export default TechStackSection;
