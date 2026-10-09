import React, { useState } from 'react';
import type { ArchitectureDiagramData } from '../types';
import { Maximize2, ZoomIn, ZoomOut, X, Info } from 'lucide-react';

interface DiagramViewerProps {
  data: ArchitectureDiagramData;
  projectId: string;
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({ data, projectId }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.75));
  const handleReset = () => setZoom(1);

  const activeNode = data.nodes.find((n) => n.id === activeNodeId);

  // Render diagram SVG nodes and connections based on projectId
  const renderDiagramContent = () => {
    return (
      <div className="w-full flex flex-col items-center select-none">
        {/* Architecture Canvas */}
        <div className="w-full overflow-x-auto pb-4 pt-2">
          <div className="min-w-[640px] max-w-4xl mx-auto px-4">
            
            {/* Visual groupings based on project */}
            {projectId === 'eks-gitops-microservices' && (
              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Zone 1: VCS & CI */}
                <div className="col-span-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold border-b border-slate-800 pb-1 flex items-center justify-between">
                    <span>Source & CI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  
                  {/* GitHub Node */}
                  <div 
                    onClick={() => setActiveNodeId('git')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'git' ? 'bg-cyan-950/60 border-cyan-400 shadow-glow-cyan' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">GitHub Repo</div>
                    <div className="text-[11px] text-slate-400">Code & K8s Manifests</div>
                  </div>

                  {/* Down Arrow */}
                  <div className="flex justify-center text-cyan-500 text-xs font-mono">↓ Git Push Hook</div>

                  {/* CI Node */}
                  <div 
                    onClick={() => setActiveNodeId('ci')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'ci' ? 'bg-cyan-950/60 border-cyan-400 shadow-glow-cyan' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">GitHub Actions</div>
                    <div className="text-[11px] text-slate-400">Lint, Test & Build</div>
                  </div>
                </div>

                {/* Arrow to Registry / Cloud */}
                <div className="col-span-1 flex flex-col items-center justify-center text-cyan-400 text-xs font-mono text-center">
                  <span>→</span>
                  <span className="text-[9px] text-slate-400 mt-1">Push Image</span>
                </div>

                {/* Zone 2: AWS Cloud VPC */}
                <div className="col-span-8 p-3.5 rounded-xl bg-slate-950/90 border border-cyan-900/40 relative">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold border-b border-slate-800 pb-1 flex items-center justify-between mb-3">
                    <span>AWS VPC (Terraform Managed)</span>
                    <span className="text-[10px] px-2 py-0.2 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">Multi-AZ</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Public Subnet / ECR */}
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Registry & Ingress</div>
                      <div 
                        onClick={() => setActiveNodeId('ecr')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'ecr' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-slate-200">Amazon ECR</div>
                        <div className="text-[11px] text-slate-400">Private Docker Images</div>
                      </div>
                      <div 
                        onClick={() => setActiveNodeId('tf')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'tf' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-slate-200">Terraform IaC</div>
                        <div className="text-[11px] text-slate-400">Cluster & VPC State</div>
                      </div>
                    </div>

                    {/* Private Subnet: EKS Cluster */}
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-sky-800/40 space-y-2">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase flex items-center justify-between">
                        <span>Private Subnet: EKS</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div 
                        onClick={() => setActiveNodeId('eks')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'eks' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-slate-200">EKS Control Plane</div>
                        <div className="text-[11px] text-slate-400">Kubernetes 1.x Managed</div>
                      </div>
                      <div 
                        onClick={() => setActiveNodeId('app')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'app' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-emerald-300">7 Microservices Pods</div>
                        <div className="text-[11px] text-slate-400">Auth, Cart, Orders, etc.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {projectId === 'ecs-fargate-ecommerce' && (
              <div className="grid grid-cols-12 gap-3 items-center">
                {/* CI & Workflows */}
                <div className="col-span-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold border-b border-slate-800 pb-1">
                    GitHub Actions (4 Workflows)
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('gh-actions')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'gh-actions' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">1. Terraform Validate</div>
                    <div className="text-[11px] text-slate-400">Linting & HCL check</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('gh-actions')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'gh-actions' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">2. Docker Build & ECR</div>
                    <div className="text-[11px] text-slate-400">Image tagging with SHA</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('gh-actions')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'gh-actions' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">3. ECS Rolling Deploy</div>
                    <div className="text-[11px] text-slate-400">Task revision update</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('gh-actions')}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'gh-actions' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-rose-300">4. Clean Teardown</div>
                    <div className="text-[11px] text-slate-400">Terraform destroy trigger</div>
                  </div>
                </div>

                <div className="col-span-1 flex flex-col items-center justify-center text-cyan-400 text-xs font-mono">
                  <span>→</span>
                </div>

                {/* AWS Cloud VPC */}
                <div className="col-span-7 p-3.5 rounded-xl bg-slate-950/90 border border-cyan-900/40 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold border-b border-slate-800 pb-1 flex justify-between">
                    <span>AWS VPC Architecture</span>
                    <span className="text-[10px] text-slate-400">Terraform Managed</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div 
                      onClick={() => setActiveNodeId('alb')}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'alb' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">ALB / API Gateway</div>
                      <div className="text-[11px] text-slate-400">Public Subnets (Path Routing)</div>
                    </div>

                    <div 
                      onClick={() => setActiveNodeId('ecr')}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'ecr' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">Amazon ECR</div>
                      <div className="text-[11px] text-slate-400">7 Container Repos</div>
                    </div>
                  </div>

                  {/* Fargate Tasks and RDS */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                      <span>Private Subnet Workloads</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div 
                        onClick={() => setActiveNodeId('ecs')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'ecs' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800'
                        }`}
                      >
                        <div className="font-semibold text-cyan-300">ECS Fargate Tasks</div>
                        <div className="text-[11px] text-slate-400">Serverless Containers</div>
                      </div>
                      <div 
                        onClick={() => setActiveNodeId('rds')}
                        className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                          activeNodeId === 'rds' ? 'bg-cyan-950/60 border-cyan-400' : 'bg-slate-950 border-slate-800'
                        }`}
                      >
                        <div className="font-semibold text-blue-300">Amazon RDS</div>
                        <div className="text-[11px] text-slate-400">PostgreSQL (Private Subnet)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {projectId === 'jenkins-cicd-nestjs' && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                  Declarative Jenkinsfile Pipeline Flow
                </div>
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div 
                    onClick={() => setActiveNodeId('git')}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'git' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="text-cyan-400 font-mono text-[10px] mb-1">01. TRIGGER</div>
                    <div className="font-semibold text-slate-200">GitHub Checkout</div>
                    <div className="text-[10px] text-slate-400 mt-1">Webhook on push</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('build')}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'build' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="text-sky-400 font-mono text-[10px] mb-1">02. BUILD</div>
                    <div className="font-semibold text-slate-200">NestJS Compile</div>
                    <div className="text-[10px] text-slate-400 mt-1">npm ci & build</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('docker')}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'docker' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="text-blue-400 font-mono text-[10px] mb-1">03. PACKAGE</div>
                    <div className="font-semibold text-slate-200">Docker Image</div>
                    <div className="text-[10px] text-slate-400 mt-1">Build & tag</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('deploy')}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'deploy' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="text-emerald-400 font-mono text-[10px] mb-1">04. RUN</div>
                    <div className="font-semibold text-slate-200">Container Deploy</div>
                    <div className="text-[10px] text-slate-400 mt-1">Port mapping</div>
                  </div>
                  <div 
                    onClick={() => setActiveNodeId('notify')}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      activeNodeId === 'notify' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="text-purple-400 font-mono text-[10px] mb-1">05. ALERT</div>
                    <div className="font-semibold text-slate-200">Email Notification</div>
                    <div className="text-[10px] text-slate-400 mt-1">Build status & logs</div>
                  </div>
                </div>
              </div>
            )}

            {projectId === 'django-kubernetes-monitoring' && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2 flex justify-between">
                  <span>Local Minikube Cluster Architecture</span>
                  <span className="text-slate-400">Local Dev Environment</span>
                </div>
                <div className="grid grid-cols-12 gap-3 items-center">
                  {/* Traffic in */}
                  <div className="col-span-3 space-y-2">
                    <div 
                      onClick={() => setActiveNodeId('client')}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'client' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">HTTP Ingress</div>
                      <div className="text-[11px] text-slate-400">Minikube Ingress Controller</div>
                    </div>
                    <div 
                      onClick={() => setActiveNodeId('service')}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'service' ? 'bg-cyan-950/70 border-cyan-400' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">ClusterIP Service</div>
                      <div className="text-[11px] text-slate-400">Internal service proxy</div>
                    </div>
                  </div>

                  <div className="col-span-1 text-center text-cyan-400">→</div>

                  {/* App Pods */}
                  <div className="col-span-4 p-3 rounded-lg bg-slate-950 border border-emerald-900/40">
                    <div className="text-[10px] font-mono text-emerald-400 mb-2">Django Workload (Replicas)</div>
                    <div 
                      onClick={() => setActiveNodeId('pods')}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'pods' ? 'bg-emerald-950/50 border-emerald-400' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">Django Pods (x2)</div>
                      <div className="text-[11px] text-slate-400">Gunicorn + /metrics exporter</div>
                      <div className="text-[10px] text-slate-500 mt-1 font-mono">ConfigMap & Secret injected</div>
                    </div>
                  </div>

                  <div className="col-span-1 text-center text-cyan-400">←</div>

                  {/* Observability */}
                  <div className="col-span-3 p-3 rounded-lg bg-slate-950 border border-purple-900/40 space-y-2">
                    <div className="text-[10px] font-mono text-purple-400">Helm Monitoring Stack</div>
                    <div 
                      onClick={() => setActiveNodeId('prom')}
                      className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'prom' ? 'bg-purple-950/50 border-purple-400' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">Prometheus Server</div>
                      <div className="text-[11px] text-slate-400">Scrapes metrics</div>
                    </div>
                    <div 
                      onClick={() => setActiveNodeId('grafana')}
                      className={`p-2 rounded border text-xs cursor-pointer transition-all ${
                        activeNodeId === 'grafana' ? 'bg-purple-950/50 border-purple-400' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-slate-200">Grafana UI</div>
                      <div className="text-[11px] text-slate-400">Dashboards & alerts</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Selected Component Inspection Strip */}
        <div className="w-full mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            {activeNode ? (
              <div>
                <span className="font-semibold text-cyan-300 font-mono mr-2">{activeNode.label}:</span>
                <span className="text-slate-300">{activeNode.details}</span>
              </div>
            ) : (
              <span className="text-slate-400 italic">Click on any component card above to inspect its engineering role and configuration.</span>
            )}
          </div>
          <button
            onClick={() => setIsOpenModal(true)}
            type="button"
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 rounded border border-cyan-800/50 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full View</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Regular Inline Diagram */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 md:p-4 my-4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800/70 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              {data.title}
            </h4>
          </div>
          <button
            onClick={() => setIsOpenModal(true)}
            type="button"
            className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Expand Diagram</span>
          </button>
        </div>

        {renderDiagramContent()}
      </div>

      {/* Expanded Modal Lightbox */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-sm md:text-base font-semibold text-slate-100 font-mono">
                  {data.title} — High Resolution Architecture
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors font-mono text-xs px-2"
                  title="Reset Zoom"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpenModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-rose-400 hover:bg-slate-700 transition-colors ml-2"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body with Zoom Scale */}
            <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-slate-950/80">
              <div
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.15s ease-out' }}
                className="w-full max-w-4xl"
              >
                {renderDiagramContent()}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Interactive Architecture Inspection</span>
              <span>Press Esc or close icon to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
