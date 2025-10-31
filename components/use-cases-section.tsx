import { Radar, Search, RefreshCw, ShieldCheck, Workflow, Sparkles } from "lucide-react"

const useCases = [
  {
    icon: Radar,
    title: "Threat Detection & Alert Tuning",
    tagline: "Reduce noise and spotlight the alerts that actually threaten revenue.",
  },
  {
    icon: Search,
    title: "Threat Hunting",
    tagline: "Give hunters narrative-rich context to surface hidden attackers fast.",
  },
  {
    icon: RefreshCw,
    title: "Incident Response & Root Cause Analysis",
    tagline: "Frame every breach in minutes with curated attack flows.",
  },
  {
    icon: ShieldCheck,
    title: "Security Content Validation & Adversary Emulation",
    tagline: "Run real-world chains to prove detections work before attackers strike.",
  },
  {
    icon: Workflow,
    title: "SOC Playbook Automation & Enrichment",
    tagline: "Turn every alert into an orchestrated, stage-aware response.",
  },
  {
    icon: Sparkles,
    title: "Threat Intel & Enrichment + Model Training",
    tagline: "Fuel intel teams and AI models with high-fidelity attack narratives.",
  },
]

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative bg-background px-4 py-24 text-foreground sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)] opacity-60 sm:opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.14),_transparent_60%)] opacity-50 sm:opacity-70" />
      <div className="absolute inset-x-0 top-12 h-32 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl sm:h-48" />
      <div className="absolute inset-x-0 -bottom-12 h-40 bg-gradient-to-t from-accent/15 via-transparent to-transparent blur-3xl sm:-bottom-24 sm:h-64" />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col gap-12 pb-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-mono uppercase tracking-[0.35em] text-primary">
              Real-world wins
            </span>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Use Cases that Close the Value Gap
            </h2>
            <p className="text-lg text-muted-foreground">
              Show stakeholders how Attack Vector compresses security outcomes. Each play encapsulates the workflow,
              evidence, and ROI language you need to convert pilots into production deals.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Executive-ready narratives
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                SOC-first automation
              </span>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/90 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_25px_60px_-30px_rgba(59,130,246,0.55)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/20">
                      <useCase.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">{useCase.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">{useCase.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
