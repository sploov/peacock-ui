# Drawer

A glassmorphic side-sheet overlay that slides in from the edge of the screen.

<script setup>
import { DrawerDemo } from '../demos/DrawerDemo'
</script>

<DrawerDemo />

## Usage

```tsx
import { useState } from 'react';
import { PeacockDrawer, PeacockButton } from '@peacock-ui/core';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PeacockButton onClick={() => setOpen(true)}>Open Drawer</PeacockButton>
      
      <PeacockDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="My Drawer"
        position="right"
      >
        <p>Drawer content goes here...</p>
      </PeacockDrawer>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Whether the drawer is visible. |
| `onClose` | `() => void` | `-` | Callback fired when closing is requested. |
| `position` | `'left' \| 'right'` | `'right'` | Which side the drawer slides from. |
| `title` | `string` | `-` | Optional title displayed in the header. |
| `children` | `ReactNode` | `-` | The content of the drawer. |
| `className` | `string` | `-` | Additional CSS classes. |
