"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Github, X } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void/80 px-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="focus-ring absolute right-6 top-6 rounded-full border border-line p-2 text-muted transition-colors hover:text-cyan"
            >
              <X size={16} />
            </button>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "Live" ? "bg-cyan/10 text-cyan" : "bg-violet/10 text-violet-soft"
              }`}
            >
              {project.status === "Live" ? "Live" : "Upcoming / Concept"}
            </span>

            <h3 className="mt-5 font-display text-3xl font-medium text-ink sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cyan/80">
              {project.tag}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {project.longDescription ?? project.description}
            </p>

            {project.features && (
              <div className="mt-8">
                <h4 className="text-sm font-medium text-ink">Key Features</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <h4 className="text-sm font-medium text-ink">Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4 border-t border-line pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-5 py-2.5 text-sm font-medium text-void"
                >
                  View Live Demo <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-ink"
                >
                  <Github size={14} /> View Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
