"use client"

import { useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Hash, FileText } from "lucide-react"
import { projects } from "@/src/data/content"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const sections = [
  { id: "hero", label: "Hero", icon: Hash },
  { id: "about", label: "About", icon: Hash },
  { id: "projects", label: "Projects", icon: Hash },
  { id: "skills", label: "Skills", icon: Hash },
  { id: "education", label: "Education", icon: Hash },
  { id: "experience", label: "Experience", icon: Hash },
  { id: "contact", label: "Contact", icon: Hash },
  { id: "writing", label: "Writing", icon: Hash },
]

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onOpenChange(false)
    }
  }

  const navigateToProject = (slug: string) => {
    window.location.href = `/projects/${slug}`
    onOpenChange(false)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search sections and projects..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Sections">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <CommandItem
                key={section.id}
                onSelect={() => scrollToSection(section.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                <span>{section.label}</span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.slug}
              onSelect={() => navigateToProject(project.slug)}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              <span>{project.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
