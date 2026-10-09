import React from 'react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="PROFESSIONAL EXPERIENCE"
          title="Internship Experience"
          subtitle="Real-world engineering collaboration focused on container packaging and CI/CD automation."
        />

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm dark:shadow-none"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 font-semibold">
                      {exp.employmentType}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5 text-cyan-600 dark:text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-semibold">
                  Key Technical Contributions:
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">Technologies Used:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
