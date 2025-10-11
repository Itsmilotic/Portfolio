const groups: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Data Structures in C++","Java", "SQL", "HTML", "CSS"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Convex"],
  Database_Infra: ["MongoDB", "PostgreSQL"],
  Cloud_Tools: ["AWS (EC2, S3, Lambda)", "Vercel", "Git", "GitHub", "CI/CD", "Clerk"],
  Networking: ["TCP/IP", "HTTP", "DNS fundamentals"],
};




export default function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surf3)] p-4">
          <div className="text-sm font-medium text-[color:var(--heading)]">{group.replace("_", " & ")}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1.5 text-sm text-[color:var(--muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}