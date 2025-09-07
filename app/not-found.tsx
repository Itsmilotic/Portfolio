"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
            <h2 className="text-2xl font-semibold">Page not found</h2>
            <p className="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
