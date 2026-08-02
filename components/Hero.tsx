"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import MeshBackground from "./MeshBackground";
import { profile } from "@/lib/data";

const ROLES = [
  "AI/ML Developer",
  "Full Stack Engineer",
  "IEEE Vice Chair",
  "Google Student Ambassador",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 70;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const rotateY = useTransform(mx, [0, 1], [-6, 6]);
  const spotlightX = useTransform(mx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(my, (v) => `${v * 100}%`);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-void pt-28"
    >
      <div className="absolute inset-0 bg-aurora" />
      <MeshBackground />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(500px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(124,92,255,0.12), transparent 70%)`,
        }}
      />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-cyan/80"
        >
          {profile.location} · Available for select work
        </motion.p>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-7xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-gradient">
              {typed}
              <span className="animate-pulse-soft">|</span>
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={profile.resumeUrl} target="_blank">
            <Download size={16} /> View Resume
          </MagneticButton>
          <MagneticButton href="#projects" variant="ghost">
            <FolderGit2 size={16} /> View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            <Mail size={16} /> Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-pointer
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
