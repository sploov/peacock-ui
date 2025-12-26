import React from 'react';
import { PeacockScrollArea, PeacockSeparator } from '../../src';
import { ComponentPreview } from './ComponentPreview';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const ScrollAreaDemo = () => {
  return (
    <ComponentPreview>
      <PeacockScrollArea className="h-72 w-48 rounded-md border border-white/10 p-4">
        <div className="mb-4">
          <h4 className="mb-4 text-sm font-medium leading-none text-white">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm text-white/80">{tag}</div>
              <PeacockSeparator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </PeacockScrollArea>
    </ComponentPreview>
  );
};
