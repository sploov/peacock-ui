import React from 'react';
import { PeacockTextarea } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const TextareaDemo = () => {
  return (
    <ComponentPreview>
      <div className="w-full max-w-sm">
        <PeacockTextarea placeholder="Type your message here." />
      </div>
    </ComponentPreview>
  );
};
