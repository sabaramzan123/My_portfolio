import React from 'react';
import { certificationsData } from '../data/certifications';
import { SectionHeader } from '../components/SectionHeader';
import { CheckCircle2, ExternalLink, Terminal, Box, Cloud } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (id: string) => {
    if (id.includes('aws')) return <Cloud className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    if (id.includes('docker')) return <Box className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    return <Terminal className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="VERIFIED CREDENTIALS"
          title="Certifications"
          subtitle="Foundational training credentials completed on KodeKloud validating core Linux, Docker, and AWS skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {getCertIcon(cert.id)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Completed</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {cert.name}
                </h3>
                <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3 font-mono">
                  Issuer: {cert.issuer}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.summary}
                </p>

                {/* Skills covered */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Curriculum Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with verification link */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">KodeKloud Lab</span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>Verification Info</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
