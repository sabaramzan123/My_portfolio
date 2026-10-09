import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 mb-3 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
