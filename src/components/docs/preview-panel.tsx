import type { ComponentEntry } from "@/content/registry";

type PreviewPanelProps = {
  component: ComponentEntry;
};

export function PreviewPanel({ component }: PreviewPanelProps) {
  const Preview = component.preview;

  return (
    <section className="rounded-xl border bg-card h-full flex items-center justify-center overflow-hidden">
      <Preview />
    </section>
  );
}
