const groups: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Data Structures in C++", "Java", "SQL", "HTML", "CSS"],
  Frontend: ["React.js", "Next.js", "Next.js 15", "Tailwind CSS", "Radix UI"],
  Backend: ["Node.js", "Express.js", "Convex", "Prisma"],
  Database_Infra: ["MongoDB", "PostgreSQL", "Supabase", "PgBouncer"],
  Cloud_Tools: ["AWS (EC2, S3, Lambda)", "Vercel", "Git", "GitHub", "CI/CD", "Clerk"],
  Networking: ["TCP/IP", "HTTP", "DNS fundamentals"],
};

export default function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Object.entries(groups).map(([group, items]) => {
        const label = group.replace(/_/g, " ");

        return (
          <article
            key={group}
            className="rounded-[1.25rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]/75">
              {label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
