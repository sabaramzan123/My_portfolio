import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { NotesSection } from './sections/NotesSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  const handleSkillSelect = (skillName: string) => {
    setActiveSkillFilter(skillName);
  };

  const handleClearSkillFilter = () => {
    setActiveSkillFilter(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky responsive Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection 
          onSkillSelect={handleSkillSelect} 
          activeSkillFilter={activeSkillFilter} 
        />
        <ProjectsSection 
          activeSkillFilter={activeSkillFilter} 
          onClearSkillFilter={handleClearSkillFilter} 
        />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <NotesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
