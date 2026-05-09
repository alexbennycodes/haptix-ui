import type { ComponentType } from "react";

import { BadgePreview } from "@/content/components/badge";
import { ButtonPreview } from "@/content/components/button";
import { CardPreview } from "@/content/components/card";
import { InputPreview } from "@/content/components/input";

type InstallGuide = {
  npm: string;
  shadcn: string;
};

export type ComponentEntry = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  install: InstallGuide;
  preview: ComponentType;
  code: string;
  registryFile: string;
};

const buttonCode = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("...", { variants: { ... } });

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };`;

const cardCode = `import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)} {...props} />;
}`;

const badgeCode = `import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold");

export function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}`;

const inputCode = `"use client";

import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

type AtmosphericInputProps = React.ComponentProps<"input"> & {
  onEnter?: (value: string) => void;
  colors?: string[];
};

function AtmosphericInput({
  onEnter,
  colors = ["#10b981", "#0ea5e9", "#6366f1"],
  ...props
}: AtmosphericInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="group relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence>
        {(isFocused || isHovered) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0.4 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-24 rounded-full blur-[120px]"
            style={{ background: \`linear-gradient(to top right, \${colors.map((c) => \`\${c}22\`).join(", ")})\` }}
          />
        )}
      </AnimatePresence>
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => e.key === "Enter" && onEnter?.(e.currentTarget.value)}
        className="h-16 w-full rounded-full border border-white/5 bg-[#080808] px-10 text-zinc-100 outline-none"
      />
    </div>
  );
}

export { AtmosphericInput };`;

export const componentRegistry: ComponentEntry[] = [
  {
    slug: "button",
    title: "Button",
    description: "Action trigger with multiple variants and sizes.",
    tags: ["form", "action", "core"],
    preview: ButtonPreview,
    code: buttonCode,
    install: {
      npm: "npm install class-variance-authority clsx tailwind-merge",
      shadcn: "npx shadcn@latest add button --registry http://localhost:3000/api/registry",
    },
    registryFile: "button.json",
  },
  {
    slug: "card",
    title: "Card",
    description: "Composable content container for grouped information.",
    tags: ["layout", "content"],
    preview: CardPreview,
    code: cardCode,
    install: {
      npm: "npm install clsx tailwind-merge",
      shadcn: "npx shadcn@latest add card --registry http://localhost:3000/api/registry",
    },
    registryFile: "card.json",
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Small status label with semantic variants.",
    tags: ["status", "labels"],
    preview: BadgePreview,
    code: badgeCode,
    install: {
      npm: "npm install class-variance-authority clsx tailwind-merge",
      shadcn: "npx shadcn@latest add badge --registry http://localhost:3000/api/registry",
    },
    registryFile: "badge.json",
  },
  {
    slug: "input",
    title: "Atmospheric Input",
    description: "Animated atmospheric input with gradient glow and focus ring.",
    tags: ["form", "field", "input", "animated"],
    preview: InputPreview,
    code: inputCode,
    install: {
      npm: "npm install motion clsx tailwind-merge",
      shadcn: "npx shadcn@latest add input --registry http://localhost:3000/api/registry",
    },
    registryFile: "input.json",
  },
];

export const componentMap = Object.fromEntries(componentRegistry.map((item) => [item.slug, item]));

export function getAllComponentSlugs() {
  return componentRegistry.map((item) => item.slug);
}

export function getComponentBySlug(slug: string) {
  return componentMap[slug];
}
