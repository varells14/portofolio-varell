// ProjectCard.jsx
import { motion } from 'framer-motion';
import SpotlightCard from '../../visuals/SpotlightCard';

const projectCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ProjectCard({ project }) {
  return (
    <motion.div variants={projectCardVariants} className="will-change-transform">
      <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.15)" className="bg-[#1D042F] rounded-2xl">
        <img src={project.imageSrc} className="md:p-8 p-6 pb-6 w-full h-auto rounded-[20px] object-cover" alt={project.title} />
        <h1 className="text-purple-500 font-bold md:text-3xl text-2xl md:px-8 px-6">{project.title}</h1>
        <p className="text-gray-200 text-sm pt-3 md:px-8 px-6">{project.description}</p>
        <div className="flex md:flex-nowrap flex-wrap md:px-8 px-6 pt-8 justify-between pb-7">
          <div className="flex gap-2">
            {project.techIcons.map((iconSrc, index) => (
              <img key={index} src={iconSrc} className="w-7 h-7" alt={`Tech icon ${index}`} />
            ))}
          </div>
          <div className="flex items-center space-x-5 md:mt-0 mt-8">
            {project.liveSiteLink && (
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all text-2xl"
              >
                <i className="fas fa-arrow-right text-purple-600" />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default ProjectCard;
