"use client"

import { useRef } from "react"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const articleRef = useRef<HTMLElement | null>(null)

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (articleRef.current) {
      videoRef.current?.play() // Ensure video is playing in fullscreen
      videoRef.current?.requestFullscreen({ navigationUI: "hide" }).catch(err => {
        console.error("Error attempting to enable full-screen mode:", err.message, `(${err.name})`);
      });
    }
  }

  const posterUrl = project.media.src.replace(/\.mp4$/, ".jpg")
  const mediaClassName = "absolute top-0 left-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
  const mediaWrapperClass = "relative overflow-hidden aspect-[16/10] bg-black rounded-t-[2rem]"

  return (
    <article
      ref={articleRef}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-card shadow-lg shadow-primary/5 transition hover:shadow-primary/10 ${className ?? ""}`}
      onClick={handleFullscreen}
      style={{ cursor: 'pointer' }}
    >
      <div className={mediaWrapperClass}>
        <video
          ref={videoRef}
          src={project.media.src}
          poster={posterUrl}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className={mediaClassName}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-6">
        <h3 className="text-balance text-xl font-[var(--font-poly)] font-semibold">{project.title}</h3>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{project.client}</span>
        </div>
      </div>
    </article>
  )
}
