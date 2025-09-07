"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surf1)] shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-[color:var(--border)]">
      <div className="relative h-44 w-full bg-[color:var(--surf3)]">
        <Image
          src={project.image || "/og.jpg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[color:var(--heading)]">{project.title}</h3>
        <p className="mt-1 text-sm text-[color:var(--muted)]">{project.subtitle}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surf3)]/80 px-2 py-1 text-[11px] text-[color:var(--muted)]">
              {t}
            </span>
          ))}
        </div>

        {project.highlights?.length ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[color:var(--muted)]">
            {project.highlights.slice(0, 4).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex items-center gap-3">
          {project.links.live ? (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 rounded-lg bg-[color:var(--accent)] px-3 py-1.5 text-sm text-white hover:brightness-110"
            >
              <ExternalLink size={14} /> Live
            </Link>
          ) : (
            <button
              aria-disabled
              title="Live coming soon"
              className="inline-flex cursor-not-allowed items-center gap-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm text-[color:var(--muted)]"
            >
              <ExternalLink size={14} /> Live
            </button>
          )}
          {project.links.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--surf3)] px-3 py-1.5 text-sm text-[color:var(--muted)] hover:bg-[color:var(--surf2)]"
            >
              <Github size={14} /> GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}