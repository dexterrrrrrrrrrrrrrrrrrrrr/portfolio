"use client";

import { Brain, Code2, GitBranch, Network, Sparkles, Users } from "lucide-react";
import { positions } from "@/lib/data";

const icons: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  network: Network,
  brain: Brain,
  code: Code2,
  users: Users,
  "git-branch": GitBranch,
};

export default function PositionsMarquee() {
  const doubled = [...positions, ...positions];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((p, i) => {
          const Icon = icons[p.icon] ?? Sparkles;
          return (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap px-2">
              <Icon size={16} className="text-cyan" />
              <span className="text-sm font-medium text-ink">{p.role}</span>
              <span className="text-sm text-muted">— {p.org}</span>
              <span className="ml-8 text-line">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
