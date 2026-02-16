"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Navigation from "@/components/navigation"
import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data/projects"

const filters = ["Tous", "Production Vidéo", "Photographie", "Post-prod"] as const
type Filter = (typeof filters)[number]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous")
  const visibleProjects = useMemo(
    () => (activeFilter === "Tous" ? projects : projects.filter((project) => project.service === activeFilter)),
    [activeFilter],
  )

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
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 text-center space-y-4 relative z-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Work
          </span>
          <h1
            data-animate-title
            className="title-animate text-balance text-4xl font-[var(--font-poly)] font-semibold md:text-5xl"
          >
            Des projets conçus pour marquer la rétine.
          </h1>
          <p className="text-lg text-muted-foreground">
            Une sélection immersive par service, pensée pour transmettre l’énergie et la précision de chaque production.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {filters.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className="relative pb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition hover:text-primary"
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-filter-pill"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-primary"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {filter}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div layout className="columns-1 gap-6 sm:columns-2 xl:columns-3 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 break-inside-avoid"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
