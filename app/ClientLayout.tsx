"use client"

import type React from "react"
import { Oxanium, Share_Tech_Mono } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-sharetechmono",
  weight: "400",
})

const siteUrl = "https://attack-vector.com"
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Attack-Vector",
  url: siteUrl,
  description:
    "Attack-Vector turns cyber feeds into MITRE-mapped vectors — actionable intelligence ready for detection, response, and automation.",
  logo: `${siteUrl}/placeholder-logo.png`,
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Attack-Vector",
  url: siteUrl,
  description:
    "AI-powered threat intelligence platform for SOC teams and CTI analysts. Transform unstructured feeds into MITRE-aligned insights ready for automation.",
  publisher: {
    "@type": "Organization",
    name: "Attack-Vector",
  },
}

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Attack-Vector",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Any",
  description:
    "Attack-Vector ingests threat feeds, maps them to MITRE ATT&CK, and delivers actionable intelligence for detection, response, and automation.",
  url: siteUrl,
  creator: {
    "@type": "Organization",
    name: "Attack-Vector",
  },
  audience: {
    "@type": "Audience",
    audienceType: "SOC Engineers, CTI Analysts, Security Researchers",
  },
  softwareRequirements: "Modern web browser",
}

function ClientLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${oxanium.variable} ${shareTechMono.variable}`}>
        {children}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <Script
          id="ld-softwareapp"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </body>
    </html>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense
      fallback={
        <html lang="en" className="dark">
          <body className={`font-sans ${oxanium.variable} ${shareTechMono.variable}`}>
            <div>Loading...</div>
          </body>
        </html>
      }
    >
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}
