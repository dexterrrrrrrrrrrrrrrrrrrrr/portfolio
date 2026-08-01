"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative border-t border-line bg-void px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl font-medium text-ink">
              AP<span className="text-cyan">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {profile.taglineShort}. Based in {profile.location}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="focus-ring glass rounded-full p-2.5 text-muted transition-colors hover:text-cyan"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring glass rounded-full p-2.5 text-muted transition-colors hover:text-cyan"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="focus-ring glass rounded-full p-2.5 text-muted transition-colors hover:text-cyan"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Navigate</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink/80 transition-colors hover:text-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Stay updated</p>
            <p className="mt-4 text-sm text-muted">
              Occasional notes on AI/ML and shipping side projects. No spam.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                placeholder="you@example.com"
                className="focus-ring w-full min-w-0 rounded-full border border-line bg-white/5 px-4 py-2.5 text-xs text-ink placeholder:text-muted/60"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="focus-ring shrink-0 rounded-full bg-gradient-to-r from-violet to-cyan px-4 py-2.5 text-xs font-medium text-void"
              >
                {subscribed ? "Subscribed" : "Join"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Designed & built from scratch.
          </p>
          <a
            href="#home"
            data-cursor-pointer
            aria-label="Back to top"
            className="focus-ring glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted transition-colors hover:text-cyan"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
