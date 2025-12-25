"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, HTMLMotionProps } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface PeacockButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'glass';
  glowSize?: number;
}

export const PeacockButton = React.forwardRef<HTMLButtonElement, PeacockButtonProps>(
  ({ className, variant = 'primary', glowSize = 150, children, onMouseMove, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      onMouseMove?.(e);
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative group overflow-hidden px-8 py-3.5 rounded-2xl font-semibold transition-colors duration-300",
          "flex items-center justify-center gap-3",
          variant === 'primary' && "bg-peacock-primary text-white",
          variant === 'outline' && "border-2 border-peacock-primary/30 text-white hover:border-peacock-primary/60",
          variant === 'glass' && "plumage-glass text-white border-white/10 hover:border-white/20",
          "noise-texture",
          className
        )}
        {...props}
      >
        {/* The Follow-Mouse Radial Light Source */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.15), transparent)`,
          }}
        />

        {/* Dynamic Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 pointer-events-none transition-colors"
        />

        <span className="relative z-10 flex items-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    );
  }
);

PeacockButton.displayName = 'PeacockButton';