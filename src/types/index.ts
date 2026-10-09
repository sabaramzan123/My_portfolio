export type SkillCategoryKey = 
  | 'cloud'
  | 'iac'
  | 'cicd'
  | 'containers'
  | 'monitoring'
  | 'scripting'
  | 'networking'
  | 'databases';

export interface SkillItem {
  name: string;
  category: SkillCategoryKey;
  highlight?: boolean;
  description?: string;
}

export interface SkillCategory {
  key: SkillCategoryKey;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectFilter = 
  | 'all'
  | 'cloud'
  | 'iac'
  | 'cicd'
  | 'containers'
  | 'kubernetes'
  | 'monitoring';

export interface ProjectWorkflowStep {
  label: string;
  detail: string;
}

export interface ArchitectureDiagramData {
  type: 'svg';
  title: string;
  svgCode?: string;
  nodes: {
    id: string;
    label: string;
    subtitle?: string;
    type: 'source' | 'ci' | 'registry' | 'orchestrator' | 'cloud' | 'monitoring' | 'client';
    details: string;
  }[];
  connections: {
    from: string;
    to: string;
    label: string;
  }[];
}

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  goals: string[];
  technologyChoices: {
    tech: string;
    rationale: string;
  }[];
  implementationWorkflow: string[];
  securityConsiderations: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  testingAndValidation: string[];
  verifiedOutcomes: string[];
  whatILearned: string[];
}

export interface Project {
  id: string;
  title: string;
  shortOverview: string;
  category: ('cloud' | 'iac' | 'cicd' | 'containers' | 'kubernetes' | 'monitoring')[];
  featured: boolean;
  technologies: string[];
  whatIImplemented: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDiagram: ArchitectureDiagramData;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  achievements: string[];
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  skillsCovered: string[];
  summary: string;
}

export interface NoteItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
}
