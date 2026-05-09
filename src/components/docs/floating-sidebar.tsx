import Link from "next/link";

import type { ComponentEntry } from "@/content/registry";
import { cn } from "@/lib/utils";

type FloatingSidebarProps = {
  items: ComponentEntry[];
  activeSlug: string;
};

export function FloatingSidebar({ items, activeSlug }: FloatingSidebarProps) {
  return (
    <aside className="top-20 h-fit w-full rounded-xl border bg-card p-4 md:sticky md:max-w-64">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Components
      </p>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/components/${item.slug}`}
            className={cn(
              "block rounded-md px-3 py-2 text-sm transition-colors",
              item.slug === activeSlug
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
