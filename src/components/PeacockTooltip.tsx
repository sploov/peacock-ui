"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface PeacockTooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export const PeacockTooltip = ({ content, children, className }: PeacockTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className={cn(
              "absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5",
              "plumage-glass text-xs text-white rounded-lg whitespace-nowrap pointer-events-none border border-white/10",
              className
            )}
          >
            {content}
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
