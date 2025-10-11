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
    slug: "saas-online-code-editor",
    title: "SaaS – Online Code Editor",
    subtitle:
      "Browser-based IDE allowing users to write, execute, and preview code in real time.",
    featured: true,
    tech: ["Next.js", "TypeScript", "Convex", "Clerk", "AWS", "Monaco Editor"],
    highlights: [
      "Engineered a SaaS platform enabling users to write, execute, and preview code in real time directly from the browser.",
      "Implemented live output rendering and advanced syntax highlighting, replicating professional IDE experience.",
      "Integrated Convex (backend) and Clerk (authentication) for secure and scalable user management.",
      "Designed cloud-ready architecture supporting AWS deployment for global scalability and monetization.",
    ],
    links: {
      live: "https://code-editor-rrf4.vercel.app/",
      repo: "https://github.com/Itsmilotic/saas-online-code-editor",
    },
    image: "/projects/saas-online-code-editor/cover.png",
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone (Full-Stack Web App)",
    subtitle:
      "Full-stack booking platform replicating Airbnb’s listings, authentication, and reservations.",
    featured: true,
    tech: ["React.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    highlights: [
      "Developed a full-stack booking platform replicating Airbnb’s core features: property listings, reservations, authentication, and responsive design.",
      "Built with MERN stack (React.js, Tailwind CSS, MongoDB) showcasing modern full-stack scalability.",
      "Implemented advanced features such as search filters, map integration, and user dashboards.",
    ],
    links: {
      repo: "https://github.com/Itsmilotic/airbnb-clone",
    },
    image: "/projects/airbnb-clone/cover.png",
  },
  {
    slug: "pokedex-website",
    title: "Pokedex Website",
    subtitle:
      "Web-based Pokedex built with HTML, CSS, and JavaScript fetching live data from the PokeAPI.",
    featured: false,
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "PokeAPI"],
    highlights: [
      "Browse and search Pokémon by name or ID with responsive grid layout.",
      "Dynamic Pokémon cards showing stats, abilities, and details.",
      "Theme toggle for light/dark accessibility.",
      "Data fetched from PokeAPI with real-time rendering.",
      "Future updates include filters, sorting, and comparison features.",
    ],
    links: {
      repo: "https://github.com/Itsmilotic/Pokedex",
      live: "https://itsmilotic.github.io/Pokedex/",
    },
    image: "/projects/pokedex-website/cover.png",
  },
];

export default projects;
