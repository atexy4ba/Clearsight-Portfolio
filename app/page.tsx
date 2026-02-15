"use client"

import Link from "next/link"
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroMinimal from "@/components/hero-minimal"
import AboutSection from "@/components/about-section"
import ClientsBento from "@/components/clients-bento"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const serviceTypes = [
    {
      title: "Photographie",
      description: "Des images fortes adaptées à chaque environnement.",
      items: ["Événementiel", "Produit & e-commerce", "Portrait corporate"],
    },
    {
      title: "Production vidéo",
      description: "Des formats pensés pour la conversion et la narration.",
      items: ["Brand film", "Publicité social media", "Vidéos institutionnelles"],
    },
    {
      title: "Post-production",
      description: "Un rendu cinéma pour sublimer chaque détail.",
      items: ["Montage & storytelling", "Étalonnage avancé", "Motion design"],
    },
  ]

  const faqs = [
    {
      question: "Combien de temps pour livrer un projet complet ?",
      answer:
        "Nous définissons un planning précis dès le brief. La plupart des productions sont livrées entre 2 et 6 semaines.",
    },
    {
      question: "Travaillez-vous partout en France et à l’international ?",
      answer:
        "Oui, nous nous déplaçons selon vos besoins. Notre équipe peut gérer des tournages locaux ou internationaux.",
    },
    {
      question: "Proposez-vous des packs pour plusieurs services ?",
      answer:
        "Oui, nous combinons vidéo, photo et post-production dans des packs sur-mesure pour plus de cohérence.",
    },
    {
      question: "Comment démarre un projet avec vous ?",
      answer:
        "Un call de 20 minutes suffit pour cadrer vos objectifs. Ensuite, nous vous proposons un plan créatif clair.",
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
      <HeroMinimal />
      <ClientsBento />
      <AboutSection />

      <section id="types" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Types de services
              </span>
            <h2
              data-animate-title
              className="title-animate text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl"
            >
                Chaque service se décline selon vos besoins.
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous construisons des offres modulaires pour couvrir tous les formats : évènementiel, produit, corporate
                ou campagnes digitales.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Discuter de votre projet
              </Link>
            </div>

            <div className="space-y-6">
              {serviceTypes.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="space-y-2">
                    <h3 data-animate-title className="title-animate text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-semibold text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </span>
            <h2
              data-animate-title
              className="title-animate text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl"
            >
              Les réponses aux questions les plus fréquentes.
            </h2>
          </div>
          <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger data-animate-title className="title-animate text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-border/60 bg-gradient-to-r from-primary/15 via-background to-primary/10 px-8 py-12 text-center shadow-xl shadow-primary/10 md:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Newsletter</p>
            <h2
              data-animate-title
              className="title-animate mt-4 text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl"
            >
              Restons connectés pour vos prochains lancements.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un seul canal pour recevoir nos inspirations créatives et réserver vos dates de tournage.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Contacter le studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
