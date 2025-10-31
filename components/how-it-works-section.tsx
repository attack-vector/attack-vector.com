import { BarChart3, Cpu, Database, Map } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "01 — Ingest",
    description: "Automatically gather cyber threat data from RSS feeds, PDFs, and trusted intelligence sources.",
  },
  {
    icon: Cpu,
    title: "02 — Extract",
    description: "Use AI-driven language models to convert unstructured reports into structured, machine-readable intelligence.",
  },
  {
    icon: Map,
    title: "03 — Map",
    description: "Correlate extracted entities with the MITRE ATT&CK framework for consistent, standardized classification.",
  },
  {
    icon: BarChart3,
    title: "04 — Visualize",
    description: "Explore interactive graphs and JSON APIs that turn threat intelligence into actionable insight.",
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative min-h-screen bg-white py-24 px-4 text-slate-900 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-slate-200/60 md:hidden" />
      <div className="container relative mx-auto flex h-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-mono uppercase tracking-[0.35em] text-slate-500">
            How it works
          </span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">Automate your intel pipeline end-to-end</h2>
          <p className="text-lg text-slate-600">
            Every stage is orchestrated so analysts can focus on decisions—not data hygiene. From ingestion to insight, the
            flow stays transparent and audit-ready.
          </p>
        </div>

        <div className="grid w-full gap-6 md:gap-8 lg:max-w-xl">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(59,130,246,0.45)]"
            >
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-mono text-lg font-semibold">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-primary" aria-hidden />
                    <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-base text-slate-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
