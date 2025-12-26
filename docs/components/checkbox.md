# Checkbox

A control that allows the user to toggle between checked and not checked.

## Preview

<CheckboxDemo />

## Usage

```tsx
import { PeacockCheckbox } from '@peacock-ui/core';

export function CheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <PeacockCheckbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```
