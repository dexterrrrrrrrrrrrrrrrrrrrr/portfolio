# Anurag Paul — Portfolio

A cinematic, dark-themed personal portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Resume** — drop your real PDF at `public/resume.pdf` (the Download Resume button already
   links there). Delete `public/RESUME_PLACEHOLDER.txt` once done.
2. **OG image** — add `public/og-image.png` (1200×630) for link previews on socials.
3. **Contact form** — `components/Contact.tsx` currently simulates a send. Wire it to a real
   handler: an API route with Resend/Nodemailer, or a service like Formspree/Web3Forms.
4. **Newsletter** — `components/Footer.tsx` has a subscribe form with no backend. Wire it to
   Mailchimp/ConvertKit/Buttondown or your own API route the same way.
5. **Domain** — `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` use
   `https://anuragpaul.dev` as a placeholder domain. Replace with your real one.
6. **GitHub live stats** — `components/GithubStats.tsx` pulls live from the public GitHub API
   and from github-readme-stats.vercel.app (a free public service — no key needed, but it can
   rate-limit under heavy traffic; consider self-hosting it if that becomes an issue).

## Design notes

- Dark glassmorphism theme with a violet → cyan aurora accent, per the brief.
- The hero's animated background is a custom canvas **mesh network** — nodes drifting and
  connecting, reacting to your cursor — a deliberate nod to the Local Mesh Alert Network
  project rather than a generic particle field.
- Typefaces: **Space Grotesk** for display, **Inter** for body copy, **JetBrains Mono** for
  labels/data — loaded via `next/font/google`, so no extra network requests at runtime beyond
  the initial font fetch.
- Custom cursor, magnetic buttons, tilt project cards, scroll-reveals, a Cmd/Ctrl+K command
  palette, and a loading intro are all implemented with Framer Motion + vanilla Canvas — no
  Three.js/GSAP/Spline dependency, so the project builds and runs with zero extra setup.


## Stack

Next.js 15 · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide Icons

