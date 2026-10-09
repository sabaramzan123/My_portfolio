import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectFilter } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { GithubIcon } from '../components/Icons';
import { 
  CheckCircle2, Terminal, X, Filter, ExternalLink 
} from 'lucide-react';

interface ProjectsSectionProps {
  activeSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  activeSkillFilter,
  onClearSkillFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>('all');

  const filterTabs: { key: ProjectFilter; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'cloud', label: 'AWS & Cloud' },
    { key: 'iac', label: 'Infrastructure as Code' },
    { key: 'cicd', label: 'CI/CD & Automation' },
    { key: 'kubernetes', label: 'Kubernetes' },
    { key: 'monitoring', label: 'Monitoring' },
  ];

  // Filtering logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeSkillFilter) {
      const matchesSkill = project.technologies.some((t) => 
        t.toLowerCase().includes(activeSkillFilter.toLowerCase()) ||
        activeSkillFilter.toLowerCase().includes(t.toLowerCase())
      );
      if (!matchesSkill) return false;
    }

    if (activeCategory === 'all') return true;
    return project.category.includes(activeCategory);
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="HANDS-ON REPOSITORIES"
          title="Featured Projects"
          subtitle="Real-world infrastructure code, deployment pipelines, container orchestration, and monitoring implementations."
        />

        {/* Skill Filter Banner if active */}
        {activeSkillFilter && (
          <div className="mb-8 p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/60 max-w-xl mx-auto flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300">
              <Filter className="w-3.5 h-3.5" />
              <span>Filtered by technology: <strong>"{activeSkillFilter}"</strong></span>
            </div>
            <button
              onClick={onClearSkillFilter}
              type="button"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isSelected = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const isTopTwo = index < 2 && activeCategory === 'all' && !activeSkillFilter;

            return (
              <article
                key={project.id}
                className={`rounded-2xl transition-all border ${
                  isTopTwo
                    ? 'bg-white dark:bg-slate-900/70 border-cyan-300 dark:border-cyan-500/30 shadow-md dark:shadow-[0_4px_30px_rgba(6,182,212,0.1)] p-6 md:p-8'
                    : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm p-6 md:p-7'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Project Overview and Implementation */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 font-semibold">
                          Project 0{index + 1}
                        </span>
                        {project.featured && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 font-semibold">
                            Featured Architecture
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                        {project.shortOverview}
                      </p>
                    </div>

                    {/* What I Implemented list */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>Key Engineering Deliverables</span>
                      </h4>
                      <ul className="space-y-2">
                        {project.whatIImplemented.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Chips */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 hover:bg-slate-800 dark:hover:bg-slate-850 text-white dark:text-cyan-300 text-xs font-semibold font-mono border border-slate-700 dark:border-cyan-500/40 hover:border-cyan-400 transition-all shadow-sm"
                      >
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        <span>Inspect on GitHub</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-medium font-mono border border-slate-300 dark:border-slate-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architecture Flow Breakdown */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
                        <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                          Workflow Schematic
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {project.architectureDiagram.nodes.length} Components
                        </span>
                      </div>

                      {/* Schematic Flow Node Pills */}
                      <div className="space-y-2 py-1">
                        {project.architectureDiagram.nodes.map((node, nIdx) => (
                          <div 
                            key={node.id} 
                            className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/70 text-xs transition-all flex items-start justify-between shadow-xs"
                          >
                            <div className="flex items-start gap-2">
                              <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">0{nIdx + 1}</span>
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-slate-200">{node.label}</div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{node.details}</div>
                              </div>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">{node.subtitle}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span>Terraform & GitOps flow</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>View manifests →</span>
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 text-sm">No projects found matching the current filter criteria.</p>
              <button
                onClick={() => { setActiveCategory('all'); onClearSkillFilter?.(); }}
                className="mt-3 px-4 py-1.5 text-xs font-mono rounded-lg bg-cyan-500 text-slate-950 font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
