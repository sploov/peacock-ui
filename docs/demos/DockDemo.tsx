import React from 'react';
import { PeacockDock } from '../../src';
import { Home, Search, Settings, User } from 'lucide-react';
import { ComponentPreview } from './ComponentPreview';

export const DockDemo = () => {
  const items = [
    { id: '1', icon: <Home />, label: 'Home' },
    { id: '2', icon: <Search />, label: 'Search' },
    { id: '3', icon: <User />, label: 'Profile' },
    { id: '4', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <ComponentPreview>
      <div className="py-12 flex items-center justify-center w-full">
        <PeacockDock items={items} />
      </div>
    </ComponentPreview>
  );
};
