import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">
      <header className="mb-8 flex items-center justify-between rounded-xl border bg-card p-4">
        <div>
          <h1 className="text-xl font-semibold">Component Library</h1>
          <p className="text-sm text-muted-foreground">
            Preview components and copy integration instructions.
          </p>
        </div>
        <Link href="/">
          <Button variant="outline">Back Home</Button>
        </Link>
      </header>
      {children}
    </div>
  );
}
