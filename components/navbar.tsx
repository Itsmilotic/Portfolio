"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const sections = ["about", "projects", "experience", "skills", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");

  // Scrollspy: highlight the current section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const topMost = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topMost?.target?.id) setActive(topMost.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <Link
      href={`#${id}`}
      aria-current={active === id ? "page" : undefined}
      className={`px-2 py-1 text-sm transition hover:text-[color:var(--heading)]
        ${active === id ? "text-[color:var(--heading)]" : "text-[color:var(--muted)]"}`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {/* Left: monogram */}
        <Link
          href="#about"
          className="rounded-lg px-2 py-1 text-sm font-semibold tracking-wide text-[color:var(--heading)]"
        >
          AL
        </Link>

        {/* Center: section links */}
        <div className="hidden gap-3 md:flex">
          <NavLink id="about" label="About" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="experience" label="Experience" />
          <NavLink id="skills" label="Skills" />
          <NavLink id="education" label="Education" />
          <NavLink id="contact" label="Contact" />
        </div>

        {/* Right: Resume → LinkedIn → GitHub */}
        <div className="flex items-center gap-2">
          <Link
            href="/Anav_Lamba_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-[color:var(--accent)] px-3 py-1.5 text-sm text-white hover:brightness-110"
          >
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/anav-lamba-446686289/"
            target="_blank"
            rel="noopener"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm hover:bg-[color:var(--surf2)]"
          >
            LinkedIn
          </Link>
          <Link
            aria-label="GitHub"
            href="https://github.com/anav94"
            target="_blank"
            rel="noopener"
            className="rounded-lg p-2 text-[color:var(--muted)] hover:bg-white/5 hover:text-[color:var(--heading)]"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}