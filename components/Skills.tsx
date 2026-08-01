"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit, honestly rated."
          description="Not a wall of logos — a real sense of where I'm strong and where I'm still building."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {Object.entries(skills).map(([category, list], colIndex) => (
            <Reveal key={category} delay={colIndex * 0.1}>
              <div className="glass h-full rounded-2xl p-7">
                <h3 className="font-display text-lg font-medium text-ink">{category}</h3>
                <div className="mt-6 space-y-5">
                  {list.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-ink/90">{skill.name}</span>
                        <span className="font-mono text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
