"use client"

import Link from "next/link"
import React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navigation() {
  // enable theme toggle with hydration-safe render
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null
    let rafId = 0
    const start = async () => {
      const mod = await import("lenis")
      const Lenis = mod.default
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
      })
      const raf = (time: number) => {
        lenis?.raf(time)
        rafId = window.requestAnimationFrame(raf)
      }
      rafId = window.requestAnimationFrame(raf)
    }
    start()
    return () => {
      window.cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])
  return (
    <nav className="absolute inset-x-0 top-0 w-full z-50 border-none bg-transparent dark:bg-transparent text-black dark:text-white">
      <div className="bg-transparent max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {/* Logo retiré du header, nom conservé */}
          <span className="font-bold text-xl">Clearsight</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm hover:opacity-80 transition-opacity">
            Work
          </Link>
          <Link href="/contact" className="text-sm hover:opacity-80 transition-opacity">
            Contact
          </Link>
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
