import React from 'react';
import { PeacockAvatar, PeacockAvatarImage, PeacockAvatarFallback } from '../../src';

export const AvatarDemo = () => {
  return (
    <div className="p-8 flex gap-4 justify-center bg-black/50 rounded-xl border border-white/10 my-4">
      <PeacockAvatar status="online">
        <PeacockAvatarImage src="https://github.com/sploov.png" />
        <PeacockAvatarFallback>SP</PeacockAvatarFallback>
      </PeacockAvatar>
      
      <PeacockAvatar status="busy">
        <PeacockAvatarFallback>JD</PeacockAvatarFallback>
      </PeacockAvatar>
      
      <PeacockAvatar status="offline">
        <PeacockAvatarFallback>Guest</PeacockAvatarFallback>
      </PeacockAvatar>
    </div>
  );
};
