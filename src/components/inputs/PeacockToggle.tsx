"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../../hooks/utils";

const PeacockToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865F2] disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-white/20 data-[state=on]:text-white p-2 text-gray-400 bg-transparent",
      className
    )}
    {...props}
  />
));
PeacockToggle.displayName = TogglePrimitive.Root.displayName;

export { PeacockToggle };
