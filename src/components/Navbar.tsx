"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const sections = ["about", "projects", "experience", "skills", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.4, 0.6, 0.8] }
    );

    const watched = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    watched.forEach((el) => observer.observe(el));

    return () => {
      watched.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <Link
      href={`#${id}`}
      aria-current={active === id ? "page" : undefined}
      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors
        ${active === id ? "bg-white/12 text-[color:var(--foreground)] shadow-[0_0_0_1px_rgba(255,255,255,0.16)]" : "text-[color:var(--muted)] hover:bg-white/6 hover:text-[color:var(--foreground)]"}`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/12 bg-[color:var(--bg)]/78 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="#about"
          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)] transition hover:border-white/20 hover:bg-white/[0.08]"
          aria-label="Srijan Kumar - Home"
        >
          SK
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink id="about" label="About" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="experience" label="Experience" />
          <NavLink id="skills" label="Skills" />
          <NavLink id="education" label="Education" />
          <NavLink id="contact" label="Contact" />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/Srijan_Kumar_Resume"
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0d1413] transition hover:bg-[color:var(--accent)]/85 md:inline-flex"
          >
            Resume
          </Link>

          <Link
            href="https://www.linkedin.com/in/srijan-kumar-27b1a5330/"
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[color:var(--muted)] transition hover:border-white/20 hover:text-[color:var(--foreground)] md:inline-flex"
          >
            LinkedIn
          </Link>

          <Link
            aria-label="GitHub"
            href="https://github.com/Itsmilotic"
            target="_blank"
            rel="noopener"
            className="rounded-full border border-white/12 bg-white/[0.04] p-2 text-[color:var(--muted)] transition hover:border-white/20 hover:text-[color:var(--foreground)]"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
