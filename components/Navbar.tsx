"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? "glass mx-4 sm:mx-auto" : ""
        }`}
      >
        <a href="#home" data-cursor-pointer className="font-display text-lg font-medium text-ink">
          AP<span className="text-cyan">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-pointer
              className="focus-ring text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            data-cursor-pointer
            aria-label="Open command palette"
            className="focus-ring glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-cyan sm:flex"
          >
            <Command size={14} /> <span>⌘K</span>
          </button>
          <div className="hidden sm:block">
            <MagneticButton href="#contact" className="!px-5 !py-2 text-xs">
              Let&apos;s Talk
            </MagneticButton>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="focus-ring glass rounded-full p-2.5 text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-3 overflow-hidden rounded-3xl lg:hidden"
          >
            <div className="glass flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-ink/90 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-violet to-cyan px-4 py-3 text-center text-sm font-medium text-void"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
