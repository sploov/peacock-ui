# Context Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.

## Preview

<ContextMenuDemo />

## Usage

```tsx
import {
  PeacockContextMenu,
  PeacockContextMenuContent,
  PeacockContextMenuItem,
  PeacockContextMenuTrigger,
} from '@peacock-ui/core';

export function ContextMenuExample() {
  return (
    <PeacockContextMenu>
      <PeacockContextMenuTrigger>Right click here</PeacockContextMenuTrigger>
      <PeacockContextMenuContent>
        <PeacockContextMenuItem>Profile</PeacockContextMenuItem>
        <PeacockContextMenuItem>Billing</PeacockContextMenuItem>
        <PeacockContextMenuItem>Team</PeacockContextMenuItem>
        <PeacockContextMenuItem>Subscription</PeacockContextMenuItem>
      </PeacockContextMenuContent>
    </PeacockContextMenu>
  );
}
```
