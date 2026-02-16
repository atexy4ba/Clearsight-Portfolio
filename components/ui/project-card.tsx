"use client"

import Link from "next/link"
import { useRef } from "react"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  className?: string
}

const sizeClasses: Record<NonNullable<Project["size"]>, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const mediaClassName = `h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] group-hover:grayscale-0 grayscale`
  const mediaWrapperClass = `relative overflow-hidden ${sizeClasses[project.size ?? "square"]}`

  return (
    <Link href={`/work/${project.slug}`} className="block">
      <article
        className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card/60 shadow-xl shadow-primary/5 transition hover:-translate-y-1 ${className ?? ""}`}
      >
        <div className={mediaWrapperClass}>
          {project.media.type === "video" ? (
            <video
              ref={videoRef}
              src={encodeURI(project.media.src)}
              poster={project.media.poster ? encodeURI(project.media.poster) : undefined}
              muted
              loop
              playsInline
              preload="metadata"
              className={mediaClassName}
              onMouseEnter={() => {
                if (!videoRef.current) return
                videoRef.current.currentTime = 0
                void videoRef.current.play()
              }}
              onMouseLeave={() => {
                if (!videoRef.current) return
                videoRef.current.pause()
              }}
            />
          ) : (
            <img src={encodeURI(project.media.src)} alt={project.title} className={mediaClassName} loading="lazy" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-90 transition group-hover:opacity-70" />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4 px-6 pb-6 pt-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>{project.service}</span>
            <span>{project.client}</span>
          </div>
          <h3 className="text-balance text-2xl font-[var(--font-poly)] font-semibold">{project.title}</h3>
        </div>
      </article>
    </Link>
  )
}
