# Separator

Visually or semantically separates content.

## Preview

<SeparatorDemo />

## Usage

```tsx
import { PeacockSeparator } from '@peacock-ui/core';

export function SeparatorExample() {
  return (
    <div className="text-white">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Peacock UI</h4>
        <p className="text-sm text-gray-400">
          A high-fidelity design system.
        </p>
      </div>
      <PeacockSeparator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <PeacockSeparator orientation="vertical" />
        <div>Docs</div>
        <PeacockSeparator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
```
