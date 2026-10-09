import React from 'react';
import { profileData } from '../data/profile';
import { WorkflowPipeline } from '../components/WorkflowPipeline';
import { 
  ArrowRight, FileText, Mail, MapPin, Terminal 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges: Location & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{profileData.location}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-800/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Junior DevOps & Cloud Roles</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900/60 text-slate-400 border border-slate-800 hidden sm:inline-flex">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>BS Computer Science (2023–2027)</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl space-y-4 mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">{profileData.name}</span>.
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight">
            {profileData.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl pt-1">
            {profileData.heroDescription}
          </p>

          <p className="text-sm sm:text-base font-mono text-cyan-400/90 tracking-wide border-l-2 border-cyan-500/50 pl-3">
            "{profileData.heroSecondary}"
          </p>
        </div>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <button
            onClick={() => scrollTo('projects')}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={profileData.resumeUrl}
            download={profileData.resumeFilename}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollTo('contact')}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Contact Me</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:ml-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Interactive Technical Workflow Diagram */}
        <div className="mt-8">
          <WorkflowPipeline />
        </div>

      </div>
    </section>
  );
};
