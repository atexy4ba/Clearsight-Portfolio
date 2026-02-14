"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-primary">Welcome to Clearsight</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
          Visual{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Storytelling</span>{" "}
          at Its Finest
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We transform ideas into compelling visual experiences. From concept to final cut, we deliver cinema-quality
          production for brands and creators.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View Our Work
          </a>
          <a
            href="/brief"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
