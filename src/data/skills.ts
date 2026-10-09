import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    key: 'cloud',
    title: 'Cloud Platforms',
    iconName: 'Cloud',
    description: 'Amazon Web Services compute, container, networking, storage, and IAM governance.',
    skills: [
      { name: 'AWS EC2', category: 'cloud', highlight: true, description: 'Virtual server instances and security groups' },
      { name: 'AWS ECS', category: 'cloud', highlight: true, description: 'Elastic Container Service for Fargate deployments' },
      { name: 'AWS EKS', category: 'cloud', highlight: true, description: 'Managed Kubernetes control plane on AWS' },
      { name: 'Amazon ECR', category: 'cloud', highlight: true, description: 'Private container image registry' },
      { name: 'Amazon S3', category: 'cloud', description: 'Object storage & Terraform state backends' },
      { name: 'AWS VPC', category: 'cloud', highlight: true, description: 'Isolated virtual networks, subnets & NAT gateways' },
      { name: 'AWS IAM', category: 'cloud', highlight: true, description: 'Least-privilege roles, policies, and access control' },
      { name: 'Amazon RDS', category: 'cloud', description: 'Relational database instances (PostgreSQL/MySQL)' },
      { name: 'Application Load Balancer (ALB)', category: 'cloud', highlight: true, description: 'Layer 7 traffic distribution and routing' },
      { name: 'AWS CloudWatch', category: 'cloud', description: 'Metrics, alarms, and log monitoring' }
    ]
  },
  {
    key: 'iac',
    title: 'Infrastructure as Code',
    iconName: 'Cpu',
    description: 'Declarative infrastructure provisioning with state management and automated review.',
    skills: [
      { name: 'Terraform', category: 'iac', highlight: true, description: 'Declarative HCL modules, state locking, and multi-resource provisioning' },
      { name: 'AWS CloudFormation', category: 'iac', description: 'AWS-native infrastructure template definitions' }
    ]
  },
  {
    key: 'cicd',
    title: 'CI/CD & GitOps',
    iconName: 'GitBranch',
    description: 'Automated delivery pipelines, continuous testing, container build, and deployment automation.',
    skills: [
      { name: 'GitHub Actions', category: 'cicd', highlight: true, description: 'Multi-job workflows, matrix testing, OIDC/IAM integration, artifact publishing' },
      { name: 'Jenkins', category: 'cicd', highlight: true, description: 'Scripted & Declarative pipelines, automated image builds and releases' },
      { name: 'GitOps Workflows', category: 'cicd', highlight: true, description: 'Declarative cluster synchronization and push-triggered manifest deployment' }
    ]
  },
  {
    key: 'containers',
    title: 'Containers & Orchestration',
    iconName: 'Box',
    description: 'Application containerization, multi-stage builds, and Kubernetes workload management.',
    skills: [
      { name: 'Docker', category: 'containers', highlight: true, description: 'Multi-stage Dockerfiles, image optimization, Docker Compose environments' },
      { name: 'Kubernetes', category: 'containers', highlight: true, description: 'Deployments, Services, ConfigMaps, Secrets, Ingress, and cluster manifests' },
      { name: 'Helm', category: 'containers', highlight: true, description: 'Kubernetes package manager and monitoring stack charts' }
    ]
  },
  {
    key: 'monitoring',
    title: 'Monitoring & Observability',
    iconName: 'Activity',
    description: 'Real-time telemetry, performance metrics, dashboarding, and alerting.',
    skills: [
      { name: 'Prometheus', category: 'monitoring', highlight: true, description: 'Time-series metric collection, scrapers, and alerting rules' },
      { name: 'Grafana', category: 'monitoring', highlight: true, description: 'Interactive dashboard visualization and cluster telemetry panels' },
      { name: 'AWS CloudWatch', category: 'monitoring', description: 'Log groups, synthetic alarms, and infrastructure metrics' }
    ]
  },
  {
    key: 'scripting',
    title: 'Scripting & Operating Systems',
    iconName: 'Terminal',
    description: 'Automation scripts, Linux system administration, and CLI toolchains.',
    skills: [
      { name: 'Bash', category: 'scripting', highlight: true, description: 'Shell automation scripts, CI setup, and Linux CLI' },
      { name: 'Shell Scripting', category: 'scripting', description: 'System maintenance, environment config, and container entrypoints' },
      { name: 'Python', category: 'scripting', highlight: true, description: 'Automation scripts, application backends, and tooling' },
      { name: 'Linux', category: 'scripting', highlight: true, description: 'Primary OS for servers, permissions, networking, process management' },
      { name: 'Windows', category: 'scripting', description: 'Familiar development and administrative environment' }
    ]
  },
  {
    key: 'networking',
    title: 'Networking & Security',
    iconName: 'Shield',
    description: 'Cloud networking architecture, routing protocols, and defense-in-depth security standards.',
    skills: [
      { name: 'TCP/IP', category: 'networking', description: 'Fundamental internet protocol suite and socket communication' },
      { name: 'DNS', category: 'networking', description: 'Domain resolution, record types, and Route53 integration' },
      { name: 'HTTP/HTTPS', category: 'networking', description: 'Web protocols, SSL/TLS certificates, reverse proxies' },
      { name: 'Subnetting & CIDR', category: 'networking', highlight: true, description: 'Public/private subnet architecture and address allocation' },
      { name: 'NAT Gateways', category: 'networking', description: 'Secure outbound egress for private subnets' },
      { name: 'Routing Tables', category: 'networking', description: 'VPC route propagation and internet gateway routing' },
      { name: 'Load Balancing', category: 'networking', highlight: true, description: 'Traffic distribution across target groups' },
      { name: 'Security Groups', category: 'networking', highlight: true, description: 'Stateful firewall rules at the ENI level' },
      { name: 'IAM Least Privilege', category: 'networking', highlight: true, description: 'Granular role-based permissions and zero standing admin access' },
      { name: 'Secrets Management', category: 'networking', highlight: true, description: 'Decoupled environment secrets, AWS Secrets Manager, and K8s Secrets' }
    ]
  },
  {
    key: 'databases',
    title: 'Databases & Caching',
    iconName: 'Database',
    description: 'Relational data stores, NoSQL engines, and low-latency cache layers.',
    skills: [
      { name: 'PostgreSQL', category: 'databases', highlight: true, description: 'Relational database schemas and in-cluster database instances' },
      { name: 'MySQL', category: 'databases', description: 'Relational SQL database management' },
      { name: 'Amazon RDS', category: 'databases', highlight: true, description: 'Managed AWS database instances with automated backups and VPC security' },
      { name: 'DynamoDB', category: 'databases', description: 'Serverless key-value NoSQL database' },
      { name: 'Redis', category: 'databases', description: 'In-memory caching and session state storage' }
    ]
  }
];
