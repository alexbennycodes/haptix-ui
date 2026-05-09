import type { ComponentEntry } from "@/content/registry";

import { InstallTabs } from "@/components/docs/install-tabs";

type CodePanelProps = {
  component: ComponentEntry;
};

export function CodePanel({ component }: CodePanelProps) {
  return (
    <section className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">Integration Guide</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Use `shadcn add` from the registry or manually install dependencies.
      </p>

      <div className="mt-5">
        <InstallTabs
          shadcnCommand={component.install.shadcn}
          npmCommand={component.install.npm}
        />
      </div>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Source
      </h3>
      <pre className="mt-3 overflow-auto rounded-lg border bg-muted p-4 text-xs">
        <code>{component.code}</code>
      </pre>
    </section>
  );
}
