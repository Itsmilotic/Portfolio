import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MetricTile } from "@/components/metric-tile"
import { projects } from "@/src/data/content"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Anav Lamba`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(project.subtitle)}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.subtitle,
      images: [`/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(project.subtitle)}`],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.subtitle,
    url: project.links.live,
    codeRepository: project.links.repo,
    thumbnailUrl: project.image,
    programmingLanguage: project.tech,
    author: {
      "@type": "Person",
      name: "Anav Lamba",
      url: "https://github.com/anav94",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="py-8">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            {/* Hero section */}
            <div className="space-y-8 mb-12">
              {/* Cover image */}
              <div className="aspect-video relative overflow-hidden rounded-lg border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* Project header */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-balance">{project.title}</h1>
                  <p className="text-xl text-muted-foreground text-pretty">{project.subtitle}</p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.links.live ? (
                    <Button size="lg" asChild>
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </Link>
                    </Button>
                  ) : (
                    <Button size="lg" disabled className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Coming Soon
                    </Button>
                  )}

                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Link>
                  </Button>

                  {project.links.docs && (
                    <Button size="lg" variant="outline" asChild>
                      <Link
                        href={project.links.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">What & Why</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.subtitle} This project demonstrates modern software engineering practices with a
                          focus on reliability, performance, and maintainability.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Key Highlights</h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Architecture */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Architecture</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="text-4xl">🏗️</div>
                          <p className="text-sm text-muted-foreground">Architecture diagram placeholder</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        System architecture showcasing the key components and data flow patterns used in this project.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tech Stack */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-6">Key Metrics</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <MetricTile key={index} label={metric.label} value={metric.value} />
                    ))}
                  </div>
                </section>
              )}

              {/* Screenshots */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="text-2xl">📱</div>
                            <p className="text-xs text-muted-foreground">Screenshot {i}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Learnings & Next Steps */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Learnings & Next Steps</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Key Learnings</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Gained deep understanding of the chosen tech stack and its ecosystem
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Learned best practices for performance optimization and monitoring
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            Improved skills in system design and architecture patterns
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Future Improvements</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Enhanced monitoring and alerting capabilities
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Additional features based on user feedback
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            Performance optimizations and scalability improvements
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Related projects */}
            <section className="mt-16 pt-12 border-t">
              <h2 className="text-2xl font-semibold mb-6">Other Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <Card key={relatedProject.slug} className="group hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">
                          <Link
                            href={`/projects/${relatedProject.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedProject.title}
                          </Link>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.subtitle}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1">
                          {relatedProject.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
