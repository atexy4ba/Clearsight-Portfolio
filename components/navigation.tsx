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
          <Link href="/brief" className="text-sm hover:opacity-80 transition-opacity">
            Brief
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

