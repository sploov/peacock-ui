# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

## Preview

<MenubarDemo />

## Usage

```tsx
import {
  PeacockMenubar,
  PeacockMenubarContent,
  PeacockMenubarItem,
  PeacockMenubarMenu,
  PeacockMenubarTrigger,
} from '@peacock-ui/core';

export function MenubarExample() {
  return (
    <PeacockMenubar>
      <PeacockMenubarMenu>
        <PeacockMenubarTrigger>File</PeacockMenubarTrigger>
        <PeacockMenubarContent>
          <PeacockMenubarItem>New Tab</PeacockMenubarItem>
          <PeacockMenubarItem>New Window</PeacockMenubarItem>
        </PeacockMenubarContent>
      </PeacockMenubarMenu>
    </PeacockMenubar>
  );
}
```
