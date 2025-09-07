interface MetricTileProps {
  label: string
  value: string
  className?: string
}

export function MetricTile({ label, value, className = "" }: MetricTileProps) {
  return (
    <div className={`bg-muted/50 rounded-lg p-3 text-center ${className}`}>
      <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{label}</div>
      <div className="text-sm font-semibold mt-1 text-foreground">{value}</div>
    </div>
  )
}
