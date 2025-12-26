import React from 'react';
import { PeacockPhysicsScene } from '../../src/canvas/PeacockPhysicsScene';

export const PhysicsDemo = () => {
  return (
    <div className="w-full relative">
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md p-4 rounded-lg text-white border border-white/10">
        <h3 className="font-bold mb-2">Interactive Physics</h3>
        <p className="text-sm text-gray-300">
          Click shapes to interact.<br/>
          Drag to rotate view.
        </p>
      </div>
      <PeacockPhysicsScene className="h-[600px] border border-white/10" />
    </div>
  );
};
