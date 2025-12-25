import React from 'react';
import { PeacockBadge } from '../../src';

export const BadgeDemo = () => {
  return (
    <div className="p-8 flex gap-4 justify-center bg-black/50 rounded-xl border border-white/10 my-4 flex-wrap">
      <PeacockBadge variant="primary">Stable</PeacockBadge>
      <PeacockBadge variant="success">Active</PeacockBadge>
      <PeacockBadge variant="danger">Error</PeacockBadge>
      <PeacockBadge variant="glass">Glass</PeacockBadge>
    </div>
  );
};
