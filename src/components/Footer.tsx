import React from 'react';
import { profileData } from '../data/profile';
import { Mail, MapPin, FileText, Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-100 text-sm">{profileData.name}</span>
              <span className="text-slate-500 font-mono">|</span>
              <span className="text-slate-400 font-mono text-[11px]">Junior DevOps Engineer</span>
            </div>
            
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              Final-year Computer Science student at Salim Habib University focusing on cloud infrastructure automation, CI/CD pipelines, containerization, and Kubernetes.
            </p>

            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-mono text-slate-200 text-xs font-semibold uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Internship Experience</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Awards</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">KodeKloud Certifications</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Resume */}
          <div className="space-y-3">
            <h4 className="font-mono text-slate-200 text-xs font-semibold uppercase tracking-wider">
              Career Documents
            </h4>
            <div className="space-y-2">
              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFilename}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors text-xs font-mono"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © {currentYear} {profileData.name}. Built with React, TypeScript & Tailwind CSS. Early-career portfolio with verified hands-on projects.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
