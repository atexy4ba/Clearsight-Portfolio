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
    <section className="w-full py-8">
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-4 w-max">
          {duplicated.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="flex-shrink-0 h-24 md:h-28 w-40 md:w-48 flex items-center justify-center"
            >
              <img
                src={encodeURI(src)}
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
