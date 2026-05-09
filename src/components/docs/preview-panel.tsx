import type { ComponentEntry } from "@/content/registry";

type PreviewPanelProps = {
  component: ComponentEntry;
};

export function PreviewPanel({ component }: PreviewPanelProps) {
  const Preview = component.preview;

  return (
    <section className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">{component.title} Preview</h2>
      <p className="mt-1 text-sm text-muted-foreground">{component.description}</p>
      <div className="mt-6 rounded-lg border bg-background p-6">
        <Preview />
      </div>
    </section>
  );
}
