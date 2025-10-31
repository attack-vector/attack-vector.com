import { FlaskConical, Search, Shield } from "lucide-react"

const personas = [
  {
    icon: Search,
    title: "CTI Analysts",
    benefit: "Automate threat report analysis and focus on high-value intelligence work.",
  },
  {
    icon: Shield,
    title: "SOC Engineers",
    benefit: "Get real-time structured threat data integrated into your security operations.",
  },
  {
    icon: FlaskConical,
    title: "Security Researchers",
    benefit: "Access comprehensive threat databases with MITRE mapping and graph analytics.",
  },
]

export function HeroSection() {
  return (
    <section
      id="waitlist"
      className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/20 to-background/30" />
      </div>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-10" />
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Beta access
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Fully automated feed-to-intelligence <span className="text-primary">pipeline.</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Attack-Vector turns cyber feeds into MITRE-mapped vectors — actionable intelligence ready for detection, response and automation.
          </p>

          <div className="mb-12 space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {personas.map((persona) => (
                <div
                  key={persona.title}
                  className="group rounded-2xl border border-border/50 bg-background/70 p-5 text-center shadow-[0_20px_45px_-30px_rgba(59,130,246,0.55)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_60px_-35px_rgba(59,130,246,0.6)]"
                >
                  <div className="relative mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                    <persona.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{persona.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-mono leading-relaxed">
                    {persona.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>RSS + PDF Parsing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>LLM-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>MITRE Mapping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
