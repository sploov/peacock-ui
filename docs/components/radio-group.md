# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

## Preview

<RadioGroupDemo />

## Usage

```tsx
import { PeacockRadioGroup, PeacockRadioGroupItem } from '@peacock-ui/core';

export function RadioGroupExample() {
  return (
    <PeacockRadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <PeacockRadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-white text-sm">Default</label>
      </div>
      <div className="flex items-center space-x-2">
        <PeacockRadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-white text-sm">Comfortable</label>
      </div>
      <div className="flex items-center space-x-2">
        <PeacockRadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-white text-sm">Compact</label>
      </div>
    </PeacockRadioGroup>
  );
}
```
