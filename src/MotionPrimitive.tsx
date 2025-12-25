"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './hooks/utils';

export interface MotionPrimitiveProps extends HTMLMotionProps<'div'> {
  as?: any;
}

export const MotionPrimitive = React.forwardRef<HTMLDivElement, MotionPrimitiveProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    const MotionComponent = motion[Component as keyof typeof motion] || motion.div;

    return (
      <MotionComponent
        ref={ref}
        layout
        className={cn("relative", className)}
        {...props}
      />
    );
  }
);

MotionPrimitive.displayName = 'MotionPrimitive';
