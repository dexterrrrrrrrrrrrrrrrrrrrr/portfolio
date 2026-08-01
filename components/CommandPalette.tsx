"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Search } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

type Props = { open: boolean; onClose: () => void };

const externalLinks = [
  { label: "Open GitHub Profile", href: profile.github, icon: Github },
  { label: "Open LinkedIn Profile", href: profile.linkedin, icon: Linkedin },
  { label: "Send an Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const items = [
    ...navLinks.map((l) => ({ label: `Go to ${l.label}`, href: l.href, icon: ArrowUpRight })),
    ...externalLinks,
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-void/70 px-4 pt-28 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <Search size={16} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, or open a link..."
                className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-muted focus:outline-none"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {items.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted">No matches.</p>
              )}
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring flex items-center justify-between rounded-xl px-3 py-3 text-sm text-ink/90 transition-colors hover:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <item.icon size={15} className="text-cyan" />
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
