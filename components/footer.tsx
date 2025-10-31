import { AttackVectorLogo } from "./attack-vector-logo"
import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <AttackVectorLogo className="mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md font-mono text-sm">
              AI-powered Cyber Threat Intelligence. Feed ingestion, MITRE mapping, and analytics — automated.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 font-mono">Links</h3>
            <ul className="space-y-2 text-muted-foreground font-mono text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  X/Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground font-mono text-sm">
          <p>&copy; Attack-Vector 2025 — AI-powered Threat Intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
