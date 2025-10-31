"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

interface BackToTopButtonProps {
  alwaysVisibleAbove?: number
  alwaysVisible?: boolean
  className?: string
}

export function BackToTopButton({
  alwaysVisibleAbove = 240,
  alwaysVisible = false,
  className,
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(alwaysVisible)

  useEffect(() => {
    if (alwaysVisible) {
      return
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > alwaysVisibleAbove)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [alwaysVisible, alwaysVisibleAbove])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/90 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${className ?? ""}`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
      Top
    </button>
  )
}
