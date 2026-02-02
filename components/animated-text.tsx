"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedCount(index)
        index++
      } else {
        clearInterval(interval)
      }
    }, 80) // Increased from 50ms to 80ms for slower typing

    return () => clearInterval(interval)
  }, [text])

  return (
    <span className={className}>
      <style>{`
        @keyframes wavy {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .wavy-char {
          display: inline-block;
          animation: wavy 0.6s ease-in-out infinite;
        }
      `}</style>
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className={index < displayedCount ? "wavy-char" : ""}
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {char}
        </span>
      ))}
      {displayedCount < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}
