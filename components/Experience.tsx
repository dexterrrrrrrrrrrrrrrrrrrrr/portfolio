"use client";

import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has happened."
          description="Roles, teams, and rooms I've built in — in the order they happened."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:block" />
          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group relative pl-0 sm:pl-10">
                  <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-cyan bg-void transition-colors group-hover:bg-cyan sm:block" />
                  <div className="glass glow-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-cyan/80">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-violet-soft">{item.org}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
