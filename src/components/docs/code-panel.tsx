import type { ComponentEntry } from "@/content/registry";

import { InstallTabs } from "@/components/docs/install-tabs";

type CodePanelProps = {
  component: ComponentEntry;
};

export function CodePanel({ component }: CodePanelProps) {
  return (
    <section className="max-h-dvh overflow-y-auto scrollbar-none p-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-0">
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
      <pre className="mt-3 overflow-auto scrollbar-thin rounded-lg border bg-muted p-4 text-xs [scrollbar-color:rgba(255,255,255,0.28)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:transition-colors [&::-webkit-scrollbar-thumb:hover]:bg-white/45">
        <code>{component.code}</code>
      </pre>
    </section>
  );
}
