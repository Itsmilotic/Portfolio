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
    title: "SaaS - Online Code Editor",
    subtitle: "Browser-based IDE allowing users to write, execute, and preview code in real time.",
    featured: true,
    tech: ["Next.js", "TypeScript", "Convex", "Clerk", "AWS", "Monaco Editor"],
    highlights: [
      "Engineered a SaaS platform that lets users write, execute, and preview code directly in the browser.",
      "Implemented live output rendering and advanced syntax highlighting to replicate a full IDE experience.",
      "Integrated Convex (backend) and Clerk (authentication) for secure, scalable user management.",
      "Designed cloud-ready architecture supporting AWS deployment for global scalability and monetisation.",
    ],
    links: {
      live: "https://code-editor-rrf4.vercel.app/",
      repo: "https://github.com/Itsmilotic/saas-online-code-editor",
    },
    image: "/projects/saas-online-code-editor/cover.png",
  },
  { slug: "ai-notes",
      title: "AI Notes - Modern Next.js 15 Note-Taking Web App with AI Assistance",
      subtitle: "Full-stack SaaS note-taking experience with conversational AI and PDF workflows.",
      featured: true,
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Radix UI", "Prisma", "Supabase", "Google Gemini API", "PgBouncer", "Vercel"], highlights: [ "Led end-to-end development of a modern note-taking platform with persistent storage using Prisma and Supabase.",
         "Integrated Google Gemini API for conversational question answering and PDF summarisation, cutting manual analysis time by ~70%.", "Implemented real-time server actions, optimistic UI updates, and pooled database connectivity with PgBouncer on Vercel to reduce cold starts by 90%.", ],
      links: { 
        repo: "https://github.com/Itsmilotic/ai-noteTaker",
         live: "https://ai-note-taker-omega.vercel.app/", 
      }, 
      image: "/projects/ai-notes/cover.png",
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone (Full-Stack Web App)",
    subtitle: "Full-stack booking platform replicating Airbnb's listings, authentication, and reservations.",
    featured: false,
    tech: ["React.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    highlights: [
      "Developed a booking platform replicating Airbnb's core features: listings, reservations, and authentication.",
      "Built with the MERN stack to demonstrate modern full-stack patterns and scalability.",
      "Implemented search filters, map integration, and personalised dashboards for hosts and guests.",
    ],
    links: {
      repo: "https://github.com/Itsmilotic/airbnb-clone",
    },
    image: "/projects/airbnb-clone/cover.png",
  },
  {
    slug: "pokedex-website",
    title: "Pokedex Website",
    subtitle: "Single-page Pokedex built with HTML, CSS, and JavaScript fetching live data from the PokeAPI.",
    featured: false,
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "PokeAPI"],
    highlights: [
      "Browse and search Pokemon by name or ID with a responsive grid layout.",
      "Dynamic Pokemon cards showing stats, abilities, and sprite details.",
      "Theme toggle for light and dark accessibility.",
      "Data fetched from PokeAPI with on-demand rendering and caching.",
      "Planned enhancements include filtering, sorting, and comparison tooling.",
    ],
    links: {
      repo: "https://github.com/Itsmilotic/Pokedex",
      live: "https://itsmilotic.github.io/Pokedex/",
    },
    image: "/projects/pokedex-website/cover.png",
  },
];

export default projects;
