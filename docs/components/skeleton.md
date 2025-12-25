# Skeleton

Use to show a placeholder while content is loading.

## Preview

<SkeletonDemo />

## Usage

```tsx
import { PeacockSkeleton } from '@peacock-ui/core';

export function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <PeacockSkeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <PeacockSkeleton className="h-4 w-[250px]" />
        <PeacockSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
```

## Features

- **Animation**: Subtle pulse effect.
- **Texture**: Uses `white/10` to blend perfectly with dark mode surfaces.
