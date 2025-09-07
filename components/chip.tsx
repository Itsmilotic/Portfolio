import type React from "react"
import { Badge } from "@/components/ui/badge"

interface ChipProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "destructive"
  status?: "stable" | "in-progress" | "new" | "deprecated"
}

export function Chip({ children, variant = "default", status }: ChipProps) {
  // Map status to appropriate styling
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "stable":
        return "default"
      case "in-progress":
        return "secondary"
      case "new":
        return "default"
      case "deprecated":
        return "outline"
      default:
        return variant
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "new":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "deprecated":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      default:
        return ""
    }
  }

  if (status) {
    return (
      <Badge variant="outline" className={`${getStatusColor(status)} border-current`}>
        {children}
      </Badge>
    )
  }

  return <Badge variant={getStatusVariant(variant as any)}>{children}</Badge>
}
