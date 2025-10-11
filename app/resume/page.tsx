import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Resume - Srijan Kumar",
  description:
    "Software Engineer — full-stack web, system design, and performance optimization. Next.js/React/TypeScript, Convex/Clerk, AWS deployments.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex gap-2">
              <Button asChild>
                <Link href="/Srijan_Kumar_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/Srijan_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in New Tab
                </Link>
              </Button>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="aspect-[8.5/11] w-full">
              <iframe src="/Srijan_Kumar_Resume.pdf" className="h-full w-full" title="Srijan Kumar — Resume" />
            </div>
          </div>

          {/* Fallback message */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>
              Can't see the resume?
              <Link
                href="/Srijan_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:underline"
              >
                Click here to view it directly
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
