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
        title="Srijan Kumar"
        surface="surf2"
        className="mt-6"
      >
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-6">
          <p className="text-[color:var(--muted)] leading-relaxed text-base">
            I’m Srijan Kumar, a Software Engineer focused on full‑stack web apps, system design, and performance
            optimization. I build SaaS products and clean, responsive interfaces with Next.js, React, TypeScript, and
            Tailwind—backed by robust APIs, data models, and CI/CD on AWS. Recent work includes improving Lighthouse
            performance (55→90+), tightening Core Web Vitals, and shipping developer‑friendly tooling with Convex/Clerk
            auth and end‑to‑end type safety.
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
{/* Invel Technologies */}
<div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Freelance Software Engineer (Front-End Developer) — Invel Technologies</div>
<div className="text-xs text-[color:var(--muted)]">Aug 2025 – Present · Remote/India</div>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--muted)]">
<li>Delivered a production-ready front‑end with <strong>React (TypeScript)</strong> and <strong>Tailwind CSS</strong>.</li>
<li>Applied system design principles to build scalable front‑end architecture and deployed on <strong>AWS</strong>.</li>
<li>Optimized React components, improving <strong>Lighthouse</strong> score from <strong>55 → 90+</strong>.</li>
<li>Worked with client stakeholders to gather requirements, design features, and align technical deliverables with business goals.</li>
<li>Ensured mobile best practices; shipped a fully responsive UI across breakpoints and devices.</li>
</ul>
</div>


{/* Vivatech RnD Pvt Ltd */}
<div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Software Development Intern — Vivatech RnD Pvt Ltd</div>
<div className="text-xs text-[color:var(--muted)]">Jun 2025 – Jul 2025 · Kolkata/Remote</div>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--muted)]">
<li>Implemented UI components in <strong>React</strong> and integrated backend APIs for an internal web app.</li>
<li>Debugged and optimized code, reducing load times by <strong>15%</strong> for client‑facing tools.</li>
<li>Collaborated in a cross‑functional team of 6 within an <strong>Agile</strong> workflow (stand‑ups, sprint planning, code reviews).</li>
<li>Wrote unit tests for core modules, improving test coverage and reducing post‑deployment defects.</li>
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
              <div className="text-lg font-medium">B.Tech, Computer Science & Engineering</div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surf1)] px-2 py-0.5 text-xs">
                2022–2026
              </span>
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">Manipal University, Jaipur</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {["DSA", "OOP", "DBMS", "Networks", "OS"].map((c) => (
                <span key={c} className="rounded-full border border-[color:var(--border)] bg-white/5 px-2 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
            <div className="text-sm">
              NPTEL — Design &amp; Analysis of Algorithms; Database Systems; Optimisation for ML · Cisco Networking Academy — CCNAv7 (Switching, Routing &amp; Wireless Essentials; Introduction to Networks)
            </div>
          </div>
        </div>
      </Section>

      {/* Contact (bottom) */}
      <Section id="contact" overline="Contact" title="Let’s connect" surface="surf1" className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:ksrijan09@gmail.com"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm hover:bg-[color:var(--surf2)]"
          >
            Email
          </a>
          {/* TODO: update LinkedIn once available */}
          <a
            href="https://github.com/Itsmilotic"
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
