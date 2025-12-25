"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface PeacockInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const PeacockInput = React.forwardRef<HTMLInputElement, PeacockInputProps>(
  ({ className, label, error, icon, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-white/40 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {/* Animated Border/Glow */}
          <motion.div
            className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-peacock-primary/0 via-peacock-primary/0 to-peacock-primary/0 group-hover:via-peacock-primary/20 transition-all duration-500"
            animate={isFocused ? {
              background: "linear-gradient(45deg, #5865F2, #23a559, #f43f5e)",
              opacity: 1
            } : { 
              background: "rgba(88, 101, 242, 0)",
              opacity: 0 
            }}
          />
          
          <div className={cn(
            "relative flex items-center bg-peacock-dark border border-white/10 rounded-xl overflow-hidden transition-all duration-300",
            isFocused ? "border-transparent" : "group-hover:border-white/20",
            "noise-texture"
          )}>
            {icon && (
              <div className="pl-4 text-white/40">
                {icon}
              </div>
            )}
            <input
              ref={ref}
              className={cn(
                "w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/20",
                className
              )}
              onFocus={(e) => {
                setIsFocused(true);
                onFocus?.(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                onBlur?.(e);
              }}
              {...props}
            />
          </div>
        </div>
        
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs text-peacock-danger font-medium ml-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

PeacockInput.displayName = 'PeacockInput';
