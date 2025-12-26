# Scroll Area

Augments native scroll functionality for custom, cross-browser styling.

## Preview

<ScrollAreaDemo />

## Usage

```tsx
import { PeacockScrollArea, PeacockSeparator } from '@peacock-ui/core';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function ScrollAreaExample() {
  return (
    <PeacockScrollArea className="h-72 w-48 rounded-md border border-white/10 p-4">
      <div className="mb-4">
        <h4 className="mb-4 text-sm font-medium leading-none text-white">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm text-white/80">{tag}</div>
            <PeacockSeparator className="my-2" />
          </>
        ))}
      </div>
    </PeacockScrollArea>
  );
}
```
