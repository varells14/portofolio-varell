'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TechStackSection() {
  const { t } = useTranslation('techstack');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Duplikasi 3x supaya seamless
  const marqueeItems = [...techStackItems, ...techStackItems, ...techStackItems];

  const duration = isMobile ? 15 : 30;

  return (
    <section id="tech" className="relative z-10 lg:px-20 md:px-16 px-10 py-15 overflow-hidden">
      <div className="text-center font-poppins mb-10">
        <h1 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text">
          {t('header')}
        </h1>
        <p className="text-[20px] text-gray-100">{t('paragraph')}</p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-4 md:space-x-6 marquee-container"
          style={{ width: 'max-content', animation: `marquee ${duration}s linear infinite` }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[5rem] md:min-w-[7rem] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-16 h-16 md:w-28 md:h-28 p-3 md:p-5 rounded-xl bg-[#1D042F]"
              />
              <p className="text-gray-300 mt-2 text-center text-xs md:text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
