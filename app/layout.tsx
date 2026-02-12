import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const outfit = Outfit({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Clearsight - Production Studio",
  description: "Clearsight is a creative production studio specializing in film, video, and photography.",
  icons: {
    icon: [
      {
        url: "/logo%20csp.png",
        type: "image/png",
      },
    ],
    apple: "/logo%20csp.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors />
          <footer className="mt-20 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo%20csp.png" alt="Clearsight logo" className="h-10 w-auto object-contain" />
                <span className="font-semibold">Clearsight</span>
              </div>
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Clearsight. All rights reserved.</p>
            </div>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
