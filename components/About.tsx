"use client";

import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Systems thinking, applied to real problems."
          description="The short version: I build things that work when the easy path — a stable connection, a clean dataset, a predictable user — isn't available."
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m {profile.name}, an AI/ML developer and full stack engineer based in
                Bengaluru. My work sits at the intersection of applied machine learning and
                production software — models are only useful once they&apos;re shipped, so I
                care as much about the interface and infrastructure around them as the model
                itself.
              </p>
              <p>
                That instinct shows up in the projects I gravitate toward: a mesh network that
                keeps hospitals talking during an outage, a hybrid ML model that predicts air
                quality across Indian cities with near-perfect accuracy. Constraints — no
                internet, noisy data, real users — are where the interesting engineering
                happens.
              </p>
              <p>
                Outside of my own projects, I spend a lot of time in community: as Vice Chair of
                the IEEE Information Theory Society and as a Google Student Ambassador, helping
                other students go from &ldquo;I want to build something&rdquo; to actually
                shipping it.
              </p>
              <p className="text-ink">
                My mission is simple — build AI-powered systems that hold up under real-world
                pressure, and help the people around me do the same.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative border-l border-line pl-8">
              {education.map((item, i) => (
                <div key={item.title} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan text-void">
                    <GraduationCap size={13} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan/80">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">{item.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted/90">{item.detail}</p>
                  {i !== education.length - 1 && (
                    <div className="absolute -left-[41px] top-6 h-full w-px bg-line" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
