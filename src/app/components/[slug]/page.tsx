import { notFound } from "next/navigation";

import { CodePanel } from "@/components/docs/code-panel";
import { FloatingSidebar } from "@/components/docs/floating-sidebar";
import { PreviewPanel } from "@/components/docs/preview-panel";
import { componentRegistry, getAllComponentSlugs, getComponentBySlug } from "@/content/registry";

type ComponentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ slug }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="grid gap-6 md:grid-cols-[260px_1fr]">
      <FloatingSidebar items={componentRegistry} activeSlug={slug} />
      <div className="grid gap-6 xl:grid-cols-2">
        <PreviewPanel component={component} />
        <CodePanel component={component} />
      </div>
    </div>
  );
}
