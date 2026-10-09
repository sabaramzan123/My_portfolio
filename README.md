# Saba Ramzan — Professional Junior DevOps Engineer Portfolio

> **Junior DevOps Engineer | Cloud & Infrastructure Automation**  
> Karachi, Pakistan • [sabaramzan0226@gmail.com](mailto:sabaramzan0226@gmail.com) • [LinkedIn](https://www.linkedin.com/in/saba-ramzan-94b7742b8/) • [GitHub](https://github.com/sabaramzan123)

An engineering-focused, responsive, interactive portfolio website crafted for technical recruiters and engineering managers. It showcases real hands-on infrastructure code, CI/CD automation, containerization with Docker, Kubernetes manifests, and cloud observability on AWS.

---

## 🚀 Live Demo & Development

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

The application will be served locally at `http://127.0.0.1:5173/`.

---

## 🛠️ Technology Stack

- **Core**: React 19, TypeScript
- **Bundler & Tooling**: Vite 8
- **Styling**: Tailwind CSS with custom DevOps color palette, fine borders, and dark mode
- **Icons**: Lucide Icons & Custom SVG Brand Icons
- **Visuals & Architecture**: Interactive SVG Workflow Pipeline, zoomable system architecture schematics
- **Resume Integration**: Embedded direct PDF download from `/public`

---

## 📁 Project Architecture & Structured Data

All portfolio content is decoupled from UI presentation components and stored in typed data files under `src/data/`. You can update your links, descriptions, projects, and certifications by editing these files:

```text
c:\My_portfolio/
├── public/
│   ├── favicon.svg                                       # Custom terminal/DevOps SVG favicon
│   └── Saba_Ramzan_Junior_DevOps_Engineer_Resume.pdf     # Verified candidate resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                                   # Sticky header with active scroll spy & mobile drawer
│   │   ├── Footer.tsx                                   # Footer with quick links, contacts & resume download
│   │   ├── ThemeToggle.tsx                              # Dark/Light mode switcher (Dark default)
│   │   ├── WorkflowPipeline.tsx                         # Interactive 5-stage deployment visual in Hero
│   │   ├── DiagramViewer.tsx                            # Zoomable architecture diagram viewer & lightbox
│   │   ├── ProjectModal.tsx                             # Technical case study modal with full details
│   │   ├── SectionHeader.tsx                            # Reusable section header component
│   │   └── Icons.tsx                                    # GitHub and LinkedIn SVG brand icons
│   ├── data/
│   │   ├── profile.ts                                   # Personal info, headline, email, phone, bio
│   │   ├── skills.ts                                    # 8 categorized skill domains (no fake percentages)
│   │   ├── projects.ts                                  # 4 featured projects with architecture flows & case studies
│   │   ├── experience.ts                                # Remote DevOps internship at Progree
│   │   ├── education.ts                                 # Salim Habib University, 100% scholarship, honors
│   │   ├── certifications.ts                            # KodeKloud AWS, Docker, and Linux certifications
│   │   └── notes.ts                                     # Engineering notes roadmap & empty state
│   ├── sections/
│   │   ├── HeroSection.tsx                              # Hero with headline, badges, and pipeline
│   │   ├── AboutSection.tsx                             # Honest bio, focus areas, academic honors
│   │   ├── SkillsSection.tsx                            # Filterable skills chips (clicks filter projects)
│   │   ├── ProjectsSection.tsx                          # Category filters (All, Cloud, IaC, CI/CD, K8s, Monitoring)
│   │   ├── ExperienceSection.tsx                        # 1-Month remote internship details
│   │   ├── EducationSection.tsx                         # Degree, scholarship, Dean's & VC's list
│   │   ├── CertificationsSection.tsx                    # Verified KodeKloud credentials
│   │   ├── NotesSection.tsx                             # Technical write-ups and upcoming roadmap
│   │   └── ContactSection.tsx                           # Copy email/phone, direct mail form & fallback
│   ├── types/
│   │   └── index.ts                                     # Strict TypeScript interfaces
│   ├── App.tsx                                          # Main layout and cross-section filter state
│   ├── index.css                                        # Tailwind directives and custom utility classes
│   └── main.tsx                                         # React application root
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📝 How to Update Portfolio Content

### 1. Update Contact & Social Links
Open [`src/data/profile.ts`](file:///c:/My_portfolio/src/data/profile.ts):
- Update `email`, `phone`, `github`, `linkedin`, and `location`.

### 2. Replace or Update Resume PDF
Place your updated resume in `public/` named `Saba_Ramzan_Junior_DevOps_Engineer_Resume.pdf`. The download buttons in the Hero, Navbar, and Footer link directly to this file.

### 3. Add or Modify Projects
Open [`src/data/projects.ts`](file:///c:/My_portfolio/src/data/projects.ts):
- Each project item includes `title`, `technologies`, `whatIImplemented`, `architectureDiagram` (nodes and connections), and a complete `caseStudy` object (Problem statement, Goals, Rationale, Workflow, Security, Challenges, Testing, Outcomes, Lessons).

### 4. Add Engineering Notes or Articles
Open [`src/data/notes.ts`](file:///c:/My_portfolio/src/data/notes.ts):
- Add published write-up items to `publishedNotes` array. If empty, the website automatically displays a clean roadmap of planned topics.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Saba Ramzan DevOps Portfolio"
   git branch -M main
   git remote add origin https://github.com/sabaramzan123/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/portfolio/'` (matching your GitHub repository name).
2. Run `npm run build`.
3. Deploy the `dist` folder to the `gh-pages` branch using `gh-pages` package or a GitHub Actions workflow.

---

## 📄 License & Attribution
Designed and built for **Saba Ramzan**. Free to use and customize for personal career presentation.
