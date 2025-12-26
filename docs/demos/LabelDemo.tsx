import React from 'react';
import { PeacockLabel, PeacockCheckbox } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const LabelDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center space-x-2">
        <PeacockCheckbox id="terms" />
        <PeacockLabel htmlFor="terms">Accept terms and conditions</PeacockLabel>
      </div>
    </ComponentPreview>
  );
};
