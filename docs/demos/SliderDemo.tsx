import React from 'react';
import { PeacockSlider } from '../../src';

export const SliderDemo = () => {
  return (
    <div className="p-8 w-full max-w-sm mx-auto bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockSlider defaultValue={[50]} max={100} step={1} />
    </div>
  );
};
