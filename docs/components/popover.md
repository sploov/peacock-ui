# Popover

Displays rich content in a portal, triggered by a button.

## Preview

<PopoverDemo />

## Usage

```tsx
import {
  PeacockPopover,
  PeacockPopoverContent,
  PeacockPopoverTrigger,
  PeacockButton
} from '@peacock-ui/core';

export function PopoverExample() {
  return (
    <PeacockPopover>
      <PeacockPopoverTrigger asChild>
        <PeacockButton variant="outline">Open Popover</PeacockButton>
      </PeacockPopoverTrigger>
      <PeacockPopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-white">Dimensions</h4>
            <p className="text-sm text-gray-400">
              Set the dimensions for the layer.
            </p>
          </div>
        </div>
      </PeacockPopoverContent>
    </PeacockPopover>
  );
}
```
