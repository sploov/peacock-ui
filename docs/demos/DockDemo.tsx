import React from 'react';
import { PeacockDock } from '../../src';
import { Home, Search, Bell, Settings, User } from 'lucide-react';

export const DockDemo = () => {
  const items = [
    { id: '1', icon: <Home />, label: 'Home' },
    { id: '2', icon: <Search />, label: 'Search' },
    { id: '3', icon: <Bell />, label: 'Notifications' },
    { id: '4', icon: <User />, label: 'Profile' },
    { id: '5', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="h-32 flex items-end justify-center pb-4 border border-white/10 rounded-xl bg-black/50">
      <PeacockDock items={items} />
    </div>
  );
};
