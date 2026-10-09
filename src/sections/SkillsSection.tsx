import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { SectionHeader } from '../components/SectionHeader';
import type { SkillCategoryKey } from '../types';
import { 
  Cloud, Cpu, GitBranch, Box, Activity, Terminal, 
  Shield, Database, ArrowUpRight 
} from 'lucide-react';

interface SkillsSectionProps {
  onSkillSelect?: (skillName: string) => void;
  activeSkillFilter?: string | null;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  onSkillSelect, 
  activeSkillFilter 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryKey | 'all'>('all');

  const getCategoryIcon = (key: SkillCategoryKey) => {
    switch (key) {
      case 'cloud': return <Cloud className="w-4 h-4" />;
      case 'iac': return <Cpu className="w-4 h-4" />;
      case 'cicd': return <GitBranch className="w-4 h-4" />;
      case 'containers': return <Box className="w-4 h-4" />;
      case 'monitoring': return <Activity className="w-4 h-4" />;
      case 'scripting': return <Terminal className="w-4 h-4" />;
      case 'networking': return <Shield className="w-4 h-4" />;
      case 'databases': return <Database className="w-4 h-4" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.key === selectedCategory);

  const handleSkillClick = (skillName: string) => {
    if (onSkillSelect) {
      onSkillSelect(skillName);
      // Smooth scroll to projects section
      const projEl = document.getElementById('projects');
      if (projEl) {
        projEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="TECHNICAL TOOLKIT"
          title="Skills & Technologies"
          subtitle="Categorized engineering competencies grounded in hands-on cloud labs, deployment pipelines, and containers."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            type="button"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Categories ({skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillsData.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                type="button"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(cat.key)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.key}
              className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-5 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                      {getCategoryIcon(cat.key)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-200">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {cat.skills.length} tools / protocols
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isFilterActive = activeSkillFilter === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill.name)}
                        type="button"
                        title={`Click to filter projects using ${skill.name}`}
                        className={`group inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all text-left ${
                          isFilterActive
                            ? 'bg-cyan-400 text-slate-950 font-bold border border-cyan-300 shadow-sm'
                            : skill.highlight
                            ? 'bg-slate-950 text-cyan-300 border border-cyan-900/50 hover:border-cyan-500/70 hover:bg-slate-900'
                            : 'bg-slate-950/70 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <span>{skill.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-cyan-400 transition-opacity" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer info */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                <span>Verified in projects</span>
                <span className="text-cyan-400 hover:underline cursor-pointer" onClick={() => handleSkillClick(cat.skills[0].name)}>
                  Filter projects →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine proficiency vs arbitrary percentages */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            <span className="text-cyan-400 font-semibold">Engineering Note: </span>
            Skills are backed by practical repository code and lab configurations rather than arbitrary percentage metrics. Click any skill tag to view projects that incorporate it.
          </p>
        </div>

      </div>
    </section>
  );
};
