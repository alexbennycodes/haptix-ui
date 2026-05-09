import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 px-6 py-20 text-center">
      <span className="rounded-full border border-border bg-muted px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Haptix UI
      </span>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Build faster with production-ready React components.
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          Drop-in UI components with previews, integration guides, and shadcn support
          for real-world projects.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/components">
          <Button size="lg">View Components</Button>
        </Link>
        <Link href="/components/button">
          <Button variant="outline" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
