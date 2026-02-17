"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data/projects"

export default function WorkPage() {
  const reseauxSociauxProjects = projects.filter((p) => p.service === "Réseaux Sociaux")
  const persoProjects = projects.filter((p) => p.service === "Projets Personnels")

  const clients = ["Garden Pépinière", "Coco Spa", "GR", "Les Frères K"]

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
      
      {/* Header Section */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 text-center space-y-4 relative z-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </span>
          <h1
            data-animate-title
            className="title-animate text-balance text-4xl font-[var(--font-poly)] font-semibold md:text-5xl"
          >
            Nos Réalisations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une exploration visuelle de nos collaborations clients et de nos projets créatifs.
          </p>
        </div>
      </section>

      {/* Réseaux Sociaux Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-6 mb-16">
             <div className="h-px bg-border flex-1"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-widest text-center px-4">
               Réseaux Sociaux
             </h2>
             <div className="h-px bg-border flex-1"></div>
          </div>
           
           <div className="space-y-24">
             {clients.map((client) => {
               const clientProjects = reseauxSociauxProjects.filter((p) => p.client === client)
               if (clientProjects.length === 0) return null

               return (
                 <div key={client} className="space-y-8">
                   <div className="flex items-baseline gap-4 border-b border-border/50 pb-4">
                     <h3 className="text-2xl font-serif font-semibold text-foreground/90">
                       {client}
                     </h3>
                     <span className="text-sm text-muted-foreground uppercase tracking-wider">
                       {clientProjects.length} {clientProjects.length > 1 ? 'projets' : 'projet'}
                     </span>
                   </div>
                   
                   <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 [column-fill:_balance]">
                     {clientProjects.map((project, index) => (
                        <div key={project.id} className="mb-6 break-inside-avoid">
                           <ProjectCard project={project} />
                        </div>
                     ))}
                   </div>
                 </div>
               )
             })}
           </div>
        </div>
      </section>

      {/* Perso Section */}
      <section className="py-24 bg-secondary/5 mt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-6 mb-16">
             <div className="h-px bg-border flex-1"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-widest text-center px-4">
               Projets Personnels
             </h2>
             <div className="h-px bg-border flex-1"></div>
          </div>

           <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 [column-fill:_balance]">
              {persoProjects.map((project) => (
                 <div key={project.id} className="mb-6 break-inside-avoid">
                    <ProjectCard project={project} />
                 </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  )
}
