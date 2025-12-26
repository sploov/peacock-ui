"use client";

import * as React from "react";
import { cn } from "../../hooks/utils";

const PeacockTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-200 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PeacockTextarea.displayName = "PeacockTextarea";

export { PeacockTextarea };
