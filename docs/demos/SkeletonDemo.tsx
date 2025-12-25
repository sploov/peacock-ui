import React from 'react';
import { PeacockSkeleton } from '../../src';

export const SkeletonDemo = () => {
  return (
    <div className="p-8 flex items-center space-x-4 bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <PeacockSkeleton className="h-4 w-[250px]" />
        <PeacockSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
