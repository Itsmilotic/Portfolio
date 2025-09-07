import { type NextRequest, NextResponse } from "next/server"

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string, limit = 5, windowMs: number = 15 * 60 * 1000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, message, honeypot } = body

    if (honeypot) {
      // Silent fail for bots
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
    }

    // Enhanced validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 })
    }

    if (email.length > 254) {
      return NextResponse.json({ error: "Email is too long" }, { status: 400 })
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: "Message is too long" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const suspiciousPatterns = [
      /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
      /\b(click here|act now|limited time)\b/i,
      /(https?:\/\/[^\s]+){3,}/i, // Multiple URLs
    ]

    const content = `${name} ${email} ${message}`.toLowerCase()
    if (suspiciousPatterns.some((pattern) => pattern.test(content))) {
      return NextResponse.json({ error: "Message flagged as spam" }, { status: 400 })
    }

    // Log the contact form submission (in a real app, you'd send an email or save to database)
    console.log("Contact form submission:", {
      name,
      email,
      message: message.substring(0, 100) + (message.length > 100 ? "..." : ""),
      timestamp: new Date().toISOString(),
      ip: ip.substring(0, 10) + "...", // Partial IP for privacy
    })

    // In a real application, you would:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save the message to a database
    // 3. Send a confirmation email to the user

    // For now, we'll just return a success response
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
