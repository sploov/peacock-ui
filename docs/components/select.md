# Select

Displays a list of options for the user to pick from—triggered by a button.

## Preview

<SelectDemo />

## Usage

```tsx
import {
  PeacockSelect,
  PeacockSelectContent,
  PeacockSelectItem,
  PeacockSelectTrigger,
  PeacockSelectValue,
} from '@peacock-ui/core';

export function SelectExample() {
  return (
    <PeacockSelect>
      <PeacockSelectTrigger className="w-[180px]">
        <PeacockSelectValue placeholder="Theme" />
      </PeacockSelectTrigger>
      <PeacockSelectContent>
        <PeacockSelectItem value="light">Light</PeacockSelectItem>
        <PeacockSelectItem value="dark">Dark</PeacockSelectItem>
        <PeacockSelectItem value="system">System</PeacockSelectItem>
      </PeacockSelectContent>
    </PeacockSelect>
  );
}
```
