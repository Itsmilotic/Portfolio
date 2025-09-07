"use client"

import type React from "react"

import Link from "next/link"
import { trackCTAClick } from "@/lib/analytics"
import type { ComponentProps } from "react"

interface EnhancedLinkProps extends ComponentProps<typeof Link> {
  trackingLabel?: string
  trackingLocation?: string
}

export function EnhancedLink({ trackingLabel, trackingLocation, onClick, children, ...props }: EnhancedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trackingLabel) {
      trackCTAClick(trackingLabel, trackingLocation)
    }
    onClick?.(e)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
