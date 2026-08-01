import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-void px-6 text-center">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="relative">
        <p className="font-mono text-sm uppercase tracking-[0.4em] text-cyan/80">Error 404</p>
        <h1 className="mt-6 font-display text-6xl font-medium text-ink sm:text-8xl">
          Route not <span className="text-gradient">found</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-muted">
          Whatever you were looking for isn&apos;t at this path — the mesh network can&apos;t
          route you there either.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 text-sm font-medium text-void"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
