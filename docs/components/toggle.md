# Toggle

A two-state button that can be either on or off.

## Preview

<ToggleDemo />

## Usage

```tsx
import { PeacockToggle } from '@peacock-ui/core';
import { Bold } from 'lucide-react';

export function ToggleExample() {
  return (
    <PeacockToggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </PeacockToggle>
  );
}
```
