"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface PeacockSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const PeacockSwitch = ({ checked, onChange, label, disabled }: PeacockSwitchProps) => {
  return (
    <label className={cn(
      "flex items-center gap-3 cursor-pointer select-none",
      disabled && "opacity-50 cursor-not-allowed"
    )}>
      <div 
        className="relative"
        onClick={() => !disabled && onChange(!checked)}
      >
        <div className={cn(
          "w-12 h-6 rounded-full transition-colors duration-300 border border-white/10",
          checked ? "bg-peacock-primary/40 border-peacock-primary/30" : "bg-white/5"
        )} />
        
        <motion.div
          className={cn(
            "absolute top-1 left-1 w-4 h-4 rounded-full shadow-lg",
            checked ? "bg-peacock-primary" : "bg-white/40"
          )}
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      {label && <span className="text-sm font-medium text-white/60">{label}</span>}
    </label>
  );
};
