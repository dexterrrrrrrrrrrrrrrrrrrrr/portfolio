"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/lib/data";
import MagneticButton from "./MagneticButton";

const username = profile.github.split("/").filter(Boolean).pop() ?? "";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
} | null;

export default function GithubStats() {
  const [user, setUser] = useState<GhUser>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) =>
        setUser({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        })
      )
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="relative border-t border-line bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="What the commit history says."
          description="Live data pulled straight from the GitHub API and github-readme-stats."
        />

        <Reveal>
          <div className="glass glow-border overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-void">
                  <Github size={24} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">@{username}</h3>
                  <p className="text-sm text-muted">
                    {error
                      ? "Live stats unavailable right now — view the profile directly."
                      : user
                      ? `${user.public_repos} public repos · ${user.followers} followers`
                      : "Loading live GitHub data…"}
                  </p>
                </div>
              </div>
              <MagneticButton href={profile.github} variant="ghost">
                View Full Profile
              </MagneticButton>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&show_icons=true&theme=dark&bg_color=0B0B12&title_color=00E5FF&icon_color=7C5CFF&text_color=8B8BA0&border_color=1a1a24&hide_border=false`}
                  alt="GitHub streak stats"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&layout=compact&theme=dark&bg_color=0B0B12&title_color=00E5FF&text_color=8B8BA0&border_color=1a1a24&hide_border=false`}
                  alt="Top languages"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://streak-stats.demolab.com?user=${username}&theme=dark&background=0B0B12&stroke=1a1a24&ring=00E5FF&fire=7C5CFF&currStreakLabel=00E5FF`}
                alt="GitHub activity graph"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
