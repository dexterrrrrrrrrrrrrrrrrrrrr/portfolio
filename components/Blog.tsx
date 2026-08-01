"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="relative border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the build."
          description="Longer-form thoughts on AI, ML, and open source — coming soon to a blog near you."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <a
                href="#"
                data-cursor-pointer
                className="glass glow-border group flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-medium text-violet-soft">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Read article <ArrowUpRight size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
