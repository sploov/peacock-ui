"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../hooks/utils';
import { Search, Command } from 'lucide-react';

export interface GlassMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: GlassMenuItem[];
}

export interface GlassMenuProps {
  items: GlassMenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const GlassMenu = ({ items, isOpen, onClose }: GlassMenuProps) => {
  const [search, setSearch] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl plumage-glass rounded-3xl shadow-2xl overflow-hidden noise-texture"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-white/40" />
              <input 
                autoFocus
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/20 text-lg"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-xs text-white/40 font-mono">
                <Command className="w-3 h-3" /> K
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto p-2">
              {items.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.05 } }}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-left group"
                  onClick={item.onClick}
                >
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-peacock-primary/20 group-hover:text-peacock-primary transition-colors">
                    {item.icon || <Command className="w-4 h-4" />}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
