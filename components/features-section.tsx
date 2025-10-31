import { Rss, Brain, Shield, Code, Settings, Network } from "lucide-react"

const features = [
  {
    icon: Rss,
    title: "RSS + PDF Parsing",
    description: "Ingest threat intelligence from multiple sources automatically.",
  },
  {
    icon: Brain,
    title: "LLM-Powered Analysis",
    description: "AI-driven extraction of structured data from unstructured reports.",
  },
  {
    icon: Shield,
    title: "MITRE Mapping",
    description: "Automatic mapping to MITRE ATT&CK framework for standardization.",
  },
  {
    icon: Code,
    title: "JSON API",
    description: "RESTful API access to all threat intelligence data and analytics.",
  },
  {
    icon: Settings,
    title: "Feed Manager",
    description: "Centralized management of all threat intelligence feeds and sources.",
  },
  {
    icon: Network,
    title: "Graph Visualization",
    description: "Interactive network graphs showing threat relationships and patterns.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground font-mono">
            Everything you need for automated threat intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-mono">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
