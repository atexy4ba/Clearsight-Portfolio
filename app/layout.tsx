import type React from "react"
import type { Metadata } from "next"
import { Outfit, Poly } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer"

const outfit = Outfit({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"] })
const poly = Poly({ subsets: ["latin"], weight: ["400"], variable: "--font-poly" })

export const metadata: Metadata = {
  title: "Clearsight - Production Studio",
  description: "Clearsight is a creative production studio specializing in film, video, and photography.",
  openGraph: {
    title: "Clearsight - Production Studio",
    description: "Creative production studio specializing in film, video, and photography.",
    images: [
      {
        url: "/logo%20csp.png", // Must be an absolute URL in production
        width: 800,
        height: 600,
        alt: "Clearsight Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${outfit.className} ${poly.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster richColors />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
