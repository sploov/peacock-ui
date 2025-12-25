"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { MotionConfig } from 'framer-motion';

interface MotionProviderProps {
  children: React.ReactNode;
  physics?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

const defaultPhysics = {
  stiffness: 260,
  damping: 20,
  mass: 1,
};

const MotionContext = createContext(defaultPhysics);

export const MotionProvider = ({ children, physics = defaultPhysics }: MotionProviderProps) => {
  const value = useMemo(() => physics, [physics]);

  return (
    <MotionContext.Provider value={value}>
      <MotionConfig transition={{ 
        type: "spring", 
        ...value 
      }}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
};

export const useMotionPhysics = () => useContext(MotionContext);
