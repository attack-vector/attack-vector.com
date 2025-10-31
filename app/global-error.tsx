"use client"

import { Oxanium, Share_Tech_Mono } from "next/font/google"

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-sharetechmono",
  weight: "400",
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)

  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${oxanium.variable} ${shareTechMono.variable}`}>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center text-foreground">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Unexpected Error</p>
            <h1 className="mt-2 text-3xl font-bold">Something went wrong</h1>
          </div>
          {error.digest && <p className="text-xs text-muted-foreground">Error id: {error.digest}</p>}
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
