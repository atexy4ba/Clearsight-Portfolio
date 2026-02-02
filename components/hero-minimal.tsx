"use client"

import { ArrowRight } from "lucide-react"
// Removed unused AnimatedText import
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function HeroMinimal() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const hasScrolledRef = useRef(false)
  const playedRef = useRef(false)
  const initialScrollRef = useRef(0)
  const line1 = "WE CREATE"
  const line2 = "VISUAL MOMENTS"

  useEffect(() => {
    if (!headlineRef.current) return

    initialScrollRef.current = window.scrollY || 0
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(headlineRef.current!.querySelectorAll('.char'))

      gsap.set(chars, { y: 40, opacity: 0 })

      const tl = gsap.timeline({ paused: true })
      tl.to(chars, {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        duration: 0.9,
        stagger: 0.045,
      })

      // ScrollTrigger: n’active pas la timeline tant que l’utilisateur n’a pas scrollé
      const trigger = ScrollTrigger.create({
        trigger: headlineRef.current!,
        start: 'top 75%',
        onEnter: () => {
          if (playedRef.current) return
          if (!hasScrolledRef.current) return
          tl.play()
          playedRef.current = true
        },
        onEnterBack: () => {
          if (playedRef.current) return
          if (!hasScrolledRef.current) return
          tl.play()
          playedRef.current = true
        },
      })

      const handleUserScroll = () => {
        if (playedRef.current) return
        const delta = Math.abs((window.scrollY || 0) - initialScrollRef.current)
        if (!hasScrolledRef.current && delta < 20) return
        hasScrolledRef.current = true
        const el = headlineRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          tl.play()
          playedRef.current = true
        }
      }

      window.addEventListener('scroll', handleUserScroll, { passive: true })
      window.addEventListener('wheel', handleUserScroll, { passive: true })
      window.addEventListener('touchmove', handleUserScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleUserScroll)
        window.removeEventListener('wheel', handleUserScroll)
        window.removeEventListener('touchmove', handleUserScroll)
        trigger?.kill()
      }
    }, headlineRef)

    return () => ctx.revert()
  }, [])

  // supprimer l’ancienne constante
  // const textToAnimate = "WE CREATE VISUAL MOMENTS"

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-20">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
    
      <div className="relative z-10 max-w-5xl md:max-w-6xl mx-auto px-6 text-center mt-[10vh] md:mt-[14vh] lg:mt-[15vh]">
        {/* Minimal tagline */}
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
          <span className="font-bold">Creative Productions Studio</span>
        </p>
    
        {/* Clean headline */}
        <h1
          ref={headlineRef}
          className="flex flex-col items-center gap-2 text-center text-[clamp(1.5rem,10vw,6rem)] md:text-[clamp(2rem,8vw,6rem)] lg:text-[clamp(2.5rem,7vw,8rem)] font-bold mb-8 leading-tight text-black dark:text-white"
        >
          <span className="inline-block whitespace-nowrap mx-auto">
            {Array.from(line1).map((char, i) => (
              <span
                key={`l1-${i}`}
                className={`char inline-block ${i > 0 && line1[i - 1] !== " " && char !== " " ? "-ml-[0.035em]" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="inline-block whitespace-nowrap mx-auto w-fit px-6 sm:px-8 md:px-10 lg:px-12">
            {Array.from(line2).map((char, i) => (
              <span
                key={`l2-${i}`}
                className={`char inline-block ${i > 0 && line2[i - 1] !== " " && char !== " " ? "-ml-[0.035em]" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>
    
        {/* Minimal description -> requested h3 */}
        <h3 className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
          From concept to final frame film video and photography that tell your story
        </h3>
    
        {/* Clean CTA */}
        <a
          href="/work"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Explore Our Work
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
