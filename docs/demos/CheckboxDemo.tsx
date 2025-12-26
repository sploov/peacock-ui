import React from 'react';
import { PeacockCheckbox } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const CheckboxDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex items-center space-x-2">
        <PeacockCheckbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
        >
          Accept terms and conditions
        </label>
      </div>
    </ComponentPreview>
  );
};
