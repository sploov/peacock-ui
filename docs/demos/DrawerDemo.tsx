"use client";

import React, { useState } from 'react';
import { PeacockDrawer, PeacockButton } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const DrawerDemo = () => {
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComponentPreview
        title="Right Drawer"
        description="A standard drawer sliding from the right side."
        code={`const [open, setOpen] = useState(false);

<PeacockButton onClick={() => setOpen(true)}>
  Open Menu
</PeacockButton>

<PeacockDrawer 
  isOpen={open} 
  onClose={() => setOpen(false)}
  title="Settings"
>
  ...content...
</PeacockDrawer>`}
      >
        <PeacockButton onClick={() => setIsOpenRight(true)}>
          Open Right Drawer
        </PeacockButton>

        <PeacockDrawer
          isOpen={isOpenRight}
          onClose={() => setIsOpenRight(false)}
          title="Configuration"
          position="right"
        >
          <div className="space-y-4 text-white/80">
            <p>This is a glassmorphic drawer overlay.</p>
            <p>It supports drag-to-dismiss gestures and locks body scroll when open.</p>
            <div className="h-32 rounded-xl bg-white/5 border border-white/10" />
            <div className="h-32 rounded-xl bg-white/5 border border-white/10" />
            <div className="h-32 rounded-xl bg-white/5 border border-white/10" />
          </div>
        </PeacockDrawer>
      </ComponentPreview>

      <ComponentPreview
        title="Left Drawer"
        description="Drawers can also be positioned on the left side."
        code={`<PeacockDrawer position="left" ... />`}
      >
         <PeacockButton variant="outline" onClick={() => setIsOpenLeft(true)}>
          Open Left Drawer
        </PeacockButton>

        <PeacockDrawer
          isOpen={isOpenLeft}
          onClose={() => setIsOpenLeft(false)}
          title="Navigation"
          position="left"
        >
          <div className="space-y-2 mt-4">
             {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item) => (
               <div key={item} className="p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors text-white/90">
                 {item}
               </div>
             ))}
          </div>
        </PeacockDrawer>
      </ComponentPreview>
    </div>
  );
};
