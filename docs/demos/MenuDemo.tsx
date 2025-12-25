import React, { useState } from 'react';
import { GlassMenu, PeacockButton } from '../../src';

export const MenuDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: '1', label: 'Dashboard' },
    { id: '2', label: 'Settings' },
    { id: '3', label: 'Profile' },
    { id: '4', label: 'Logout' },
  ];

  return (
    <div className="h-64 flex items-center justify-center border border-white/10 rounded-xl bg-black/50 relative overflow-hidden">
      <div className="absolute top-8">
        <PeacockButton onClick={() => setIsOpen(true)}>
          Open Menu
        </PeacockButton>
      </div>
      
      <GlassMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        items={items}
      />
    </div>
  );
};
