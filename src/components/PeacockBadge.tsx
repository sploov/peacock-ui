"use client";

import React from 'react';
import { cn } from '../hooks/utils';

export interface PeacockBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'glass';
  className?: string;
}

export const PeacockBadge = ({ children, variant = 'primary', className }: PeacockBadgeProps) => {
  const variants = {
    primary: "bg-peacock-primary/10 text-peacock-primary border-peacock-primary/20",
    success: "bg-peacock-success/10 text-peacock-success border-peacock-success/20",
    danger: "bg-peacock-danger/10 text-peacock-danger border-peacock-danger/20",
    glass: "plumage-glass text-white border-white/10",
  };

  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-xs font-bold border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
