import React from 'react';
import { PeacockRadioGroup, PeacockRadioGroupItem } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const RadioGroupDemo = () => {
  return (
    <ComponentPreview>
      <PeacockRadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <PeacockRadioGroupItem value="default" id="r1" />
          <label htmlFor="r1" className="text-white text-sm">Default</label>
        </div>
        <div className="flex items-center space-x-2">
          <PeacockRadioGroupItem value="comfortable" id="r2" />
          <label htmlFor="r2" className="text-white text-sm">Comfortable</label>
        </div>
        <div className="flex items-center space-x-2">
          <PeacockRadioGroupItem value="compact" id="r3" />
          <label htmlFor="r3" className="text-white text-sm">Compact</label>
        </div>
      </PeacockRadioGroup>
    </ComponentPreview>
  );
};
