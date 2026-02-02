"use client"

import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl">Clearsight</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm hover:text-primary transition-colors">
            Work
          </Link>
          <a href="/#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
