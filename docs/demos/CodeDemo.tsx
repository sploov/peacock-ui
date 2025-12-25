import React from 'react';
import { PeacockCode } from '../../src';

export const CodeDemo = () => {
  return (
    <div className="p-8 bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockCode>
        npm install @peacock-ui/core
      </PeacockCode>
    </div>
  );
};
