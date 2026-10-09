import type { NoteItem } from '../types';

// Engineering learning topics planned / in-progress
export const plannedTopics = [
  'Lessons learned while building Terraform infrastructure',
  'Docker image optimization and multi-stage builds',
  'CI/CD pipeline design & zero-touch deployment best practices',
  'Kubernetes troubleshooting: Debugging CrashLoopBackOff & DNS',
  'Cloud networking: VPC CIDRs, subnets, and NAT Gateway routing',
  'Monitoring & observability: Prometheus metrics and Grafana panels',
  'Secure secret management: Decoupled credentials & IAM policies'
];

// Published engineering notes (set empty array or populated if user provides published links)
export const publishedNotes: NoteItem[] = [];
