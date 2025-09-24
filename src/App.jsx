import ScrollProgressBar from './assets/components/ui/ScrollProgressBar';
import './App.css';
import HeroSection from './assets/components/sections/Hero/HeroSection';
import Background from './assets/components/ui/BackGround';
import TechStackSection from './assets/components/sections/Tech/TechStackSection';
import ProjectsSection from './assets/components/sections/Projects/ProjectsSection';
import FloatingNavbar from './assets/components/ui/FloatingNavbar';
import AboutSection from './assets/components/sections/About/AboutSection';
import EducationExperienceSection from './assets/components/sections/EducationExperience/EducationExperienceSection';
import ContactSection from './assets/components/sections/Contact/ContactSection';

function App() {
  return (
    <div>
      <FloatingNavbar />
      <div className="relative min-h-screen overflow-hidden">
        <Background />
        <HeroSection />
        <AboutSection />
        <EducationExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollProgressBar />
    </div>
  );
}

export default App;
