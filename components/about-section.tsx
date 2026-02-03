"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number"

export default function AboutSection() {
  const stats = [
    { value: 5, suffix: "+", label: "Ans d'expérience" },
    { value: 50, suffix: "+", label: "Projets réalisés" },
    { value: 100, suffix: "%", label: "Satisfaction client" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">À Propos de Clearsight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Clearsight est un studio de production créatif spécialisé dans la création de contenus visuels d'exception.
            Avec plus de cinq ans d'expérience, nous avons concrétisé les visions de cinquante clients à travers des
            films, vidéos commerciales et photographies qui capturent l'essence de leurs marques.
          </p>
        </div>

        {/* Video */}
        <div className="border border-border rounded-lg overflow-hidden">
          <AspectRatio ratio={21 / 9}>
            <video
              src="/cv%20final.mp4"
              controls
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>

        {/* Stats (animated slowly, blue numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="space-y-2">
                <div className="text-5xl font-bold">
                  <SlidingNumber
                    className="text-primary"
                    number={stat.value}
                    fromNumber={0}
                    decimalPlaces={0}
                    transition={{ stiffness: 60, damping: 28, mass: 0.6 }}
                    delay={80 * index}
                    inView={true}
                    inViewOnce={true}
                  />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="border border-border rounded-lg p-8 md:p-12">
          <p className="text-foreground leading-relaxed space-y-4">
            <span className="block">
              Notre passion réside dans la transformation d'idées en expériences visuelles captivantes. Chaque projet
              est une opportunité de repousser les limites créatives et de livrer des contenus qui marquent les esprits.
            </span>
            <span className="block">
              De la pré-production à la post-production, nous mettons en œuvre une expertise complète pour garantir que
              votre vision devient réalité avec la plus haute qualité.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}