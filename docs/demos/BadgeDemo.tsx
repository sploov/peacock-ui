import React from 'react';
import { PeacockBadge } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const BadgeDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex gap-4 justify-center flex-wrap">
        <PeacockBadge variant="primary">Stable</PeacockBadge>
        <PeacockBadge variant="success">Active</PeacockBadge>
        <PeacockBadge variant="danger">Error</PeacockBadge>
        <PeacockBadge variant="glass">Glass</PeacockBadge>
      </div>
    </ComponentPreview>
  );
};
