import React from 'react';
import { PeacockButton } from '../../src';

export const ButtonDemo = () => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <PeacockButton variant="primary">Primary</PeacockButton>
      <PeacockButton variant="outline">Outline</PeacockButton>
      <PeacockButton variant="glass">Glass</PeacockButton>
    </div>
  );
};
