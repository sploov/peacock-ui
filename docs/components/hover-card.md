# Hover Card

For sighted users to preview content available behind a link.

## Preview

<HoverCardDemo />

## Usage

```tsx
import {
  PeacockHoverCard,
  PeacockHoverCardContent,
  PeacockHoverCardTrigger,
} from '@peacock-ui/core';

export function HoverCardExample() {
  return (
    <PeacockHoverCard>
      <PeacockHoverCardTrigger>Hover me</PeacockHoverCardTrigger>
      <PeacockHoverCardContent>
        The React Framework – created and maintained by @vercel.
      </PeacockHoverCardContent>
    </PeacockHoverCard>
  );
}
```
