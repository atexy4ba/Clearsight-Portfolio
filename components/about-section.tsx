"use client"

import { Camera, Film, Sparkles } from "lucide-react"

export default function AboutSection() {
  const services = [
    {
      title: "Production vidéo premium",
      description:
        "Films de marque, publicités et contenus courts optimisés pour la conversion et l’impact visuel.",
      icon: Film,
    },
    {
      title: "Photographie éditoriale",
      description: "Shooting produits, lifestyle et campagnes multi-formats avec une direction artistique dédiée.",
      icon: Camera,
    },
    {
      title: "Post-production & motion",
      description: "Montage, étalonnage, sound design et animations pour un rendu cinéma.",
      icon: Sparkles,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Nos services
            </span>
            <h2
              data-animate-title
              className="title-animate text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl"
            >
              L’expérience créative complète, pensée pour votre croissance.
            </h2>
            <p className="text-lg text-muted-foreground">
              De l’idée au rendu final, nous orchestrons chaque étape pour livrer des contenus alignés sur votre
              stratégie de marque.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-background p-6 text-sm text-muted-foreground">
            Trois pôles d’expertise pour accélérer vos lancements, renforcer votre image et générer plus d’engagement.
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 data-animate-title className="title-animate mt-6 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
