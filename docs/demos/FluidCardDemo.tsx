import React from 'react';
import { FluidCard } from '../../src';

export const FluidCardDemo = () => {
  return (
    <div className="flex items-center justify-center p-8 border border-white/10 rounded-xl bg-black/50">
      <FluidCard
        title="Architecture"
        description="Deep dive into our motion system. Click to expand."
        expandedContent={
          <div className="space-y-4 pt-4 text-slate-300">
            <p>Learn how we use spring physics to create natural-feeling interactions.</p>
            <ul className="list-disc pl-4">
              <li>Spring physics basics</li>
              <li>Layout transitions</li>
              <li>Gesture recognition</li>
            </ul>
          </div>
        }
      />
    </div>
  );
};
