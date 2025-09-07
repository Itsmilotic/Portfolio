import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/src/data/content"

interface TimelineItemProps {
  experience: Experience
  isLast?: boolean
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 pb-8">
      {/* Timeline line */}
      {!isLast && <div className="absolute left-4 top-8 w-px h-full bg-border" aria-hidden="true" />}

      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-foreground">{experience.role}</h3>
            <p className="text-sm text-muted-foreground">{experience.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <Badge variant="outline" className="text-xs w-fit">
              {experience.start} - {experience.end}
            </Badge>
            <span className="text-xs text-muted-foreground">{experience.location}</span>
          </div>
        </div>

        <ul className="space-y-1">
          {experience.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
