import React from 'react';
import { publishedNotes, plannedTopics } from '../data/notes';
import { SectionHeader } from '../components/SectionHeader';
import { BookOpen, ArrowRight, Lightbulb } from 'lucide-react';

export const NotesSection: React.FC = () => {
  return (
    <section id="notes" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="KNOWLEDGE LOG"
          title="Engineering Notes & Learning"
          subtitle="Documenting hands-on takeaways, debugging experiences, and cloud architecture patterns."
        />

        <div className="max-w-4xl mx-auto">
          {publishedNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedNotes.map((note) => (
                <article
                  key={note.id}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-cyan-400">{note.category}</span>
                      <span>{note.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">
                      {note.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {note.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>Read Note</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Clean Empty State as requested by prompt */
            <div className="p-8 md:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-cyan-400 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-lg font-bold text-slate-200">
                  Technical Write-ups in Progress
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Technical write-ups and project lessons will be added here as case studies and lab documentation are finalized.
                </p>
              </div>

              {/* Planned write-ups list */}
              <div className="pt-6 border-t border-slate-800/80 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    Topics Currently Being Documented:
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plannedTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-cyan-400 font-mono mt-0.5 font-bold">›</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
