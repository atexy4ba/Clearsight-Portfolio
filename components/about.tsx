"use client"

import { Check } from "lucide-react"

export default function About() {
  const services = [
    "Film & Video Production",
    "Commercial Advertising",
    "Documentary Filmmaking",
    "Product Photography",
    "Event Coverage",
    "Color Grading & Post-Production",
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Brand Partnerships" },
    { number: "8", label: "Years in Industry" },
    { number: "15", label: "Team Members" },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About Clearsight</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2016, Clearsight has been at the forefront of visual storytelling. We combine artistic vision
              with technical excellence to create unforgettable experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our multidisciplinary team brings together filmmakers, photographers, editors, and creative directors who
              share a passion for pushing visual boundaries.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
