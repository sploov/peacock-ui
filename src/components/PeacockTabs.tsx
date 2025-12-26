"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../hooks/utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface PeacockTabsProps {
  items: TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  variant?: 'pill' | 'underline' | 'glass';
  layoutId?: string;
}

export const PeacockTabs = ({
  items,
  defaultValue,
  onValueChange,
  className,
  variant = 'pill',
  layoutId = 'active-tab'
}: PeacockTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    onValueChange?.(id);
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className={cn(
        "flex p-1 gap-1",
        variant === 'pill' && "bg-white/5 rounded-2xl border border-white/5",
        variant === 'underline' && "border-b border-white/10 p-0 rounded-none gap-8",
        variant === 'glass' && "plumage-glass rounded-xl"
      )}>
        {items.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none",
                isActive ? "text-white" : "text-white/40 hover:text-white/60",
                variant === 'underline' && "px-0 pb-3"
              )}
            >
              {item.icon && <span className="relative z-10">{item.icon}</span>}
              <span className="relative z-10">{item.label}</span>
              
              {isActive && (
                <motion.div
                  layoutId={layoutId}
                  className={cn(
                    "absolute inset-0 z-0",
                    variant === 'pill' && "bg-peacock-primary rounded-xl",
                    variant === 'underline' && "border-b-2 border-peacock-primary bottom-0 rounded-none h-[2px]",
                    variant === 'glass' && "bg-white/10 rounded-lg backdrop-blur-md border border-white/10"
                  )}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.find(item => item.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
