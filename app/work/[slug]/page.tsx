import Link from "next/link"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import { projects } from "@/data/projects"

type WorkDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    notFound()
  }

  const isVideo = project.media.type === "video"
  const isWideVideo = isVideo && project.size === "wide"
  const isVerticalVideo = isVideo && (project.size === "tall" || project.size === "square")

  const VideoPlayer = ({ className = "" }: { className?: string }) => (
    <video
      src={project.media.src}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      className={className}
    />
  )

  const ImageDisplay = () => (
    <img
      src={project.media.src}
      alt={project.title}
      className="h-full w-full object-contain"
      loading="lazy"
    />
  )

  const DetailsSection = () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-balance text-3xl font-[var(--font-poly)] font-semibold">Overview</h2>
        <p className="text-lg text-muted-foreground">{project.overview}</p>
      </div>
      <div className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-lg shadow-primary/5">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Deliverables</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {project.deliverables.map((item) => (
            <li key={item} className="flex items-center justify-between border-b border-border/40 pb-2">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative overflow-hidden pt-20 pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{project.service}</p>
              <h1 className="text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl">
                {project.title}
              </h1>
              <p className="text-base text-muted-foreground">{project.client}</p>
            </div>
            <Link
              href="/work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              Retour aux projets
            </Link>
          </div>
        </div>
      </section>

      {/* Media Section - Layout depends on video orientation */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-6">
          {isVerticalVideo ? (
            // Vertical video: Details on LEFT, Video on RIGHT
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-start">
              {/* Details - Left side */}
              <div className="space-y-8 lg:pt-4">
                <DetailsSection />
              </div>

              {/* Video - Right side, fixed 9:16 ratio */}
              <div 
                className="relative rounded-2xl border border-border/60 bg-black/90 shadow-2xl overflow-hidden"
                style={{ aspectRatio: "9/16", maxHeight: "80vh" }}
              >
                <VideoPlayer className="h-full w-full object-contain" />
              </div>
            </div>
          ) : (
            // Wide video or image: 9:16 ratio, details below
            <div className="space-y-8">
              <div 
                className="relative mx-auto rounded-2xl border border-border/60 bg-black/90 shadow-2xl overflow-hidden"
                style={{ aspectRatio: "9/16", maxHeight: "80vh" }}
              >
                {isVideo ? (
                  <VideoPlayer className="h-full w-full object-contain" />
                ) : (
                  <ImageDisplay />
                )}
              </div>
              
              {/* Details below */}
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                <DetailsSection />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-border/60 bg-gradient-to-r from-primary/15 via-background to-primary/10 px-8 py-10 text-center shadow-xl shadow-primary/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Work with us</p>
            <h3 className="mt-4 text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl">
              Prêt à créer une production qui marque les esprits ?
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Parlez-nous de votre projet et construisons une expérience visuelle premium.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
