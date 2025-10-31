import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-sm">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <HowItWorksSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <BackToTopButton alwaysVisible className="fixed bottom-6 right-6 z-50 shadow-2xl shadow-primary/30" />
      <Footer />
    </div>
  )
}
