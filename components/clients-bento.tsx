"use client"

import React from "react"

export default function ClientsBento() {
  const logos = [
    "/logos/aci logo.png",
    "/logos/nosoclean logo.png",
    "/logos/caar.png",
    "/logos/logo garden_Plan de travail 1.png",
    "/logos/simo deco logo.png",
    "/logos/baha - 1.png",
    "/logos/1658421527758.png",
    "/logos/coco-03.png",
  ];
  const duplicated = [...logos, ...logos];

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trusted by brands
          </span>
          <h2
            data-animate-title
            className="title-animate text-balance text-3xl font-[var(--font-poly)] font-semibold md:text-4xl"
          >
            Des partenaires qui partagent la même exigence.
          </h2>
        </div>
      </div>
      <div className="mt-8 overflow-hidden border-y border-border/60 bg-card/40 py-6">
        <div className="marquee-track flex items-center gap-10 w-max px-6">
          {duplicated.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="flex-shrink-0 h-16 md:h-20 w-40 md:w-48 flex items-center justify-center opacity-90 transition hover:opacity-100"
            >
              <img
                src={src}
                alt="Logo client"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
