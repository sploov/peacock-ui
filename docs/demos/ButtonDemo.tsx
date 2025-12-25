import React from 'react';
import { PeacockButton } from '../../src';

export const ButtonDemo = () => {
  return (
    <div className="p-8 flex items-center justify-center gap-4 bg-black/50 rounded-xl border border-white/10 my-4 flex-wrap">
      <PeacockButton variant="primary">Primary</PeacockButton>
      <PeacockButton variant="outline">Outline</PeacockButton>
      <PeacockButton variant="glass">Glass</PeacockButton>
    </div>
  );
};
