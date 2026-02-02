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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-gradient-to-b from-white/90 via-white/70 to-transparent dark:from-white/90 dark:via-white/70 dark:to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="/logo%20csp.png"
            alt="Clearsight logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-bold text-xl">Clearsight</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm hover:text-primary transition-colors">
            Work
          </Link>
          <a href="/#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
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
