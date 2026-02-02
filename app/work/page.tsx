"use client"

import Navigation from "@/components/navigation"
import WorkShowcase from "@/components/work-showcase"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <WorkShowcase />
    </main>
  )
}
