import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'aws-basics-kodekloud',
    name: 'AWS Basics',
    issuer: 'KodeKloud',
    issueDate: 'Verified Completion',
    credentialUrl: 'https://kodekloud.com',
    skillsCovered: ['AWS Core Services', 'IAM Security', 'EC2 & VPC Architecture', 'S3 Storage & Cloud Fundamentals'],
    summary: 'Comprehensive foundation covering Amazon Web Services core primitives, IAM policies, networking, and virtual server administration.'
  },
  {
    id: 'docker-beginners-kodekloud',
    name: 'Docker for Absolute Beginners',
    issuer: 'KodeKloud',
    issueDate: 'Verified Completion',
    credentialUrl: 'https://kodekloud.com',
    skillsCovered: ['Docker CLI', 'Dockerfile Syntax', 'Container Networking', 'Volume Storage', 'Image Optimization'],
    summary: 'Hands-on training in container packaging, creating efficient multi-stage Dockerfiles, port mapping, and container lifecycles.'
  },
  {
    id: 'linux-beginners-kodekloud',
    name: 'Linux for Absolute Beginners',
    issuer: 'KodeKloud',
    issueDate: 'Verified Completion',
    credentialUrl: 'https://kodekloud.com',
    skillsCovered: ['Linux CLI Commands', 'User & Permission Management', 'Process Control', 'Shell Scripting', 'SSH & Networking'],
    summary: 'Practical mastery of Linux server fundamentals, command-line system operations, file system hierarchy, and basic shell scripting.'
  }
];
