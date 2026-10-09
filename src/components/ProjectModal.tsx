import React, { useEffect } from 'react';
import type { Project } from '../types';
import { DiagramViewer } from './DiagramViewer';
import { GithubIcon } from './Icons';
import { 
  X, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, 
  Lightbulb, Layers, Cpu, Compass, Flag 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock background scroll when modal is open and handle Esc key
  useEffect(() => {
    if (!project) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20">
          <div className="pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-400 border border-cyan-800/60">
                Technical Case Study
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-950/60 text-blue-300 border border-blue-800/40">
                  Featured Project
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 text-slate-300 text-sm leading-relaxed scrollbar-thin">
          
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Section: Project Overview */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <Compass className="w-4 h-4 text-cyan-400" />
              <h3>Project Overview</h3>
            </div>
            <p className="text-slate-300 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              {caseStudy.overview}
            </p>
          </section>

          {/* Section: Problem Statement & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <section className="space-y-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-100 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3>Problem Statement</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                {caseStudy.problemStatement}
              </p>
            </section>

            <section className="space-y-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-100 font-semibold text-sm">
                <Flag className="w-4 h-4 text-emerald-400" />
                <h3>Engineering Goals</h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {caseStudy.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-bold">›</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Section: Architecture Diagram */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <Layers className="w-4 h-4 text-sky-400" />
              <h3>System Architecture & Flow</h3>
            </div>
            <DiagramViewer data={project.architectureDiagram} projectId={project.id} />
          </section>

          {/* Section: Technology Choices */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <Cpu className="w-4 h-4 text-purple-400" />
              <h3>Technology Choices & Engineering Rationale</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technologyChoices.map((choice, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-mono text-xs font-semibold text-cyan-300 mb-1">
                    {choice.tech}
                  </div>
                  <p className="text-xs text-slate-300">
                    {choice.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Implementation Workflow */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <h3>Implementation Workflow</h3>
            </div>
            <div className="space-y-2">
              {caseStudy.implementationWorkflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/40 border border-slate-800/80">
                  <span className="font-mono text-xs font-bold text-cyan-400 shrink-0 w-6 h-6 rounded bg-cyan-950 flex items-center justify-center border border-cyan-800/60">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Security Considerations */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3>Security & Least-Privilege Considerations</h3>
            </div>
            <ul className="space-y-2 p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/30">
              {caseStudy.securityConsiderations.map((sec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-emerald-400 font-mono mt-0.5">•</span>
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Challenges and Solutions */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-base">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3>Engineering Challenges & Solutions</h3>
            </div>
            <div className="space-y-3">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-amber-300">
                    Challenge: {item.challenge}
                  </div>
                  <div className="text-xs text-slate-300 pl-3 border-l-2 border-emerald-500/60">
                    <span className="font-semibold text-emerald-300">Solution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testing, Outcomes & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="space-y-2.5 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Testing & Validation
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {caseStudy.testingAndValidation.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">✓</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2.5 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                Verified Outcomes
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {caseStudy.verifiedOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* What I Learned */}
          <section className="space-y-3 p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-sm">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <h3>What I Learned</h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {caseStudy.whatILearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">›</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="text-xs text-slate-400 font-mono">
            Repository verification & project code
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all font-mono shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect on GitHub</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all font-mono border border-slate-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
