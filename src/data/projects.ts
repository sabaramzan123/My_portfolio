import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'eks-gitops-microservices',
    title: 'AWS EKS GitOps Microservices Deployment',
    shortOverview:
      'Implemented a Kubernetes-based deployment workflow for a seven-service e-commerce application, using Terraform-managed infrastructure, containerized services, and Kubernetes manifests.',
    category: ['cloud', 'iac', 'cicd', 'kubernetes'],
    featured: true,
    technologies: ['AWS EKS', 'Terraform', 'Docker', 'Amazon ECR', 'Kubernetes', 'GitHub Actions', 'GitOps'],
    whatIImplemented: [
      'Provisioned a production-ready AWS EKS cluster, VPC (public & private subnets), and IAM roles using modular Terraform code.',
      'Containerized 7 distinct e-commerce microservices with optimized Dockerfiles and automated builds pushed to Amazon ECR.',
      'Authored declarative Kubernetes manifests (Deployments, Services, ConfigMaps, Secrets, Ingress) with health probes and resource limits.',
      'Engineered a GitOps automated CI/CD pipeline in GitHub Actions that validates changes and applies declarative updates with zero manual intervention.'
    ],
    githubUrl: 'https://github.com/sabaramzan123',
    architectureDiagram: {
      type: 'svg',
      title: 'AWS EKS GitOps Microservices Architecture & Flow',
      nodes: [
        { id: 'git', label: 'GitHub Repository', subtitle: 'Source & Manifests', type: 'source', details: 'Developer pushes code & Kubernetes YAML manifests to GitHub branches' },
        { id: 'ci', label: 'GitHub Actions', subtitle: 'CI/CD Pipeline', type: 'ci', details: 'Triggers automated linting, test execution, and Docker container build' },
        { id: 'ecr', label: 'Amazon ECR', subtitle: 'Container Registry', type: 'registry', details: 'Stores immutable container images tagged by commit SHA' },
        { id: 'tf', label: 'Terraform IaC', subtitle: 'Infra Automation', type: 'cloud', details: 'Provisions VPC, subnets, EKS control plane, and managed node groups' },
        { id: 'eks', label: 'Amazon EKS', subtitle: 'K8s Cluster', type: 'orchestrator', details: 'Orchestrates 7 microservices across private worker nodes with ALB Ingress' },
        { id: 'app', label: '7 Microservices', subtitle: 'Pods & Services', type: 'orchestrator', details: 'Auth, Cart, Catalog, Orders, Payment, Notification, and Frontend pods' }
      ],
      connections: [
        { from: 'git', to: 'ci', label: 'Git Push Hook' },
        { from: 'ci', to: 'ecr', label: 'Push Images' },
        { from: 'tf', to: 'eks', label: 'Provisions Cluster' },
        { from: 'ci', to: 'eks', label: 'Sync Manifests' },
        { from: 'ecr', to: 'eks', label: 'Pull Images' },
        { from: 'eks', to: 'app', label: 'Deploys Pods' }
      ]
    },
    caseStudy: {
      overview:
        'A comprehensive infrastructure migration and automation project designed to modernize deployment practices for a 7-service distributed e-commerce application. The goal was moving away from brittle manual server setups to a declarative, self-healing Kubernetes cluster orchestrated on AWS with Terraform-provisioned infrastructure.',
      problemStatement:
        'Managing multiple microservices manually on single instances introduced release bottlenecks, environment configuration drift, downtime during updates, and zero automated rollback capability when services encountered runtime failures.',
      goals: [
        'Automate cloud infrastructure provisioning using declarative Terraform HCL.',
        'Package all 7 microservices into lightweight, reproducible container images.',
        'Implement rolling zero-downtime updates with Kubernetes native deployment strategies.',
        'Establish automated CI/CD pipeline workflows triggered automatically by git pushes.',
        'Enforce IAM least privilege and isolate workloads inside private VPC subnets.'
      ],
      technologyChoices: [
        {
          tech: 'AWS EKS',
          rationale: 'Managed Kubernetes control plane eliminating manual master node maintenance while providing high availability across AWS Availability Zones.'
        },
        {
          tech: 'Terraform',
          rationale: 'Enables repeatable, version-controlled cloud infrastructure with state management, preventing manual configuration drift in AWS.'
        },
        {
          tech: 'Amazon ECR',
          rationale: 'Highly available private Docker registry closely integrated with AWS IAM roles and EKS worker nodes for secure image pulls.'
        },
        {
          tech: 'GitHub Actions',
          rationale: 'Native Git integration facilitating CI/CD automation without needing dedicated CI master servers.'
        }
      ],
      implementationWorkflow: [
        'VPC Architecture: Created a multi-AZ VPC with 2 public subnets (for NAT Gateway & ALB) and 2 private subnets (for EKS worker nodes).',
        'Cluster Provisioning: Authored Terraform modules for AWS EKS cluster, node groups, and IAM roles for service accounts (IRSA).',
        'Containerization: Multi-stage Dockerfiles crafted for each service to keep build tooling separate from final production runtime.',
        'Kubernetes Manifests: Configured Deployments with readiness/liveness probes, ClusterIP Services, ConfigMaps for environment settings, and Secrets for sensitive credentials.',
        'CI/CD Pipeline: GitHub Actions workflow triggered on main push: tests code, builds images, tags with Git commit SHA, pushes to ECR, and updates manifests for EKS deployment.'
      ],
      securityConsiderations: [
        'Worker nodes are placed in private subnets with no direct public IPv4 addresses; traffic enters exclusively through the Application Load Balancer.',
        'AWS IAM least privilege policies attached to worker node instances.',
        'Application configuration decoupled from source code using Kubernetes ConfigMaps and Kubernetes Secrets.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Inter-service communication and DNS resolution between pods across different namespaces.',
          solution: 'Utilized Kubernetes CoreDNS standard service naming (service-name.namespace.svc.cluster.local) and configured ClusterIP services for stable internal routing.'
        },
        {
          challenge: 'Handling node scaling and ensuring pods did not get evicted abruptly during updates.',
          solution: 'Configured rollingUpdate strategy with maxSurge: 25% and maxUnavailable: 0, paired with realistic liveness and readiness HTTP probes.'
        }
      ],
      testingAndValidation: [
        'Executed terraform plan validation to verify all resource dependencies before applying.',
        'Tested pod restart behavior by simulating container crashes and confirming automated Kubernetes pod rescheduling.',
        'Validated rolling deployments with zero drop in active HTTP connections.'
      ],
      verifiedOutcomes: [
        'Single-command / single-push automated release pipeline from code change to live Kubernetes pod deployment.',
        'Reproducible infrastructure ready to be torn down and reprovisioned reliably through Terraform.',
        'Consistent environment parity across all 7 services.'
      ],
      whatILearned: [
        'Deep practical understanding of Kubernetes networking (Services, Endpoints, Ingress routing).',
        'How Terraform handles state locking and manages complex dependencies between VPCs, subnets, and EKS clusters.',
        'The operational value of GitOps declarative principles for eliminating manual human error in deployments.'
      ]
    }
  },
  {
    id: 'ecs-fargate-ecommerce',
    title: 'AWS ECS Fargate E-Commerce Deployment',
    shortOverview:
      'Provisioned AWS infrastructure for a seven-microservice e-commerce application using Terraform and implemented four GitHub Actions workflows for infrastructure validation, deployment automation, and resource teardown.',
    category: ['cloud', 'iac', 'cicd'],
    featured: true,
    technologies: ['AWS ECS Fargate', 'Amazon ECR', 'Terraform', 'GitHub Actions', 'AWS VPC', 'Amazon RDS', 'API Gateway'],
    whatIImplemented: [
      'Designed and provisioned a complete AWS architecture using Terraform: VPC, multi-AZ subnets, ECS cluster, Fargate task definitions, ALB, and Amazon RDS PostgreSQL.',
      'Constructed 4 distinct GitHub Actions workflows: Terraform Validation, Docker Build & ECR Push, ECS Service Rolling Deployment, and Infrastructure Teardown.',
      'Implemented a zero-hardcoded-credentials security model using GitHub repository secrets and AWS IAM role authorization.',
      'Configured Application Load Balancer path-based routing and Amazon API Gateway to dispatch incoming client traffic to corresponding ECS Fargate services.'
    ],
    githubUrl: 'https://github.com/sabaramzan123',
    architectureDiagram: {
      type: 'svg',
      title: 'AWS ECS Fargate Multi-Service Architecture',
      nodes: [
        { id: 'dev', label: 'Developer Push', subtitle: 'GitHub Repository', type: 'source', details: 'Code commits trigger automated GitHub Actions workflows' },
        { id: 'gh-actions', label: '4 GitHub Actions Workflows', subtitle: 'Validation / Deploy / Destroy', type: 'ci', details: 'CI Validation, Image Build, ECS Service Update, and Teardown automation' },
        { id: 'ecr', label: 'Amazon ECR', subtitle: 'Image Repository', type: 'registry', details: 'Stores versioned container images for all 7 microservices' },
        { id: 'tf', label: 'Terraform Modules', subtitle: 'VPC / RDS / ECS / ALB', type: 'cloud', details: 'Declarative definition of all AWS network and compute components' },
        { id: 'alb', label: 'Application Load Balancer', subtitle: 'Path-based Routing', type: 'cloud', details: 'Routes HTTP/HTTPS client requests to target microservice groups' },
        { id: 'ecs', label: 'ECS Fargate Tasks', subtitle: 'Serverless Containers', type: 'orchestrator', details: 'Runs containerized services without managing underlying EC2 instances' },
        { id: 'rds', label: 'Amazon RDS PostgreSQL', subtitle: 'Private Subnet DB', type: 'cloud', details: 'Managed relational database secured with strict security group ingress' }
      ],
      connections: [
        { from: 'dev', to: 'gh-actions', label: 'Push Event' },
        { from: 'gh-actions', to: 'ecr', label: 'Build & Push' },
        { from: 'tf', to: 'ecs', label: 'Provisions ECS' },
        { from: 'gh-actions', to: 'ecs', label: 'Trigger Rollout' },
        { from: 'alb', to: 'ecs', label: 'Forward Traffic' },
        { from: 'ecs', to: 'rds', label: 'Private DB Query' }
      ]
    },
    caseStudy: {
      overview:
        'Engineered a complete serverless container deployment on AWS using ECS Fargate and Terraform for a 7-microservice architecture. Included four dedicated GitHub Actions automation pipelines covering linting, image build, service deployment, and clean resource destruction for cloud cost containment.',
      problemStatement:
        'Managing EC2 virtual instances for multiple microservices causes operational overhead (OS patching, server monitoring, manual scaling) and cloud resource waste if unused environments remain running without automated teardown workflows.',
      goals: [
        'Eliminate host server maintenance by leveraging AWS ECS with Fargate serverless compute.',
        'Provision all AWS networking, container services, and databases entirely with Terraform.',
        'Establish automated CI/CD with separate workflows for deployment and controlled infrastructure destruction.',
        'Implement zero-hardcoded-credentials across the entire deployment pipeline.'
      ],
      technologyChoices: [
        {
          tech: 'AWS ECS Fargate',
          rationale: 'Serverless container orchestration that removes EC2 instance provisioning and OS maintenance while retaining strict resource allocation per task.'
        },
        {
          tech: 'Terraform HCL',
          rationale: 'Standardizes cloud resources in declarative code, ensuring identical environments can be built, updated, and cleanly destroyed on demand.'
        },
        {
          tech: 'Amazon RDS PostgreSQL',
          rationale: 'Managed relational database with automated snapshots and isolated network security groups inside private subnets.'
        },
        {
          tech: 'GitHub Actions',
          rationale: 'Automates deployment workflows and integrates seamlessly with AWS via secure secrets and AWS CLI actions.'
        }
      ],
      implementationWorkflow: [
        'Infrastructure as Code: Authored Terraform configurations for VPC (public/private subnets across 2 AZs), Internet Gateway, NAT Gateway, ECS Cluster, Task Definitions, ALB, and RDS.',
        'Workflow 1 (Terraform Validate): Runs tflint and terraform validate on pull requests to ensure HCL syntax and best practices.',
        'Workflow 2 (Build & Push): Builds Docker images for changed microservices and pushes them to Amazon ECR tagged with commit SHAs.',
        'Workflow 3 (Deploy to ECS): Updates ECS task definitions with the newly published ECR image URI and triggers rolling deployment on Fargate services.',
        'Workflow 4 (Teardown & Destroy): On-demand automated workflow running terraform destroy with confirmation flags to cleanly delete infrastructure and prevent unexpected AWS charges.'
      ],
      securityConsiderations: [
        'Zero hardcoded credentials: All AWS keys and sensitive environment variables stored in GitHub Encrypted Secrets.',
        'Database isolation: Amazon RDS instance placed strictly in private database subnets with security group rules allowing inbound traffic only from the ECS security group.',
        'Task execution roles scoped strictly to pull from ECR and send logs to CloudWatch.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Avoiding downtime while updating ECS task definitions for multiple dependent microservices.',
          solution: 'Configured minimum healthy percent to 100% and maximum percent to 200% in ECS service definitions to ensure replacement tasks pass ALB health checks before terminating old tasks.'
        },
        {
          challenge: 'Managing environment variables and secret injection without committing sensitive credentials.',
          solution: 'Utilized ECS task definition environment variables mapped to secure secrets and dynamically injected at task launch.'
        }
      ],
      testingAndValidation: [
        'Verified end-to-end HTTP requests routed through the Application Load Balancer to active Fargate tasks.',
        'Tested the automated destruction workflow and successfully confirmed complete teardown of VPC and compute resources.'
      ],
      verifiedOutcomes: [
        'Automated 4-pipeline CI/CD workflow eliminating manual AWS management console clicks.',
        'Repeatable Terraform provisioning lifecycle validated with both creation and safe teardown.',
        'Cost-effective serverless container operations on AWS Fargate.'
      ],
      whatILearned: [
        'How AWS ECS Task Definitions, Services, and Target Groups coordinate traffic handling.',
        'The critical importance of automated teardown workflows when running cloud projects in learning and lab environments.',
        'Structuring multi-job GitHub Actions workflows with conditional execution.'
      ]
    }
  },
  {
    id: 'jenkins-cicd-nestjs',
    title: 'Jenkins CI/CD Pipeline for NestJS',
    shortOverview:
      'Built a Jenkins pipeline that automates application build steps, Docker image handling, container deployment, and email notifications.',
    category: ['cicd'],
    featured: false,
    technologies: ['Jenkins', 'Docker', 'NestJS', 'GitHub', 'Linux', 'Email Notifications'],
    whatIImplemented: [
      'Authored a declarative Jenkinsfile defining stages for automated code checkout, dependency installation, testing, and NestJS build.',
      'Configured automated Docker image packaging and container deployment on the host environment.',
      'Integrated post-build notification triggers to deliver instant build status alerts via email.',
      'Set up Git webhook triggers in GitHub to initiate pipeline execution on every remote push.'
    ],
    githubUrl: 'https://github.com/sabaramzan123',
    architectureDiagram: {
      type: 'svg',
      title: 'Jenkins CI/CD Pipeline Stages',
      nodes: [
        { id: 'git', label: '1. Source Checkout', subtitle: 'GitHub Webhook', type: 'source', details: 'Clones latest code on push' },
        { id: 'build', label: '2. Application Build', subtitle: 'npm install & build', type: 'ci', details: 'Compiles TypeScript NestJS source code' },
        { id: 'docker', label: '3. Docker Packaging', subtitle: 'Docker build & tag', type: 'registry', details: 'Builds lean container image' },
        { id: 'deploy', label: '4. Container Run', subtitle: 'Docker run / update', type: 'orchestrator', details: 'Deploys container with configured port mappings' },
        { id: 'notify', label: '5. Email Notification', subtitle: 'Post-build action', type: 'monitoring', details: 'Sends status alert with console logs on success/failure' }
      ],
      connections: [
        { from: 'git', to: 'build', label: 'Triggers' },
        { from: 'build', to: 'docker', label: 'On Success' },
        { from: 'docker', to: 'deploy', label: 'Executes' },
        { from: 'deploy', to: 'notify', label: 'Notifies' }
      ]
    },
    caseStudy: {
      overview:
        'Designed and implemented a declarative CI/CD pipeline using Jenkins on a Linux host to automate the software delivery lifecycle of a NestJS backend application. The pipeline covers repository checkout, compiling code, building Docker images, deploying containers, and sending status notifications.',
      problemStatement:
        'Manual deployment of NestJS microservices required SSH-ing into hosts, pulling git updates, manually running npm commands, and restarting containers. This process caused intermittent downtime, lacked build traceability, and left developers uninformed when builds broke.',
      goals: [
        'Automate the full integration and deployment flow from git commit to live container.',
        'Use declarative Jenkinsfile syntax stored directly in version control.',
        'Package application into an isolated Docker container with port mapping and environment variables.',
        'Provide instant feedback to engineers through automated email notifications on pipeline completion.'
      ],
      technologyChoices: [
        {
          tech: 'Jenkins',
          rationale: 'Industry-standard open-source automation server supporting declarative pipelines, credential management, and extensible plugins.'
        },
        {
          tech: 'Docker',
          rationale: 'Provides reproducible application environments ensuring consistent behavior between development and deployment.'
        },
        {
          tech: 'NestJS',
          rationale: 'Modern enterprise TypeScript framework requiring structured build and compilation steps.'
        }
      ],
      implementationWorkflow: [
        'Stage 1 (Source Checkout): Pulls the latest commits from GitHub upon receiving webhook triggers.',
        'Stage 2 (Build & Compile): Runs npm ci and npm run build to compile TypeScript into JavaScript production bundles.',
        'Stage 3 (Docker Image Build): Builds a container image tagged with the Jenkins build number ($BUILD_NUMBER).',
        'Stage 4 (Container Deployment): Stops previous container instances gracefully and starts the updated container with configured port mappings.',
        'Stage 5 (Post Actions): Jenkins post { success { ... } failure { ... } } block sends email notifications detailing build status and execution time.'
      ],
      securityConsiderations: [
        'Jenkins credentials store used to keep authentication details out of pipeline scripts.',
        'Container runs as a non-root user within the Dockerfile.',
        'Host port access restricted to required application ports.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Previous container blocking the target port during continuous deployment updates.',
          solution: 'Implemented pre-deployment shell checks to gracefully stop and prune stale container instances before starting the new image.'
        },
        {
          challenge: 'Configuring reliable SMTP credentials in Jenkins without plain-text exposure.',
          solution: 'Configured Jenkins extended email plugin with encrypted credentials managed through the Jenkins credential manager.'
        }
      ],
      testingAndValidation: [
        'Simulated failed builds by introducing lint errors to verify that failure notifications triggered as expected and halted downstream container execution.',
        'Verified successful container deployment and application response at designated HTTP endpoint.'
      ],
      verifiedOutcomes: [
        'Hands-off automated deployment workflow for NestJS applications.',
        'Standardized release process with auditable build history and logs.',
        'Immediate notification feedback loop on pipeline failures.'
      ],
      whatILearned: [
        'Writing clean, maintainable declarative Jenkins pipelines using scripted blocks only when necessary.',
        'Managing container lifecycles programmatically via CI agents.',
        'Configuring webhooks and automated feedback loops for development teams.'
      ]
    }
  },
  {
    id: 'django-kubernetes-monitoring',
    title: 'Django Application on Kubernetes with Monitoring',
    shortOverview:
      'Containerized a Django application and deployed it to a local Kubernetes cluster using Kubernetes manifests, with Prometheus and Grafana integrated for monitoring.',
    category: ['containers', 'kubernetes', 'monitoring'],
    featured: false,
    technologies: ['Docker', 'Kubernetes', 'Minikube', 'Helm', 'kubectl', 'Prometheus', 'Grafana', 'Python (Django)'],
    whatIImplemented: [
      'Containerized a Python Django application using a multi-stage Dockerfile, configuring static file collection and Gunicorn application server.',
      'Orchestrated application deployment to a local Kubernetes (Minikube) cluster using modular YAML manifests (Deployments, Services, ConfigMaps, Secrets, Ingress).',
      'Deployed kube-prometheus-stack using Helm to monitor cluster node health, pod resource utilization, and application request metrics.',
      'Configured Grafana dashboards to visualize real-time CPU, memory, and HTTP response telemetry.'
    ],
    githubUrl: 'https://github.com/sabaramzan123',
    architectureDiagram: {
      type: 'svg',
      title: 'Django on Kubernetes with Monitoring Stack',
      nodes: [
        { id: 'client', label: 'Client / Ingress', subtitle: 'HTTP Ingress Controller', type: 'client', details: 'Routes HTTP traffic into the Minikube cluster' },
        { id: 'service', label: 'ClusterIP Service', subtitle: 'Internal Load Balancer', type: 'orchestrator', details: 'Stable virtual IP and endpoint routing to Django pods' },
        { id: 'pods', label: 'Django Pods (Replicas)', subtitle: 'Gunicorn & Python', type: 'orchestrator', details: 'Containerized Django application pods configured with ConfigMaps & Secrets' },
        { id: 'helm', label: 'Helm Package Manager', subtitle: 'kube-prometheus-stack', type: 'ci', details: 'Deploys and manages Prometheus and Grafana charts' },
        { id: 'prom', label: 'Prometheus Server', subtitle: 'Metrics Scraper', type: 'monitoring', details: 'Scrapes cluster metrics, cAdvisor, and node-exporter targets' },
        { id: 'grafana', label: 'Grafana Dashboard', subtitle: 'Telemetry UI', type: 'monitoring', details: 'Visualizes CPU, memory, request volume, and cluster health' }
      ],
      connections: [
        { from: 'client', to: 'service', label: 'Ingress Route' },
        { from: 'service', to: 'pods', label: 'Dispatches Requests' },
        { from: 'helm', to: 'prom', label: 'Deploys Charts' },
        { from: 'prom', to: 'pods', label: 'Scrapes Telemetry' },
        { from: 'prom', to: 'grafana', label: 'Data Source' }
      ]
    },
    caseStudy: {
      overview:
        'Containerized a Python Django web application and orchestrated it inside a local Kubernetes cluster using Minikube. Integrated the Prometheus and Grafana observability stack using Helm to monitor container resource consumption, HTTP request latency, and node health.',
      problemStatement:
        'Running Python applications without containerization and orchestration makes scaling unpredictable and provides little visibility into resource consumption, memory leaks, or cluster bottlenecks.',
      goals: [
        'Containerize Django application with production-grade WSGI server (Gunicorn) and minimal image size.',
        'Deploy declarative Kubernetes objects: Deployment, Service, ConfigMap, Secrets, and Ingress.',
        'Use Minikube as a local development and testing environment.',
        'Install and configure Prometheus and Grafana using Helm for full-stack cluster observability.'
      ],
      technologyChoices: [
        {
          tech: 'Kubernetes (Minikube)',
          rationale: 'Local single-node Kubernetes cluster providing complete manifest parity with production Kubernetes without incurring cloud compute costs.'
        },
        {
          tech: 'Helm',
          rationale: 'Package manager for Kubernetes simplifying deployment and configuration of complex stacks like kube-prometheus-stack.'
        },
        {
          tech: 'Prometheus & Grafana',
          rationale: 'Industry standard for time-series metrics collection and rich visual dashboarding.'
        },
        {
          tech: 'Docker',
          rationale: 'Ensures deterministic Python dependencies and reproducible builds.'
        }
      ],
      implementationWorkflow: [
        'Containerization: Created a Dockerfile using python:3.11-slim base, collected Django static assets, and configured Gunicorn for concurrent worker requests.',
        'Kubernetes Manifests: Authored Deployment manifest with replica count of 2, resource requests (cpu: 100m, memory: 128Mi) and limits (cpu: 250m, memory: 256Mi).',
        'Configuration Separation: Extracted Django settings into ConfigMap and sensitive SECRET_KEY into a Kubernetes Secret.',
        'Ingress & Service: Created a ClusterIP Service and an Ingress rule pointing to the local Minikube Ingress addon.',
        'Observability Integration: Installed kube-prometheus-stack chart using Helm, exposing Prometheus server and Grafana dashboards for cluster analytics.'
      ],
      securityConsiderations: [
        'Application SECRET_KEY stored strictly in base64-encoded Kubernetes Secrets, never hardcoded in Dockerfiles or source code.',
        'Explicit resource requests and limits prevent noisy-neighbor pod starvation.',
        'Container configured to execute under a non-root Linux user UID.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Minikube ingress controller not routing localhost domain names directly.',
          solution: 'Enabled minikube addons enable ingress and mapped the test host to the Minikube IP in /etc/hosts for seamless local testing.'
        },
        {
          challenge: 'Prometheus failing to scrape application endpoints without dedicated metrics exposure.',
          solution: 'Added django-prometheus metrics middleware and configured Prometheus ServiceMonitor to scrape the application /metrics path.'
        }
      ],
      testingAndValidation: [
        'Tested pod auto-healing: killed an active Django pod with kubectl delete pod and verified Kubernetes immediately spawned a replacement.',
        'Generated synthetic load using Apache Bench (ab) and watched CPU/memory graphs scale upward in real time on Grafana.'
      ],
      verifiedOutcomes: [
        'Hands-on deployment of Kubernetes workloads with real health checks and configuration injection.',
        'Functional telemetry stack delivering live visual monitoring of cluster and application metrics.',
        'Accurate demonstration of local Kubernetes cluster workflows using Minikube and Helm.'
      ],
      whatILearned: [
        'Hands-on mastery of kubectl commands and Kubernetes YAML manifest troubleshooting.',
        'How Helm simplifies deploying complex third-party software stacks onto Kubernetes.',
        'Setting up metrics scrapers and interpreting Prometheus query language (PromQL) basics in Grafana.'
      ]
    }
  }
];
