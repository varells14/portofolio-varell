import ScrollProgressBar from './assets/components/ScrollProgressBar';
import './App.css';
import HeroSection from './assets/components/section/HeroSection';
import Background from './assets/components/BackGround';
import GradientBackground from './assets/components/GradientBackground';
import TechStackSection from './assets/components/section/TechStackSection';
import SpotlightCard from './assets/components/SpotlightCard';
import ProjectsSection from './assets/components/section/ProjectsSection';

function App() {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        <Background />
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
      </div>
      <ScrollProgressBar />
    </div>
  );
}

export default App;
