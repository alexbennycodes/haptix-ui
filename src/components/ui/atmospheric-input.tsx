"use client";

import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

type AtmosphericInputProps = React.ComponentProps<"input"> & {
  onEnter?: (value: string) => void;
  colors?: string[];
};

function AtmosphericInput({
  value,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onKeyDown,
  className,
  placeholder = "Search...",
  colors = ["#facc15", "#fb923c", "#f87171", "#c084fc", "#facc15"],
  ...props
}: AtmosphericInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = React.useState("");

  const resolvedValue = typeof value === "string" ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value !== "string") {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.(e.currentTarget.value);
    }
    onKeyDown?.(e);
  };

  return (
    <div
      className={cn("group relative w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {(isFocused || isHovered || resolvedValue.length > 0) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isFocused ? 1 : 0.4,
              scale: isFocused ? 1 : 0.95,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-none absolute -inset-24 rounded-full blur-[120px]"
            style={{
              background: `linear-gradient(to top right, ${colors.map((color) => `${color}22`).join(", ")})`,
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scale: isFocused ? 1.01 : 1 }}
        transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
        className={cn(
          "absolute -inset-0.5 rounded-full blur-[10px] transition-all duration-700 ease-in-out",
          isFocused
            ? "-inset-1 opacity-100 blur-[18px]"
            : isHovered
              ? "-inset-0.75 opacity-60 blur-md"
              : "opacity-20 blur-sm",
        )}
        style={{
          background: `conic-gradient(from 0deg, ${colors.join(", ")})`,
        }}
      />

      <div
        className={cn(
          "absolute -inset-px rounded-full blur-[2px] transition-all duration-500",
          isFocused
            ? "bg-white/20 opacity-100"
            : isHovered
              ? "bg-white/10 opacity-40"
              : "opacity-0",
        )}
      />

      <div className="relative overflow-hidden rounded-full">
        <motion.div
          whileTap={{ scale: 0.995 }}
          className="relative flex items-center"
        >
          <input
            {...props}
            ref={inputRef}
            type="text"
            value={resolvedValue}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="h-16 w-full rounded-full border border-white/5 bg-[#080808] px-10 text-lg font-normal text-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.8)] outline-none transition-all duration-500 placeholder:text-zinc-600 group-hover:bg-[#0c0c0c] focus:border-white/10 focus:bg-black"
          />

          <div
            className={cn(
              "pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500",
              isFocused ? "opacity-100" : "opacity-40",
            )}
          />
        </motion.div>
      </div>
    </div>
  );
}

export { AtmosphericInput };
