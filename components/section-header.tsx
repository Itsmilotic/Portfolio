interface SectionHeaderProps {
  overline?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ overline, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center space-y-2 ${className}`}>
      {overline && <div className="text-sm font-medium text-primary uppercase tracking-wide">{overline}</div>}
      <h2 className="text-3xl font-bold tracking-tight text-balance">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
