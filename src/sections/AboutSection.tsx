import React from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { 
  Cloud, GitBranch, Box, Activity, ShieldCheck, 
  GraduationCap, Award, Terminal 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getFocusIcon = (icon: string) => {
    switch (icon) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-sky-400" />;
      case 'Box': return <Box className="w-5 h-5 text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default: return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="PROFILE & BACKGROUND"
          title="About Me"
          subtitle="Connecting software delivery with automated, reproducible cloud infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>DevOps & Infrastructure Automation</span>
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {profileData.aboutParagraph}
              </p>
            </div>

            {/* Quick highlight callouts */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Excellence</span>
                </div>
                <div className="text-sm font-semibold text-slate-200">100% Merit Scholarship</div>
                <div className="text-xs text-slate-400">Salim Habib University (2023–2027)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-mono text-sky-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Honors Lists</span>
                </div>
                <div className="text-sm font-semibold text-slate-200">Dean's (4x) & VC's (2x)</div>
                <div className="text-xs text-slate-400">Top academic percentile</div>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-cyan-300 block mb-1 font-mono text-xs uppercase tracking-wider">
                Target Role & Objective:
              </span>
              {profileData.careerObjective}
            </div>
          </div>

          {/* What I Focus On Column */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>What I Focus On</span>
            </h3>

            {profileData.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0 group-hover:border-cyan-500/40 transition-colors">
                    {getFocusIcon(area.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
