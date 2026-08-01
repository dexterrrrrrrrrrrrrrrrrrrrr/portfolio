"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative border-t border-line bg-void py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What people say after working with me." />

        <div className="glass glow-border relative min-h-[280px] rounded-3xl p-8 sm:p-12">
          <Quote className="text-violet/50" size={32} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4"
            >
              <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-medium text-ink">{current.name}</p>
                <p className="text-sm text-muted">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 right-8 flex items-center gap-2">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="focus-ring rounded-full border border-line p-2 text-muted transition-colors hover:text-cyan"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="focus-ring rounded-full border border-line p-2 text-muted transition-colors hover:text-cyan"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-cyan" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
