const groups: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL"],
  Backend_ML: ["FastAPI", "Node.js", "Express", "scikit-learn", "Pandas", "NumPy"],
  Data_Infra: ["Kafka/Redpanda", "ClickHouse", "Postgres", "MongoDB", "Docker"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Cloud_Tools: ["Vercel", "Git/GitHub", "CI/CD", "Grafana (basics)"],
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