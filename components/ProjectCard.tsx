"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformPerspective: 900 }}
      className="glass glow-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-7"
    >
      <div className="flex items-start justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            project.status === "Live"
              ? "bg-cyan/10 text-cyan"
              : "bg-violet/10 text-violet-soft"
          }`}
        >
          {project.status === "Live" ? "Live" : "Upcoming / Concept"}
        </span>
        <span className="font-mono text-xs text-muted">{project.tag}</span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-medium text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
        <button
          onClick={() => onOpen(project)}
          data-cursor-pointer
          className="focus-ring flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
        >
          Case Study <ArrowUpRight size={14} />
        </button>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            className="focus-ring ml-auto flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            className="focus-ring ml-auto flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan"
          >
            <Github size={14} /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
