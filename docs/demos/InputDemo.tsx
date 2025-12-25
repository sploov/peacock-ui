import React from 'react';
import { PeacockInput } from '../../src';

export const InputDemo = () => {
  return (
    <div className="p-8 flex flex-col gap-4 max-w-sm mx-auto bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockInput label="Email Address" placeholder="you@example.com" />
      <PeacockInput label="Password" type="password" placeholder="••••••••" />
    </div>
  );
};
