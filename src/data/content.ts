export interface Project {
  slug: string
  title: string
  subtitle: string
  featured: boolean
  tech: string[]
  highlights: string[]
  metrics: { label: string; value: string }[]
  links: {
    live?: string
    repo: string
    docs?: string
  }
  image: string
}

export interface WorkingOnItem {
  title: string
  status: string
  due: string
  bullets: string[]
}

export interface SiteData {
  name: string
  role: string
  email: string
  blurb: string
  socials: {
    github: string
    linkedin: string
  }
}

export interface Education {
  school: string
  degree: string
  start: string
  end: string
  gpa: string
  coursework: string[]
}

export interface Experience {
  company: string
  role: string
  start: string
  end: string
  location: string
  bullets: string[]
  logo?: string
}

export interface Note {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export const site: SiteData = {
  name: "Anav Lamba",
  role: "Software Engineer (B.Tech CCE, MUJ '26)",
  email: "anavlamba94@gmail.com",
  blurb: "Streaming data, ML apps, and production-minded web frontends.",
  socials: {
    github: "https://github.com/anav94",
    linkedin: "ADD_LINKEDIN_URL",
  },
}

export const projects: Project[] = [
  {
    slug: "crisispulse",
    title: "CrisisPulse",
    subtitle: "Real-time crisis intelligence pipeline: from noisy feeds → clean, geo-tagged incidents.",
    featured: true,
    tech: ["Python", "FastAPI", "Kafka/Redpanda", "ClickHouse", "Docker", "Grafana"],
    highlights: [
      "Streaming ingestion, de-duplication, geo-enrichment, severity scoring",
      "API with /health and Prometheus /metrics; dashboard-ready",
      "Data quality checks and CI on every push",
    ],
    metrics: [
      { label: "p95 latency", value: "TBD" },
      { label: "error rate", value: "TBD" },
      { label: "alerts SLA", value: "TBD" },
    ],
    links: {
      live: "https://crisispulse.streamlit.app",
      repo: "https://github.com/anav94/crisispulse",
      docs: "ADD_DOCS_URL",
    },
    image: "/projects/crisispulse/cover.jpg",
  },
  {
    slug: "churnwatch",
    title: "ChurnWatch",
    subtitle: "Telco churn insights app with cohorts, what-if analysis, and explainability.",
    featured: true,
    tech: ["Python", "Pandas", "scikit-learn", "Streamlit"],
    highlights: [
      "Cohort analysis + scenario testing for retention levers",
      "Clean UX with exportable charts",
      "Model explainability (feature importances)",
    ],
    metrics: [
      { label: "dataset size", value: "7043 rows (Telco sample)" },
      { label: "AUC (baseline)", value: "TBD" },
    ],
    links: {
      live: "ADD_LIVE_LINK",
      repo: "https://github.com/anav94/churnwatch",
      docs: "ADD_DOCS_URL",
    },
    image: "/projects/churnwatch/cover.jpg",
  },
  {
    slug: "commercestack",
    title: "CommerceStack",
    subtitle: "Minimal e-commerce stack with product listing, cart, and payments-ready flow.",
    featured: true,
    tech: ["React", "Node/Express", "MongoDB"],
    highlights: ["Clean cart + state management", "Product filters and search", "Stripe-ready checkout placeholder"],
    metrics: [{ label: "core vitals", value: "TBD" }],
    links: {
      live: "ADD_LIVE_LINK",
      repo: "https://github.com/anav94/commercestack",
      docs: "ADD_DOCS_URL",
    },
    image: "/projects/commercestack/cover.jpg",
  },
  {
    slug: "cloud-aqi",
    title: "Cloud AQI Nowcast",
    subtitle: "Serverless AQI nowcast with clean API + frontend, deployed on Vercel.",
    featured: true,
    tech: ["Next.js", "Node", "Vercel", "REST"],
    highlights: ["Simple API endpoint + ISR page", "City search with cached results", "CI deploy on push to main"],
    metrics: [{ label: "API p95", value: "TBD" }],
    links: {
      live: "ADD_LIVE_LINK",
      repo: "https://github.com/anav94/aqi-nowcast",
      docs: "ADD_DOCS_URL",
    },
    image: "/projects/cloud-aqi/cover.jpg",
  },
  {
    slug: "linkedin-automation",
    title: "LinkedIn Automation Bot",
    subtitle: "Selenium bot to search profiles/pages, scrape signals, and export to Excel + email.",
    featured: false,
    tech: ["Python", "Selenium", "XLSX", "SMTP"],
    highlights: ["Input-driven runs from an Excel sheet", "Cleans data and emails a summary report"],
    metrics: [{ label: "run time/100 queries", value: "TBD" }],
    links: {
      repo: "https://github.com/anav94/linkedin_automation",
      docs: "ADD_DOCS_URL",
    },
    image: "/projects/linkedin-automation/cover.jpg",
  },
  {
    slug: "surroundsound",
    title: "SurroundSound",
    subtitle: "Spotify Top-100 recommender using content similarity.",
    featured: false,
    tech: ["Python", "Pandas", "scikit-learn"],
    highlights: ["Cosine similarity on artist/genre features", "Fast recommendations with caching"],
    metrics: [{ label: "recall@10 (sample)", value: "TBD" }],
    links: {
      live: "ADD_LIVE_LINK",
      repo: "https://github.com/anav94/surroundsound",
    },
    image: "/projects/surroundsound/cover.jpg",
  },
]

export const workingOn: WorkingOnItem[] = [
  {
    title: "Automation pipeline for AS eqpt Private Limited",
    status: "In progress",
    due: "This month",
    bullets: [
      "Prototype data collection + OCR for tender/compressor workflows",
      "Daily ETL to Google Sheets; weekly email digest of leads",
    ],
  },
]

export const education: Education[] = [
  {
    school: "Manipal University Jaipur",
    degree: "B.Tech, Computer & Communication Engineering",
    start: "2022",
    end: "2026",
    gpa: "9.44",
    coursework: ["Algorithms", "OOP", "Data Science", "RDBMS", "AI/ML"],
  },
]

export const certifications: string[] = [
  "IBM Software Engineering",
  "NPTEL: Design & Analysis of Algorithms",
  "CISCO: Python Essentials 1 & 2",
  "NPTEL: DBMS",
  "Google AI Essentials (in progress)",
]

export const experience: Experience[] = [
  {
    company: "BPAAS Solutions",
    role: "Software Engineering Intern",
    start: "May 2025",
    end: "Aug 2025",
    location: "Remote/India",
    bullets: [
      "Built Python Selenium automation to search LinkedIn profiles/pages from Excel inputs",
      "Scraped + cleaned signals; exported to XLSX and emailed summary reports",
      "Modular runner with retries/error handling; Git/GitHub collaboration",
      "Packaged for repeatable runs",
    ],
  },
  {
    company: "AS Eqpt Private Limited",
    role: "Automation Pipeline (Freelance)",
    start: "In progress",
    end: "Present",
    location: "Remote",
    bullets: [
      "Prototype OCR + data collection for tender/compressor workflows",
      "Daily ETL to Google Sheets; weekly email digest of leads",
      "Simple web UI for status & exports (planned)",
    ],
  },
]

export const notes: Note[] = [
  {
    slug: "crisispulse-lessons",
    title: "What I learned building CrisisPulse",
    date: "2024-12-15",
    excerpt: "Streaming, dedup, geo-enrichment with ClickHouse.",
    tags: ["streaming", "clickhouse", "python"],
  },
  {
    slug: "vercel-isr-basics",
    title: "Next.js on Vercel: ISR + edge caching",
    date: "2024-12-10",
    excerpt: "When to regenerate and how to think about cache.",
    tags: ["nextjs", "vercel"],
  },
  {
    slug: "dedup-geo-enrichment",
    title: "Practical dedup + geo-enrichment tips",
    date: "2024-12-05",
    excerpt: "From raw feed to useful incident data.",
    tags: ["data", "pipelines"],
  },
]

export const skills = {
  Languages: ["Python", "JavaScript/TypeScript", "C/C++", "Java"],
  "Backend/ML": ["FastAPI", "scikit-learn", "Pandas", "NumPy"],
  "Data/Infra": ["Kafka/Redpanda", "ClickHouse", "Postgres", "MongoDB", "Docker"],
  Frontend: ["React", "Next.js", "Tailwind"],
  "Cloud/Tools": ["Vercel", "Git/GitHub", "CI/CD", "Grafana basics"],
}

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)
