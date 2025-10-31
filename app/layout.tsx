import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const siteUrl = "https://attack-vector.com"
const title = "Attack-Vector – AI-Powered Cyber Threat Intelligence"
const description =
  "Attack-Vector turns cyber feeds into MITRE-mapped vectors — actionable intelligence ready for detection, response, and automation."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Attack-Vector",
  },
  description,
  applicationName: "Attack-Vector",
  generator: "v0.app",
  keywords: [
    "cyber threat intelligence",
    "MITRE ATT&CK",
    "security automation",
    "threat feed ingestion",
    "cybersecurity analytics",
    "security operations",
    "SOC automation",
    "threat intelligence platform",
    "attack surface monitoring",
    "AI cyber intelligence",
  ],
  authors: [{ name: "Attack-Vector" }],
  creator: "Attack-Vector",
  publisher: "Attack-Vector",
  category: "Technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Attack-Vector",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/conected_world.png",
        width: 1200,
        height: 675,
        alt: "Visualization of Attack-Vector threat intelligence platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/conected_world.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.svg",
  },
  other: {
    "theme-color": "#0F172A",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
