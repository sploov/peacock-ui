import React from 'react';
import { PeacockToggle } from '../../src';
import { Bold } from 'lucide-react';
import { ComponentPreview } from './ComponentPreview';

export const ToggleDemo = () => {
  return (
    <ComponentPreview>
      <PeacockToggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </PeacockToggle>
    </ComponentPreview>
  );
};
