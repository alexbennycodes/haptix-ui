import { notFound } from "next/navigation";

import { CodePanel } from "@/components/docs/code-panel";
import { PreviewPanel } from "@/components/docs/preview-panel";
import { getAllComponentSlugs, getComponentBySlug } from "@/content/registry";

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
    <div className="grid md:grid-cols-2">
      <CodePanel component={component} />
      <div className="p-6 h-full">
        <PreviewPanel component={component} />
      </div>
    </div>
  );
}
