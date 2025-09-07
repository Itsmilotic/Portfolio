import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsGrid() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-[color:var(--heading)]">More Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}