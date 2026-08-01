import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { profile } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = "https://anuragpaul.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI/ML Developer & Full Stack Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Anurag Paul",
    "AI/ML Developer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "IEEE Information Theory Society",
    "Google Student Ambassador",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI/ML Developer & Full Stack Engineer`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Developer & Full Stack Engineer`,
    description: profile.tagline,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    url: siteUrl,
    jobTitle: "AI/ML Developer & Full Stack Engineer",
    sameAs: [profile.github, profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sai Vidya Institute of Technology",
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-violet selection:text-void">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
