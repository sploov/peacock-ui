import React from 'react';
import { cn } from '../../src/hooks/utils';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export const ComponentPreview = ({ children, className, isFullWidth }: ComponentPreviewProps) => {
  return (
    <div className={cn(
      "relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050505] my-8",
      "noise-texture isolate",
      className
    )}>
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} 
      />
      
      <div className={cn(
        "relative z-10 flex min-h-[300px] items-center justify-center p-8 sm:p-12",
        isFullWidth ? "w-full" : "max-w-4xl mx-auto"
      )}>
        {children}
      </div>
    </div>
  );
};
