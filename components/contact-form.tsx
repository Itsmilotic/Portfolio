"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { trackCTAClick } from "@/lib/analytics"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    trackCTAClick("Contact Form Submit", "Contact Section")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("website"),
    }

    if (data.honeypot) {
      // Silent fail for bots
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks! I'll get back to you soon.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <CardDescription>Send me a message and I'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <Input
              id="contact-name"
              name="name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
              aria-describedby="name-error"
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your email address
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
              aria-describedby="email-error"
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Your message..."
              rows={4}
              required
              disabled={isSubmitting}
              aria-describedby="message-error"
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
          <Button
            type="submit"
            className="w-full focus:ring-2 focus:ring-ring focus:ring-offset-2"
            disabled={isSubmitting}
            aria-describedby={isSubmitting ? "submitting-status" : undefined}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {isSubmitting && (
            <span id="submitting-status" className="sr-only">
              Form is being submitted, please wait
            </span>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
