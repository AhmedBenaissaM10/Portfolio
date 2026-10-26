import Footer from './components/Footer';
import Header from './components/Header';
import AboutSection from './sections/AboutSection';
import ActivitySection from './sections/ActivitySection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ActivitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
