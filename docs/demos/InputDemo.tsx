import React from 'react';
import { PeacockInput } from '../../src';

export const InputDemo = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
      <PeacockInput label="Email Address" placeholder="you@example.com" />
      <PeacockInput label="Password" type="password" placeholder="••••••••" />
    </div>
  );
};
