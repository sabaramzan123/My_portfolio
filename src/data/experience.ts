import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'progree-devops-intern',
    role: 'DevOps Intern (Remote)',
    company: 'Progree',
    employmentType: 'Internship',
    location: 'Rawalpindi, Pakistan (Remote)',
    period: 'June 2026 – July 2026',
    description:
      'Contributed to Docker-based application packaging and CI/CD automation during a remote DevOps internship.',
    responsibilities: [
      'Authored multi-stage Dockerfiles for a multi-dependency web application stack, minimizing final image size and securely configuring environment variables and container port routing.',
      'Built and maintained automated CI/CD pipelines in GitHub Actions triggered on remote pushes, including code checkout, static linting, unit test execution, and deployment status logging.',
      'Collaborated on containerizing local service dependencies and resolving environment configuration issues across developer machines.'
    ],
    technologies: ['Docker', 'GitHub Actions', 'Linux', 'CI/CD Automation', 'Bash']
  }
];
