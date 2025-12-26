# Sheet

Extends the Dialog component to display content that complements the main screen content.

## Preview

<SheetDemo />

## Usage

```tsx
import {
  PeacockSheet,
  PeacockSheetContent,
  PeacockSheetTrigger,
} from '@peacock-ui/core';

export function SheetExample() {
  return (
    <PeacockSheet>
      <PeacockSheetTrigger>Open</PeacockSheetTrigger>
      <PeacockSheetContent>
        <p>This is a sheet.</p>
      </PeacockSheetContent>
    </PeacockSheet>
  );
}
```
