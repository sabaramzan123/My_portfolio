import React from 'react';
import { educationData } from '../data/education';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Education & Achievements"
          subtitle="Formal computer science foundation complemented by continuous merit recognitions."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main University Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 mt-0.5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {educationData.degree}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-400 font-mono sm:text-right pl-11 sm:pl-0">
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.duration}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* Academic Honors Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Merit Honors & Distinctions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {educationData.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center flex flex-col justify-center items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mb-2" />
                    <span className="text-xs font-bold text-slate-200">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-950/90 text-slate-300 border border-slate-800/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
