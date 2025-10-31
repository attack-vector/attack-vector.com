"use client"

import { FormEvent, useState } from "react"

import { Button } from "./ui/button"

const useCaseOptions = [
  "Threat Detection & Alert Tuning",
  "Threat Hunting",
  "Incident Response & Root Cause Analysis",
  "Security Content Validation & Adversary Emulation",
  "SOC Playbook Automation & Enrichment",
  "Threat Intel & Enrichment + Model Training",
]

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("https://formspree.io/f/xanlqbne", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      let data: any = null
      try {
        data = await response.json()
      } catch {
        data = null
      }

      if (response.ok) {
        form.reset()
        setIsSubmitted(true)
      } else {
        const message =
          data?.errors?.[0]?.message ??
          data?.error ??
          data?.message ??
          "We couldn't submit your request. Please try again."
        setErrorMessage(message)
      }
    } catch {
      setErrorMessage("We couldn't reach the server. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="beta-form" className="bg-[#05070f] text-slate-100">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-16 h-64 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-64 bg-gradient-to-t from-accent/25 via-transparent to-transparent blur-3xl opacity-60" />
      </div>
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0b1221]/90 shadow-[0_55px_90px_-45px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.15),_transparent_60%)] opacity-70" />
          <div className="relative grid gap-10 p-6 sm:p-8 md:grid-cols-[0.95fr,1.05fr] md:gap-12 md:p-14">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-mono uppercase tracking-[0.3em] text-primary/90">
                Private beta
              </span>
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Tell us how Attack Vector can help your team ship wins faster.
              </h2>
              <p className="text-lg text-slate-300">
                Share a few details about your interest and we&apos;ll follow up with the beta roadmap, timelines, and the
                priority automations we can activate for your team.
              </p>
            </div>

            <div>
              {isSubmitted ? (
                <div className="flex h-full flex-col justify-between rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-100 md:p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-emerald-50">Request received</h3>
                    <p className="text-sm text-emerald-100/80 md:text-base">
                      Thanks for sharing your context. The founding team will reach out shortly with next steps and a
                      tailored onboarding game plan.
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-8 w-full border-emerald-500/40 text-emerald-100 hover:bg-emerald-500/15 md:w-auto"
                    onClick={() => {
                      setIsSubmitted(false)
                      setErrorMessage(null)
                    }}
                  >
                    Send another response
                  </Button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xanlqbne"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="relative z-10 grid gap-4 rounded-3xl border border-slate-800 bg-[#0f182c]/90 p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.7)] md:p-7"
                >
                  <div className="grid gap-3">
                    <div className="grid gap-1">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="fullName"
                        type="text"
                        placeholder="Ada Lovelace"
                        required
                        className="h-10 rounded-lg border border-slate-700 bg-slate-950/60 px-3 font-mono text-xs text-slate-100 shadow-[0_6px_16px_-14px_rgba(15,23,42,0.6)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                    </div>
                    <div className="grid gap-1">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ada.lovelace@acmesecurity.com"
                        required
                        className="h-10 rounded-lg border border-slate-700 bg-slate-950/60 px-3 font-mono text-xs text-slate-100 shadow-[0_6px_16px_-14px_rgba(15,23,42,0.6)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                    </div>
                    <div className="grid gap-1">
                      <label htmlFor="focus" className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                        Priority focus
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {useCaseOptions.map((useCase) => (
                          <label
                            key={useCase}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs font-mono text-slate-200 shadow-[0_6px_16px_-14px_rgba(15,23,42,0.6)] transition hover:border-primary/50 hover:bg-primary/10"
                          >
                            <input
                              type="checkbox"
                              name="priorityUseCases[]"
                              value={useCase}
                              className="size-3.5 rounded border-slate-500 bg-slate-900 text-primary focus:ring-primary/40"
                            />
                            <span>{useCase}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <label htmlFor="notes" className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                        Context (optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        placeholder="Share timelines or team size (140 chars)."
                        rows={3}
                        maxLength={140}
                        className="rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 font-mono text-xs text-slate-100 shadow-[0_6px_16px_-14px_rgba(15,23,42,0.6)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/85 text-primary-foreground font-mono shadow-lg shadow-primary/35"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request Beta Access"}
                  </Button>
                  {errorMessage && (
                    <p className="text-sm font-mono text-red-400" aria-live="assertive">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-xs font-mono text-slate-400">
                    Submissions go straight to the founding team. We&apos;ll reply within a few business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
