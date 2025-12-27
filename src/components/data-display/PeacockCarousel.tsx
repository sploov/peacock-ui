"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../hooks/utils';

export interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
  image?: string;
  title?: string;
}

export interface PeacockCarouselProps {
  items: CarouselItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const PeacockCarousel: React.FC<PeacockCarouselProps> = ({
  items,
  className,
  autoPlay = false,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = items.length - 1;
      if (next >= items.length) next = 0;
      return next;
    });
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
      zIndex: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.4 }
      }
    })
  };

  return (
    <div className={cn("relative w-full h-[400px] flex items-center justify-center overflow-hidden perspective-1000", className)}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }: PanInfo) => {
            const swipe = Math.abs(offset.x) * velocity.x;

            if (swipe < -10000) {
              paginate(1);
            } else if (swipe > 10000) {
              paginate(-1);
            }
          }}
          className="absolute w-[80%] h-[80%] rounded-2xl plumage-glass overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {items[currentIndex].image && (
             <div 
               className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-110"
               style={{ backgroundImage: `url(${items[currentIndex].image})` }}
             />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
             {items[currentIndex].title && (
               <motion.h3 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-2xl font-bold mb-2 text-glow"
               >
                 {items[currentIndex].title}
               </motion.h3>
             )}
             <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
             >
                {items[currentIndex].content}
             </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 z-30 p-2 rounded-full plumage-glass hover:bg-white/10 transition-colors"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        className="absolute right-4 z-30 p-2 rounded-full plumage-glass hover:bg-white/10 transition-colors"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              idx === currentIndex ? "w-6 bg-white" : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
};
