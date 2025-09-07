interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  // Only track in production and respect user preferences
  if (typeof window === "undefined" || process.env.NODE_ENV !== "production") {
    return
  }

  // Check if user has opted out of analytics
  if (localStorage.getItem("analytics-opt-out") === "true") {
    return
  }

  // Simple event tracking without PII
  try {
    // In a real implementation, this would send to your analytics service
    console.log("[Analytics]", { action, category, label, value, timestamp: Date.now() })

    // Example: Send to a lightweight analytics endpoint
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, category, label, value, timestamp: Date.now() }),
    }).catch(() => {
      // Fail silently - analytics should never break the user experience
    })
  } catch (error) {
    // Fail silently
  }
}

// Track CTA clicks
export function trackCTAClick(cta: string, location?: string) {
  trackEvent({
    action: "click",
    category: "CTA",
    label: `${cta}${location ? ` - ${location}` : ""}`,
  })
}

// Track section views
export function trackSectionView(section: string) {
  trackEvent({
    action: "view",
    category: "Section",
    label: section,
  })
}
