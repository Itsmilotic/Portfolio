import { NextResponse } from "next/server"
import { projects } from "@/src/data/content"

export async function GET() {
  try {
    // Return public project data (no sensitive information)
    const publicProjects = projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      subtitle: project.subtitle,
      featured: project.featured,
      tech: project.tech,
      highlights: project.highlights,
      metrics: project.metrics,
      links: project.links,
      image: project.image,
    }))

    return NextResponse.json({
      projects: publicProjects,
      total: publicProjects.length,
      featured: publicProjects.filter((p) => p.featured).length,
    })
  } catch (error) {
    console.error("Projects API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
