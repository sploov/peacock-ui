"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../hooks/utils';
import { MotionPrimitive } from '../MotionPrimitive';

export interface FluidCardProps {
  title: string;
  description: string;
  expandedContent?: React.ReactNode;
  className?: string;
}

export const FluidCard = ({ title, description, expandedContent, className }: FluidCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MotionPrimitive
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "plumage-glass rounded-3xl p-6 cursor-pointer overflow-hidden",
        "border border-white/10 hover:border-white/20 transition-colors",
        "noise-texture",
        className
      )}
      layout
    >
      <motion.div layout="position" className="flex flex-col gap-2">
        <motion.h3 layout="position" className="text-xl font-bold text-white">
          {title}
        </motion.h3>
        <motion.p layout="position" className="text-white/60">
          {description}
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-white/10"
          >
            <div className="text-white/80 leading-relaxed">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionPrimitive>
  );
};
