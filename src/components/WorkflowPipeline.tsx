import React, { useState, useEffect } from 'react';
import { GitBranch, Play, Terminal, Box, Cloud, Server, CheckCircle2, ChevronRight, Info } from 'lucide-react';

interface WorkflowNode {
  id: string;
  name: string;
  sublabel: string;
  category: string;
  icon: React.ReactNode;
  command: string;
  description: string;
  color: string;
}

export const WorkflowPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const steps: WorkflowNode[] = [
    {
      id: 'git',
      name: 'Source Repository',
      sublabel: 'GitHub VCS',
      category: 'Version Control',
      icon: <GitBranch className="w-5 h-5 text-cyan-400" />,
      command: 'git push origin main',
      description: 'Feature code and declarative infrastructure manifests are versioned and validated via pull requests.',
      color: 'cyan'
    },
    {
      id: 'ci',
      name: 'CI/CD Pipeline',
      sublabel: 'GitHub Actions / Jenkins',
      category: 'Automation',
      icon: <Play className="w-5 h-5 text-sky-400" />,
      command: 'gh workflow run deploy.yml',
      description: 'Automated test suite execution, static linting, and Docker container packaging with commit SHA tags.',
      color: 'sky'
    },
    {
      id: 'registry',
      name: 'Container Registry',
      sublabel: 'Amazon ECR',
      category: 'Artifacts',
      icon: <Box className="w-5 h-5 text-blue-400" />,
      command: 'docker push 123456.dkr.ecr.aws',
      description: 'Immutable, vulnerability-scanned container images stored securely with IAM authentication.',
      color: 'blue'
    },
    {
      id: 'iac',
      name: 'Infrastructure as Code',
      sublabel: 'Terraform Modules',
      category: 'Provisioning',
      icon: <Cloud className="w-5 h-5 text-purple-400" />,
      command: 'terraform plan && terraform apply',
      description: 'Declarative definition of VPCs, subnets, security groups, RDS instances, and EKS/ECS clusters.',
      color: 'purple'
    },
    {
      id: 'deploy',
      name: 'Cloud Deployment',
      sublabel: 'AWS EKS / ECS Fargate',
      category: 'Workloads',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      command: 'kubectl apply -f k8s/manifests/',
      description: 'Self-healing container orchestrator running pods with zero-downtime rolling updates and ALB routing.',
      color: 'emerald'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleNext = () => {
    setIsPlaying(false);
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStep = steps[activeStep];

  return (
    <div className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:p-7 shadow-xl backdrop-blur-sm relative overflow-hidden">
      {/* Top bar info */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
            INFRASTRUCTURE PIPELINE BLUEPRINT
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            type="button"
            className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-800/40 font-mono transition-colors"
          >
            {isPlaying ? 'Pause Auto-Flow' : 'Play Flow Demo'}
          </button>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1 font-mono">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>Click any stage to inspect workflow</span>
        </div>
      </div>

      {/* Pipeline nodes track */}
      <div className="relative py-2 overflow-x-auto scrollbar-none">
        <div className="flex items-center justify-between min-w-[620px] relative px-4">
          {/* Background connector line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-slate-800 z-0" />
          
          {/* Active progress connector */}
          <div 
            className="absolute top-1/2 left-8 h-[2px] -translate-y-1/2 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (steps.length - 1)) * (100 - (16 / 6.2))}%` }}
          />

          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                type="button"
                className="relative z-10 flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-xl p-1"
              >
                {/* Node icon circle */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                    isSelected
                      ? 'bg-slate-800 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-110'
                      : isCompleted
                      ? 'bg-slate-900 border-cyan-700/60 text-slate-300'
                      : 'bg-slate-900/90 border-slate-800 text-slate-500 hover:border-slate-700'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  ) : (
                    step.icon
                  )}
                </div>

                {/* Step badge */}
                <span className="text-[10px] font-mono mt-2 text-slate-400 font-medium">
                  0{idx + 1}
                </span>

                {/* Node title */}
                <span className={`text-xs font-medium tracking-tight mt-0.5 text-center transition-colors max-w-[110px] ${
                  isSelected ? 'text-cyan-300 font-semibold' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {step.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-7 bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 md:p-5 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                Step 0{activeStep + 1} • {currentStep.category}
              </span>
              <h4 className="text-base font-semibold text-slate-100">
                {currentStep.name} <span className="text-slate-400 text-sm font-normal">({currentStep.sublabel})</span>
              </h4>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {currentStep.description}
            </p>
          </div>

          {/* Stepper buttons */}
          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <button
              onClick={handlePrev}
              type="button"
              className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 rounded-lg border border-cyan-800/60 transition-colors flex items-center gap-1"
            >
              Next Step <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Command terminal snippet */}
        <div className="mt-3 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-500">$</span>
            <span className="text-cyan-200 select-all">{currentStep.command}</span>
          </div>
          <span className="text-[10px] text-slate-500 shrink-0 ml-2 hidden sm:inline">
            Stage Verification
          </span>
        </div>
      </div>
    </div>
  );
};
