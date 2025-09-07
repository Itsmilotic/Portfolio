import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Anav Lamba"
    const subtitle = searchParams.get("subtitle") || "Software Engineer building reliable, measurable systems"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2px, transparent 0), radial-gradient(circle at 75px 75px, #1e293b 2px, transparent 0)",
          backgroundSize: "100px 100px",
          position: "relative",
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "80px",
            zIndex: 1,
          }}
        >
          {/* Logo/Monogram */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#059669",
              marginBottom: "32px",
              fontFamily: "monospace",
            }}
          >
            AL
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#f8fafc",
              marginBottom: "24px",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </p>

          {/* Bottom accent */}
          <div
            style={{
              marginTop: "48px",
              width: "120px",
              height: "4px",
              background: "linear-gradient(90deg, #059669 0%, #10b981 100%)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
