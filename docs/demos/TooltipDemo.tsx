import React from 'react';
import { PeacockTooltip, PeacockButton } from '../../src';

export const TooltipDemo = () => {
  return (
    <div className="p-12 flex justify-center bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockTooltip content="This will spread the plumage">
        <PeacockButton variant="glass">Hover Me</PeacockButton>
      </PeacockTooltip>
    </div>
  );
};
