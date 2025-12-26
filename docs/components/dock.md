# Dock

A macOS-style dock with non-linear magnification.

## Preview

<DockDemo />

## Usage

```tsx
import { PeacockDock, DockItem } from '@peacock-ui/core';
import { Home, Search, Bell, Settings } from 'lucide-react';

const items: DockItem[] = [
  { id: '1', icon: <Home />, label: 'Home' },
  { id: '2', icon: <Search />, label: 'Search' },
  { id: '3', icon: <Bell />, label: 'Notifications' },
  { id: '4', icon: <Settings />, label: 'Settings' },
];

export function Navigation() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <PeacockDock items={items} />
    </div>
  );
}
```

## Features

- **Magnification**: Items scale up based on proximity to the mouse cursor.
- **Spring Physics**: Smooth damping when icons return to rest state.
- **Heavy Glass**: Uses the `plumage-glass-heavy` utility for a premium floating look.
