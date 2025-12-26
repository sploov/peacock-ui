import React from 'react';
import { PeacockBadge } from '../../src';

export const BadgeDemo = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <PeacockBadge variant="primary">Stable</PeacockBadge>
      <PeacockBadge variant="success">Active</PeacockBadge>
      <PeacockBadge variant="danger">Error</PeacockBadge>
      <PeacockBadge variant="glass">Glass</PeacockBadge>
    </div>
  );
};
