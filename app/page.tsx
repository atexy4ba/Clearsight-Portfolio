"use client"

import Navigation from "@/components/navigation"
import HeroMinimal from "@/components/hero-minimal"
import AboutSection from "@/components/about-section"
import ClientsBento from "@/components/clients-bento"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroMinimal />
      {/* Removed the temporary demo block as requested */}
      <AboutSection />
      <ClientsBento />
    </main>
  )
}
