import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, FileText, Terminal } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const scrollPosition = window.scrollY + 120;
      for (const item of [...navItems].reverse()) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1 cursor-pointer"
          aria-label="Saba Ramzan - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 transition-colors shadow-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors block">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400/90 block leading-none">
              Junior DevOps
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Resume Button & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={profileData.resumeUrl}
            download={profileData.resumeFilename}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-cyan-700 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-500 transition-all shadow-sm group"
            title="Download Saba Ramzan's Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  type="button"
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <a
              href={profileData.resumeUrl}
              download={profileData.resumeFilename}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono rounded-lg bg-cyan-500 text-slate-950 font-semibold transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
