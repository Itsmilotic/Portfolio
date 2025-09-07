"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/skeleton"
import type { Project } from "@/src/data/content"
import { MetricTile } from "./metric-tile"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
  onQuickView?: (project: Project) => void
}

function getProjectStatus(project: Project): string | null {
  if (project.slug === "linkedin-automation" || project.slug === "surroundsound") return "Stable"
  if (project.slug === "crisispulse") return "New"
  return null
}

export function ProjectCard({ project, onQuickView }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const status = getProjectStatus(project)

  return (
    <Card className="group overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 relative">
      {status && (
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant={status === "New" ? "default" : status === "Stable" ? "secondary" : "outline"}
            className="text-xs shadow-sm"
          >
            {status}
          </Badge>
        </div>
      )}

      <div className="aspect-video relative overflow-hidden">
        {!imageLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project screenshot`}
          fill
          className={`object-cover transition-all duration-200 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-primary transition-colors focus:outline-none focus:text-primary"
                aria-describedby={`project-${project.slug}-description`}
              >
                {project.title}
              </Link>
            </CardTitle>
            <CardDescription id={`project-${project.slug}-description`} className="text-sm mt-1 line-clamp-2">
              {project.subtitle}
            </CardDescription>
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1 mt-3" role="list" aria-label="Technologies used">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs" role="listitem">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-xs" role="listitem">
              +{project.tech.length - 4} more
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Highlights */}
        <ul className="space-y-1 text-sm text-muted-foreground mb-4" role="list" aria-label="Project highlights">
          {project.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="flex items-start gap-2" role="listitem">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1 mb-4">
          <img
            src={`https://img.shields.io/github/actions/workflow/status/anav94/${project.slug}/ci.yml?branch=main&style=flat-square&label=CI`}
            alt="CI Status"
            className="h-5"
            loading="lazy"
          />
          {project.links.live && (
            <img
              src={`https://img.shields.io/website?url=${encodeURIComponent(project.links.live)}&style=flat-square&label=uptime`}
              alt="Website Status"
              className="h-5"
              loading="lazy"
            />
          )}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4" role="region" aria-label="Project metrics">
            {project.metrics.slice(0, 2).map((metric, index) => (
              <MetricTile key={index} label={metric.label} value={metric.value} />
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Project links">
          {onQuickView && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onQuickView(project)}
              className="flex items-center gap-1"
              aria-label={`Quick view of ${project.title}`}
            >
              <Eye className="h-3 w-3" aria-hidden="true" />
              Quick View
            </Button>
          )}

          {project.links.live ? (
            <Button
              size="sm"
              asChild
              className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                Live
              </Link>
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
              tooltip="Live coming soon"
              className="flex items-center gap-1"
              aria-label={`Live demo for ${project.title} coming soon`}
            >
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              Live
            </Button>
          )}

          <Button
            size="sm"
            variant="outline"
            asChild
            className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent"
          >
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="h-3 w-3" aria-hidden="true" />
              GitHub
            </Link>
          </Button>

          {project.links.docs && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent"
            >
              <Link
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
                aria-label={`View ${project.title} documentation`}
              >
                <FileText className="h-3 w-3" aria-hidden="true" />
                Docs
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
