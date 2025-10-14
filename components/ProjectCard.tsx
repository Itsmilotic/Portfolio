"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const isLive = Boolean(project.links.live);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-[color:var(--surf1)]/82 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-white/18">
      <div className="relative h-44 w-full bg-[color:var(--surf3)]/70">
        <Image
          src={project.image || "/og.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1013]/65 via-transparent to-transparent" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]/80">
          {project.featured ? "Featured" : "Project"}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[color:var(--heading)]">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{project.subtitle}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.highlights?.length ? (
          <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--muted)]">
            {project.highlights.slice(0, 4).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-3">
          {isLive ? (
            <Link
              href={project.links.live!}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b1412] transition hover:bg-[color:var(--accent)]/85"
            >
              <ExternalLink size={14} />
              Live
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]/70">
              <ExternalLink size={14} />
              Coming soon
            </span>
          )}

          {project.links.repo ? (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:border-white/18 hover:text-[color:var(--foreground)]"
            >
              <Github size={14} />
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
