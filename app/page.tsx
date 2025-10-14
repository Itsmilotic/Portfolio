import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";

const aboutHighlights = [
  "Full-stack web apps with Next.js and React",
  "Performance tuning that drives Core Web Vitals",
  "Type-safe APIs with Convex, Clerk, and modern tooling",
  "AWS-backed CI/CD and production observability",
];

const experiences = [
  {
    company: "Invel Technologies",
    title: "Freelance Software Engineer (Front-End)",
    timeframe: "Aug 2025 - Present",
    location: "Remote / India",
    points: [
      "Shipped a production-ready front end with React (TypeScript) and Tailwind CSS.",
      "Applied system design principles so the UI layer scales with future product growth.",
      "Optimised Lighthouse scores from 55 to 90+ by trimming bundle weight and tuning loading states.",
      "Partnered with stakeholders to align requirements, prototypes, and delivery timelines.",
      "Verified responsive behaviour across breakpoints to guarantee a consistent mobile experience.",
    ],
  },
  {
    company: "Vivatech RnD Pvt Ltd",
    title: "Software Development Intern",
    timeframe: "Jun 2025 - Jul 2025",
    location: "Kolkata / Remote",
    points: [
      "Built reusable React components and stitched backend APIs into an internal dashboard.",
      "Debugged performance bottlenecks, reducing load times by roughly fifteen percent.",
      "Collaborated with a six-person squad operating on an Agile cadence (stand-ups, sprint planning, reviews).",
      "Wrote unit tests around core flows to raise coverage and cut post-release defects.",
    ],
  },
];

const certificationList = [
  "AWS Cloud Practitioner Essentials (Completed Oct 2025)",
  "NPTEL: Design & Analysis of Algorithms",
  "NPTEL: Database Systems",
  "Cisco Networking Academy: CCNAv7 (SRWE & ITN)",
];

const courseworkTags = ["DSA", "OOP", "DBMS", "Networks", "Operating Systems"];

export default function Page() {
  return (
    <main className="pb-24 md:pb-32">
      <Navbar />

      <Section id="about" overline="About" title="Srijan Kumar">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.04] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)] sm:p-8">
            <p className="text-base leading-relaxed text-[color:var(--muted)]">
              I am a software engineer focused on building full-stack products that feel fast, resilient, and
              maintainable. My toolkit leans on Next.js, React, TypeScript, and Tailwind CSS on the front end, supported by
              type-safe APIs, clean data models, and automated pipelines running on AWS. Recent work centred on turning
              Lighthouse scores from the mid-fifties into consistent ninety-plus results while tightening Core Web Vitals
              and introducing developer-friendly tooling backed by Convex and Clerk.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[color:var(--muted)] shadow-[0_12px_32px_-28px_rgba(0,0,0,0.9)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]/80">
                Spotlight Metrics
              </h3>
              <div className="mt-5 space-y-4 text-sm text-[color:var(--muted)]">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[color:var(--foreground)]">55 -> 90+</span>
                  <span>Lighthouse performance improvements</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[color:var(--foreground)]">Core Web Vitals</span>
                  <span>Continuous monitoring and regression budgets</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[color:var(--foreground)]">AWS CI/CD</span>
                  <span>Pipelines for automated deploys and rollbacks</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]/80">
                Core Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Clerk", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        overline="Projects"
        title="Featured Work"
        subtitle="Click a card for the quick view or open the full case study for deeper context."
        surface="surf1"
      >
        <ProjectsGrid />
      </Section>

      <Section id="experience" overline="Experience" title="Roles & Impact" surface="surf2">
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-[1.25rem] border border-white/12 bg-white/[0.04] p-6 shadow-[0_22px_55px_-34px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1 sm:p-8"
            >
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]/70">
                  {experience.timeframe}
                </p>
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]/60">
                  {experience.location}
                </span>
              </header>

              <div className="mt-3 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-[color:var(--heading)]">{experience.title}</h3>
                <p className="text-sm text-[color:var(--muted)]">{experience.company}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[color:var(--muted)]">
                {experience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" overline="Skills" title="What I Work With" surface="surf1">
        <SkillsSection />
      </Section>

      <Section id="education" overline="Education" title="Education & Certifications" surface="surf2">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)] sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--heading)]">
                  B.Tech, Computer Science & Engineering
                </h3>
                <p className="text-sm text-[color:var(--muted)]">Manipal University, Jaipur</p>
              </div>
              <span className="mt-2 inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)] sm:mt-0">
                2022 - 2026
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {courseworkTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)] sm:p-8">
            <h3 className="text-lg font-semibold text-[color:var(--heading)]">Certifications & Courses</h3>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
              {certificationList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" overline="Contact" title="Let's Connect" surface="surf1" className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:ksrijan09@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b1412] transition hover:bg-[color:var(--accent)]/85"
          >
            Email
          </a>
          <a
            href="https://github.com/Itsmilotic"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:border-white/20 hover:text-[color:var(--foreground)]"
          >
            GitHub
          </a>
        </div>
      </Section>
    </main>
  );
}
