"use client"

import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function HeroMinimal() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dkgm3e8z5";
  const videoSrc = `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/v1771266114/cvfinal_gqiwa2`;

  const heroLines = ["Des visuels qui font", "vibrer votre marque"]
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px] opacity-70" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/40 blur-[140px] opacity-50" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Studio visuel nouvelle génération
            </div>

            <h1
              data-animate-title
              className="title-animate text-balance text-[clamp(2.4rem,5.4vw,4.75rem)] font-[var(--font-poly)] font-semibold leading-[1.05]"
            >
              <span className="sr-only">{heroLines.join(" ")}</span>
              <span aria-hidden className="hero-title">
                {heroLines.map((line, index) => (
                  <span
                    key={line}
                    className="hero-line"
                    style={{ animationDelay: `${index * 160}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Nous concevons des vidéos, des campagnes photo et des contenus narratifs avec un rendu premium pour les
              marques ambitieuses.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Voir nos réalisations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Lancer un projet
                <PlayCircle className="h-4 w-4" />
              </Link>
            </div>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-2xl opacity-80" />
          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-black/90 shadow-2xl [transform:perspective(1200px)_rotateX(8deg)_rotateY(-12deg)_skewY(-2deg)] transition duration-700 hover:[transform:perspective(1200px)_rotateX(2deg)_rotateY(-6deg)_skewY(-1deg)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={`https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto,so_0/v1771266114/cvfinal_gqiwa2.jpg`}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc + ".mp4"} type="video/mp4" />
              <source src={videoSrc.replace('f_auto', 'f_webm') + ".webm"} type="video/webm" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
