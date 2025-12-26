import React from 'react';
import { PeacockButton } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const ButtonDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <PeacockButton variant="primary">Primary</PeacockButton>
        <PeacockButton variant="outline">Outline</PeacockButton>
        <PeacockButton variant="glass">Glass</PeacockButton>
      </div>
    </ComponentPreview>
  );
};
