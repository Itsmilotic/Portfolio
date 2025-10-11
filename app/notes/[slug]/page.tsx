import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { notes } from "@/src/data/content"

interface NotePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }))
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const note = notes.find((n) => n.slug === params.slug)

  if (!note) {
    return {
      title: "Note Not Found",
    }
  }

  return {
    title: `${note.title} | Srijan Kumar`,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
      tags: note.tags,
    },
  }
}

export default function NotePage({ params }: NotePageProps) {
  const note = notes.find((n) => n.slug === params.slug)

  if (!note) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#writing" className="hover:text-foreground transition-colors">
                Writing
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{note.title}</li>
          </ol>
        </nav>

        {/* Back button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/#writing" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Writing
          </Link>
        </Button>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{note.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={note.date}>
                {new Date(note.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">{note.excerpt}</p>
        </header>

        {/* Article content placeholder */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">This is a placeholder for the full article content.</p>
            <p className="text-sm text-muted-foreground">
              In a real implementation, this would contain the full markdown content for "{note.title}".
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
