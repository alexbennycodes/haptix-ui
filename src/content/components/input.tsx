"use client";

import { AtmosphericInput } from "@/components/ui/atmospheric-input";
import { useState } from "react";

export function InputPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-2xl px-4 py-10">
      <AtmosphericInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Plan anything..."
        aria-label="Plan input"
      />
    </div>
  );
}
