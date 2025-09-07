export type Metric = { label: string; value: string };
export type Links = { live?: string; repo?: string; docs?: string };
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  tech: string[];
  highlights: string[];
  metrics?: Metric[];
  links: Links;
  image?: string; // /projects/<slug>/cover.jpg
};

const projects: Project[] = [
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
    ],
    links: {
      live: "https://anav94crisispulse.streamlit.app/",
      repo: "https://github.com/anav94/crisispulse",
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
    metrics: [{ label: "dataset", value: "7043 rows" }],
    links: {
      live: "https://anav94-churnwatch.streamlit.app/",
      repo: "https://github.com/anav94/churnwatch",
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
    links: {
      live: "https://commercestack-y2vphksure7fh4ewgxeiwr.streamlit.app/",
      repo: "https://github.com/anav94/commercestack",
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
    links: {
      live: "https://aqi-nowcast.aqinowcast.workers.dev/",
      repo: "https://github.com/anav94/aqi-nowcast",
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
    links: {
      repo: "https://github.com/anav94/linkedin_automation",
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
    links: {
      live: "ADD_LIVE_LINK",
      repo: "https://github.com/anav94/surroundsound",
    },
    image: "/projects/surroundsound/cover.jpg",
  },
];

export default projects;