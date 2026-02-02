"use client"

import { ArrowRight } from "lucide-react"
import AnimatedText from "./animated-text"

export default function HeroMinimal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Minimal tagline */}
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">Creative Production Studio</p>

        {/* Clean headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-balance">
          We Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            <AnimatedText text="Visual Moments" />
          </span>
        </h1>

        {/* Minimal description */}
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          From concept to final frame. Film, video, and photography that tell your story.
        </p>

        {/* Clean CTA */}
        <a
          href="/work"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Explore Our Work
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
