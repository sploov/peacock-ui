"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../hooks/utils';

export interface PeacockDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
  title?: string;
}

export const PeacockDrawer: React.FC<PeacockDrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = 'right',
  className,
  title,
}) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const variants: Variants = {
    closed: {
      x: position === 'right' ? '100%' : '-100%',
      opacity: 0.5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (position === 'right' && info.offset.x > threshold) {
      onClose();
    } else if (position === 'left' && info.offset.x < -threshold) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: position === 'right' ? 0.1 : 0.5, right: position === 'right' ? 0.5 : 0.1 }}
            onDragEnd={handleDragEnd}
            className={cn(
              "fixed top-0 bottom-0 z-50 w-[85vw] max-w-md plumage-glass-heavy border-l border-white/10 shadow-2xl",
              position === 'right' ? "right-0 rounded-l-2xl" : "left-0 rounded-r-2xl border-r border-l-0",
              className
            )}
          >
            <div className="flex flex-col h-full">
               {/* Handle for mobile visual cue */}
               <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1 h-12 rounded-full bg-white/20 sm:hidden" />

               <div className="flex items-center justify-between p-6 border-b border-white/10">
                 {title && <h2 className="text-xl font-semibold text-white tracking-tight">{title}</h2>}
                 <button
                   onClick={onClose}
                   className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                 >
                   <X className="w-5 h-5" />
                 </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-6">
                 {children}
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
