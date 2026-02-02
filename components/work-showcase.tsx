"use client"

import type React from "react"

import { Package, Film, Camera, Music, Palette } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  categoryIcon: React.ReactNode
  image: string
  description: string
  fullDescription: string
  year: string
  services: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Brand Renaissance",
    category: "Commercial Video",
    categoryIcon: <Film className="w-5 h-5" />,
    image: "/modern-brand-commercial-video-production.jpg",
    description: "A cinematic brand story that redefined visual identity for a tech startup.",
    fullDescription:
      "We created a comprehensive brand video suite that transformed how a fast-growing tech startup communicates its vision. From concept development through final color grading, this project showcases dynamic cinematography, strategic storytelling, and premium production values. The series became the cornerstone of their marketing strategy across all platforms.",
    year: "2024",
    services: ["Cinematography", "Color Grading", "Sound Design", "Editing"],
  },
  {
    id: 2,
    title: "Urban Landscapes",
    category: "Documentary",
    categoryIcon: <Camera className="w-5 h-5" />,
    image: "/urban-city-documentary-photography.jpg",
    description: "Capturing the essence of metropolitan life through a visual lens.",
    fullDescription:
      "An intimate documentary photography series exploring urban culture and human connection in metropolitan environments. Shot across multiple cities over 12 months, this project highlights authentic moments, architectural beauty, and cultural diversity. Each image tells a story of modern city life, blending reportage with artistic vision.",
    year: "2024",
    services: ["Documentary Photography", "Curation", "Post-Processing", "Exhibition Design"],
  },
  {
    id: 3,
    title: "Product Evolution",
    category: "Product Photography",
    categoryIcon: <Package className="w-5 h-5" />,
    image: "/luxury-product-photography-studio.jpg",
    description: "High-end product photography showcasing craftsmanship and design.",
    fullDescription:
      "A luxury product photography campaign for a premium accessories brand. We developed a distinctive visual language that emphasizes craftsmanship, materials, and attention to detail. Lighting, composition, and post-processing were carefully orchestrated to create images that elevate the brand perception and drive e-commerce conversions.",
    year: "2024",
    services: ["Product Photography", "Styling", "Lighting Design", "E-commerce Optimization"],
  },
  {
    id: 4,
    title: "Concert Experience",
    category: "Music Video",
    categoryIcon: <Music className="w-5 h-5" />,
    image: "/concert-music-video-live-performance.jpg",
    description: "Dynamic live event coverage with professional color grading.",
    fullDescription:
      "High-energy live concert documentation and music video production. We captured the raw energy and emotion of a major live performance, utilizing multiple camera angles, stabilization techniques, and dynamic editing. Professional color grading brought cinematic quality to every frame, creating a video asset suitable for broadcast and streaming platforms.",
    year: "2023",
    services: ["Live Event Coverage", "Multi-Camera Direction", "Color Grading", "Motion Graphics"],
  },
  {
    id: 5,
    title: "Fashion Forward",
    category: "Fashion Photography",
    categoryIcon: <Palette className="w-5 h-5" />,
    image: "/fashion-photography-runway-editorial.jpg",
    description: "Editorial fashion photography pushing creative boundaries.",
    fullDescription:
      "An editorial fashion campaign that blends high fashion with conceptual art direction. We collaborated with designers and stylists to create a series that challenges conventional fashion photography. The result is a bold, artistic collection that has been featured in major fashion publications and elevated the brand's creative reputation.",
    year: "2023",
    services: ["Fashion Photography", "Art Direction", "Styling Consultation", "Retouching"],
  },
  {
    id: 6,
    title: "Corporate Identity",
    category: "Branding Video",
    categoryIcon: <Film className="w-5 h-5" />,
    image: "/corporate-branding-video-production.jpg",
    description: "Comprehensive branding campaign with multiple visual assets.",
    fullDescription:
      "A full-scale corporate branding initiative including brand films, internal communications videos, and promotional content. We developed a cohesive visual language that reflects the company's values, culture, and market positioning. The campaign includes long-form documentaries, short social media content, and employee spotlights.",
    year: "2023",
    services: ["Brand Strategy", "Video Production", "Animation", "Sound Design"],
  },
]

export default function WorkShowcase() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 pt-8">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Portfolio</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Work That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Speaks</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of projects showcasing our expertise across film, video, photography, and branding.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              {/* Alternating layout */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-lg bg-muted h-96 lg:h-[500px]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-primary">{project.categoryIcon}</div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.fullDescription}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <p className="text-sm text-muted-foreground">Completed: {project.year}</p>
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && <div className="mt-20 border-t border-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
