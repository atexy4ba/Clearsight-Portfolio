"use client"

import { Play } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "The Brand Renaissance",
    category: "Commercial",
    image: "/modern-brand-commercial-video-production.jpg",
    description: "A cinematic brand story that redefined visual identity for a tech startup.",
  },
  {
    id: 2,
    title: "Urban Landscapes",
    category: "Documentary",
    image: "/urban-city-documentary-photography.jpg",
    description: "Capturing the essence of metropolitan life through a visual lens.",
  },
  {
    id: 3,
    title: "Product Evolution",
    category: "Product Photography",
    image: "/luxury-product-photography-studio.jpg",
    description: "High-end product photography showcasing craftsmanship and design.",
  },
  {
    id: 4,
    title: "Concert Experience",
    category: "Music Video",
    image: "/concert-music-video-live-performance.jpg",
    description: "Dynamic live event coverage with professional color grading.",
  },
  {
    id: 5,
    title: "Fashion Forward",
    category: "Fashion",
    image: "/fashion-photography-runway-editorial.jpg",
    description: "Editorial fashion photography pushing creative boundaries.",
  },
  {
    id: 6,
    title: "Corporate Identity",
    category: "Branding",
    image: "/corporate-branding-video-production.jpg",
    description: "Comprehensive branding campaign with multiple visual assets.",
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated selection of our most compelling projects across diverse industries and mediums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/80 text-primary-foreground">
                    {item.category}
                  </span>
                  <Play className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
