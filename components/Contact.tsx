"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // No backend wired up yet — replace with your form handler (Resend, Formspree, an API route, etc).
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contact" className="relative border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Have something worth building?"
          description="Whether it's a role, a freelance project, or just a good technical conversation — my inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                data-cursor-pointer
                className="glass glow-border flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-void">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-sm font-medium text-ink">{profile.email}</p>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="glass glow-border flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-void">
                  <Linkedin size={17} />
                </span>
                <div>
                  <p className="text-sm text-muted">LinkedIn</p>
                  <p className="text-sm font-medium text-ink">/anurag-paul</p>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="glass glow-border flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-void">
                  <Github size={17} />
                </span>
                <div>
                  <p className="text-sm text-muted">GitHub</p>
                  <p className="text-sm font-medium text-ink">Browse my repositories</p>
                </div>
              </a>

              <div className="glass relative h-44 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-aurora opacity-60" />
                <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
                  <MapPin className="text-cyan" size={22} />
                  <p className="text-sm font-medium text-ink">{profile.location}</p>
                  <p className="text-xs text-muted">Map integration placeholder</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass glow-border rounded-3xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="focus-ring mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-cyan/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="focus-ring mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-cyan/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="focus-ring mt-2 w-full resize-none rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-cyan/50"
                    placeholder="What are you building?"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileTap={{ scale: 0.97 }}
                data-cursor-pointer
                className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3.5 text-sm font-medium text-void transition-opacity disabled:opacity-80 sm:w-auto"
              >
                {status === "idle" && (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
                {status === "sending" && "Sending…"}
                {status === "sent" && (
                  <>
                    Message Sent <Check size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
