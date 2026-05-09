"use client";

import * as Tabs from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

type InstallTabsProps = {
  shadcnCommand: string;
  npmCommand: string;
};

export function InstallTabs({ shadcnCommand, npmCommand }: InstallTabsProps) {
  return (
    <Tabs.Root defaultValue="shadcn" className="w-full">
      <Tabs.List className="mb-4 flex gap-2 rounded-md bg-muted p-1">
        <Tabs.Trigger
          value="shadcn"
          className={cn(
            "rounded-sm px-3 py-1.5 text-sm text-muted-foreground",
            "data-[state=active]:bg-background data-[state=active]:text-foreground",
          )}
        >
          shadcn add
        </Tabs.Trigger>
        <Tabs.Trigger
          value="manual"
          className={cn(
            "rounded-sm px-3 py-1.5 text-sm text-muted-foreground",
            "data-[state=active]:bg-background data-[state=active]:text-foreground",
          )}
        >
          Manual install
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="shadcn">
        <pre className="overflow-auto rounded-lg border bg-muted p-4 text-sm">
          <code>{shadcnCommand}</code>
        </pre>
      </Tabs.Content>
      <Tabs.Content value="manual">
        <pre className="overflow-auto rounded-lg border bg-muted p-4 text-sm">
          <code>{npmCommand}</code>
        </pre>
      </Tabs.Content>
    </Tabs.Root>
  );
}
