import React from 'react';
import { PeacockSlider } from '../../src';

export const SliderDemo = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <PeacockSlider defaultValue={[50]} max={100} step={1} />
    </div>
  );
};
