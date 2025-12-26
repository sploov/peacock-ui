import React from 'react';
import { PeacockTooltip, PeacockButton } from '../../src';

export const TooltipDemo = () => {
  return (
    <div className="flex items-center justify-center">
      <PeacockTooltip content="This is a physics-based tooltip">
        <PeacockButton variant="outline">Hover for Tooltip</PeacockButton>
      </PeacockTooltip>
    </div>
  );
};
