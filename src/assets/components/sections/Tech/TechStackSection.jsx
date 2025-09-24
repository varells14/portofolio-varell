import { motion } from 'framer-motion';
import GradientBackground from '../../visuals/GradientBackground';
import GradientCircle from '../../visuals/GradientCircle';
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function TechStackSection() {
  const { t } = useTranslation('techstack');

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

  return (
    <motion.section id="tech" className="relative z-10 lg:px-20 md:px-16 px-10 py-15" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className="text-center font-poppins">
        <motion.h1 className="md:text-[60px] text-[50px] font-bold text-purple-700 animated-gradient-text" variants={textVariants}>
          {t('header')}
        </motion.h1>
        <motion.p className="text-[20px] text-gray-100" variants={textVariants}>
          {t('paragraph')}
        </motion.p>
      </div>

      <div className="flex pt-8 flex-wrap justify-center ">
        <div className="grid md:grid-cols-5 grid-cols-2 space-x-3 space-y-4 justify-center items-center">
          {techStackItems.map((item, index) => (
            <motion.div key={item.name} className="block text-center" variants={itemVariants}>
              <GradientBackground>
                <img src={item.src} className="w-28 h-28 p-5 rounded-xl bg-[#1D042F]" alt={item.name} />
              </GradientBackground>
              <p className="text-gray-300">{item.name}</p>
            </motion.div>
          ))}
          <p></p>
        </div>
      </div>
      <GradientCircle size="w-[390px] h-[700px]" colors={['#A428FD', '#6401AC', '#3B0264']} opacity={0.3} blur="blur-3xl" className="absolute top-0 left-[-15rem]" animationDuration={10} />
    </motion.section>
  );
}

export default TechStackSection;
