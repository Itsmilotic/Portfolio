import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";

export default function Page() {
  return (
    <main className="pb-16">
      <Navbar />

      {/* About (first) */}
      <Section
  id="about"
  overline="About"
  title="Anav Lamba"
  surface="surf2"
  className="mt-6"
>
  <div className="text-[color:var(--muted)] leading-relaxed max-w-3xl">
    <p>
      I’m Anav Lamba, a Computer & Communication Engineering student passionate
      about software engineering and data systems. I’ve built ML-powered apps,
      real-time pipelines, and cloud-hosted platforms — all showcased here. My
      next goal is to join a team where I can work on scalable backend systems,
      AI-driven applications, and cloud infrastructure.
    </p>
  </div>
</Section>
      {/* Projects */}
      <Section
        id="projects"
        overline="Projects"
        title="Featured work"
        subtitle="Click a card for quick view; open full case study for details."
        surface="surf1"
      >
        <ProjectsGrid />
      </Section>

      {/* Experience */}
      <Section id="experience" overline="Experience" title="Roles & impact" surface="surf2">
        <div className="space-y-4">
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">BPAAS Solutions — Software Engineering Intern</div>
              <div className="text-xs text-[color:var(--muted)]">May 2025 – Aug 2025 · Remote/India</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--muted)]">
              <li>Selenium automation to search LinkedIn profiles/pages from Excel inputs</li>
              <li>Scraped &amp; cleaned signals; exported to XLSX; emailed summary reports</li>
              <li>Modular runner with retries; packaged for repeatable runs</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">AS Eqpt Pvt. Ltd. — Automation Pipeline (Freelance)</div>
              <div className="text-xs text-[color:var(--muted)]">In progress</div>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--muted)]">
              <li>Prototype OCR + data collection for tender/compressor workflows</li>
              <li>Daily ETL to Google Sheets; weekly email digest of leads</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" overline="Skills" title="What I work with" surface="surf1">
        <SkillsSection />
      </Section>

      {/* Education */}
      <Section id="education" overline="Education" title="Education & Certifications" surface="surf2">
        <div className="space-y-4">
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">
                B.Tech, Computer &amp; Communication Engineering — Manipal University Jaipur
              </div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surf1)] px-2 py-0.5 text-xs">
                CGPA 9.44
              </span>
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">2022–2026</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Algorithms", "OOP", "Data Science", "RDBMS", "AI/ML"].map((c) => (
                <span key={c} className="rounded-full border border-[color:var(--border)] bg-white/5 px-2 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
            <div className="text-sm">
              Certifications: IBM Software Engineering, NPTEL DAA, CISCO Python 1 &amp; 2, NPTEL DBMS, Google AI
              Essentials (in progress)
            </div>
          </div>
        </div>
      </Section>

      {/* Contact (bottom) */}
      <Section id="contact" overline="Contact" title="Let’s connect" surface="surf1" className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:anavlamba94@gmail.com"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm hover:bg-[color:var(--surf2)]"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/anav-lamba-446686289/"
            target="_blank"
            rel="noopener"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm hover:bg-[color:var(--surf2)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anav94"
            target="_blank"
            rel="noopener"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm hover:bg-[color:var(--surf2)]"
          >
            GitHub
          </a>
        </div>
      </Section>
    </main>
  );
}