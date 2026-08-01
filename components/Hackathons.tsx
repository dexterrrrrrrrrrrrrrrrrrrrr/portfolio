"use client";

import { Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { hackathons } from "@/lib/data";

export default function Hackathons() {
  return (
    <section className="relative border-t border-line bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Hackathons" title="Built under a clock, more than once." />

        <div className="grid gap-5 sm:grid-cols-2">
          {hackathons.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.08}>
              <div className="glass glow-border flex h-full items-start gap-5 rounded-2xl p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-void">
                  <Trophy size={18} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-medium text-ink">{h.name}</h3>
                    <span className="font-mono text-xs text-cyan/80">{h.year}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-violet-soft">{h.result}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
