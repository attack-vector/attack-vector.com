"use client"

import { useEffect, useState } from "react"
import { AttackVectorLogo } from "./attack-vector-logo"
import { Button } from "./ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-2 inset-x-0 z-50 px-3 transition-all duration-300 ease-in-out md:top-4 lg:px-0
      `}
    >
      <div
        className={`
          mx-auto flex w-full max-w-5xl flex-col items-stretch justify-center gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 md:flex-row md:items-center md:gap-6 md:px-6
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-primary/40 shadow-2xl shadow-primary/10"
              : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        <div className="mx-auto flex items-center justify-center transition-transform duration-200 hover:scale-105 md:mx-0">
          <AttackVectorLogo />
        </div>

        <nav className="flex w-full flex-wrap items-center justify-center gap-3 text-center md:w-auto md:gap-6">
          <a
            href="#how-it-works"
            className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-mono text-xs md:text-sm"
          >
            How It Works
          </a>
          <a
            href="#use-cases"
            className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-mono text-xs md:text-sm"
          >
            Use Cases
          </a>
        </nav>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:ml-auto md:items-center">
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 font-mono w-full sm:w-auto"
          >
            <a href="#beta-form" className="flex items-center gap-2">
              Get Early Access
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
