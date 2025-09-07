import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Anav Lamba - Software Engineer",
  description:
    "Software Engineer building reliable, measurable systems — streaming pipelines, ML apps, and clean web frontends.",
  generator: "Next.js",
  keywords: ["Software Engineer", "Full Stack Developer", "Machine Learning", "Data Engineering", "React", "Python"],
  authors: [{ name: "Anav Lamba", url: "https://github.com/anav94" }],
  creator: "Anav Lamba",
  other: {
    "application-name": "Anav Lamba Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Anav Lamba",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/icons/browserconfig.xml",
    "msapplication-TileColor": "#10b981",
    "msapplication-tap-highlight": "no",
    "theme-color": "#10b981",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anavlamba.dev",
    title: "Anav Lamba - Software Engineer",
    description:
      "Software Engineer building reliable, measurable systems — streaming pipelines, ML apps, and clean web frontends.",
    siteName: "Anav Lamba Portfolio",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Anav Lamba - Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anav Lamba - Software Engineer",
    description:
      "Software Engineer building reliable, measurable systems — streaming pipelines, ML apps, and clean web frontends.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anav Lamba",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anav Lamba",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer building reliable, measurable systems — streaming pipelines, ML apps, and clean web frontends.",
    url: "https://anavlamba.dev",
    email: "anavlamba94@gmail.com",
    sameAs: ["https://github.com/anav94", "ADD_LINKEDIN_URL"],
    knowsAbout: [
      "Software Engineering",
      "Machine Learning",
      "Data Engineering",
      "Web Development",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Register service worker (PWA-lite) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(e){console.log('SW registration failed:', e)});
                });
              }
            `,
          }}
        />

        {/* Scroll progress bar variable updater */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                function onScroll(){
                  const h = document.documentElement;
                  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight || 1);
                  h.style.setProperty('--scroll', String(scrolled));
                }
                window.addEventListener('scroll', onScroll, { passive: true });
                onScroll();
              })();
            `,
          }}
        />

        {/* Perf hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//img.shields.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      {/* Apply design tokens (make sure globals.css defines --bg, --heading, --accent, etc.) */}
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--heading)] antialiased">
        {/* Top scroll progress bar */}
        <div
          aria-hidden="true"
          className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[color:var(--accent)]/70"
          style={{ transform: "scaleX(var(--scroll, 0))" }}
        />

        {/* Soft gradient backdrop */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 blur-[80px] bg-[radial-gradient(600px_600px_at_20%_10%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_600px_at_80%_30%,rgba(139,92,246,0.20),transparent)]" />
        </div>

        {/* Skip to content (accessibility) */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            {children}
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}