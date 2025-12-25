import React from 'react';
import { HolographicCard } from '../../src';

export const HolographicCardDemo = () => {
  return (
    <div className="p-20 flex items-center justify-center bg-black/50 rounded-xl border border-white/10 my-4 perspective-1000">
      <HolographicCard className="w-64 h-40 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">Quantum</span>
      </HolographicCard>
    </div>
  );
};
