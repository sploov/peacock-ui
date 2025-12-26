import React from 'react';
import {
  PeacockPopover,
  PeacockPopoverContent,
  PeacockPopoverTrigger,
  PeacockButton,
  PeacockInput
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const PopoverDemo = () => {
  return (
    <ComponentPreview>
      <PeacockPopover>
        <PeacockPopoverTrigger asChild>
          <PeacockButton variant="outline">Open Popover</PeacockButton>
        </PeacockPopoverTrigger>
        <PeacockPopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-white">Dimensions</h4>
              <p className="text-sm text-gray-400">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="width" className="text-sm text-white">Width</label>
                <PeacockInput id="width" defaultValue="100%" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxWidth" className="text-sm text-white">Max. width</label>
                <PeacockInput id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="height" className="text-sm text-white">Height</label>
                <PeacockInput id="height" defaultValue="25px" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxHeight" className="text-sm text-white">Max. height</label>
                <PeacockInput id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PeacockPopoverContent>
      </PeacockPopover>
    </ComponentPreview>
  );
};
