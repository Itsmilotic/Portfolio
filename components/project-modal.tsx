"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/src/data/content"
import { MetricTile } from "./metric-tile"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{project.title}</span>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close modal">
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project image */}
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground">{project.subtitle}</p>

          {/* Tech stack */}
          <div>
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.metrics.map((metric, index) => (
                  <MetricTile key={index} label={metric.label} value={metric.value} />
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <Button asChild>
              <Link href={`/projects/${project.slug}`}>View Full Case Study</Link>
            </Button>

            {project.links.live && (
              <Button variant="outline" asChild>
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}

            <Button variant="outline" asChild>
              <Link
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>

            {project.links.docs && (
              <Button variant="outline" asChild>
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
      </DialogContent>
    </Dialog>
  )
}
