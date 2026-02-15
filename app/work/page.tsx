"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"

export default function WorkPage() {
  const services = [
    {
      title: "Production vidéo",
      description: "Campagnes publicitaires, films de marque et contenus courts.",
      tags: ["Brand film", "Social ads", "Documentaire"],
    },
    {
      title: "Photographie",
      description: "Sessions produit, lifestyle et portrait corporate.",
      tags: ["Évènementiel", "Produit", "Portrait"],
    },
    {
      title: "Post-production",
      description: "Montage premium, étalonnage et motion design.",
      tags: ["Montage", "Color grading", "Animation"],
    },
  ]

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate-title]"))
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <section className="pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-6 text-center space-y-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Work
          </span>
          <h1
            data-animate-title
            className="title-animate text-balance text-4xl font-[var(--font-poly)] font-semibold md:text-5xl"
          >
            Nos services en action.
          </h1>
          <p className="text-lg text-muted-foreground">
            Une vision claire par service. Nous compléterons cette page avec vos projets.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 data-animate-title className="title-animate text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
