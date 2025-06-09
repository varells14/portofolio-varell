import ScrollProgressBar from './assets/components/ScrollProgressBar';
import './App.css';
import HeroSection from './assets/components/section/HeroSection';
import Background from './assets/components/BackGround';
import TechStackSection from './assets/components/section/TechStackSection';
import ProjectsSection from './assets/components/section/ProjectsSection';
import FloatingNavbar from './assets/components/FloatingNavbar';

function App() {
  return (
    <div>
      <FloatingNavbar />
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
