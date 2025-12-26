import React from 'react';
import { PeacockAvatar, PeacockAvatarImage, PeacockAvatarFallback } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const AvatarDemo = () => {
  return (
    <ComponentPreview>
      <div className="flex gap-8 justify-center items-center">
        <PeacockAvatar status="online">
          <PeacockAvatarImage src="https://github.com/sploov.png" />
          <PeacockAvatarFallback>SP</PeacockAvatarFallback>
        </PeacockAvatar>
        
        <PeacockAvatar status="busy">
          <PeacockAvatarFallback>JD</PeacockAvatarFallback>
        </PeacockAvatar>
        
        <PeacockAvatar status="offline">
          <PeacockAvatarFallback>GU</PeacockAvatarFallback>
        </PeacockAvatar>
      </div>
    </ComponentPreview>
  );
};
