"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../hooks/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface PeacockBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

export const PeacockBreadcrumb: React.FC<PeacockBreadcrumbProps> = ({
  items,
  className,
  separator = <ChevronRight className="w-4 h-4 text-white/40" />,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("inline-flex", className)}>
      <ol className="flex items-center gap-2 p-2 px-4 rounded-xl plumage-glass">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center gap-2">
              <motion.a
                href={item.href}
                whileHover={!isLast ? { scale: 1.05, color: "rgba(255,255,255,1)" } : {}}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                  isLast 
                    ? "text-white cursor-default pointer-events-none" 
                    : "text-white/60 hover:text-white cursor-pointer"
                )}
                aria-current={isLast ? 'page' : undefined}
                onClick={(e) => {
                  if (!item.href || isLast) e.preventDefault();
                }}
              >
                {item.icon ? (
                  <span className="w-4 h-4">{item.icon}</span>
                ) : isFirst && !item.label ? (
                   <Home className="w-4 h-4" />
                ) : null}
                
                {item.label && <span>{item.label}</span>}
              </motion.a>

              {!isLast && (
                <span className="flex items-center" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
