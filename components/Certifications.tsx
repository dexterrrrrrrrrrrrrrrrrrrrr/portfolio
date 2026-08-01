"use client";

import { Award } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const doubled = [...certifications, ...certifications];
  return (
    <section className="relative border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the claims."
        />
      </div>

      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="flex w-max animate-marquee gap-6 px-6">
          {doubled.map((cert, i) => (
            <div
              key={i}
              className="glass glow-border flex w-72 shrink-0 flex-col gap-4 rounded-2xl p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-void">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-display text-base font-medium text-ink">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
