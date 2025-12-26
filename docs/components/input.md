# Input

`PeacockInput` provides a focus-reactive interface with dynamic glow borders.

## Preview

<ComponentPreview>
  <InputDemo />
</ComponentPreview>

## Usage

```tsx
import { PeacockInput } from '@peacock-ui/core'
import { Mail } from 'lucide-react'

function Example() {
  return (
    <PeacockInput 
      label="Email Address"
      placeholder="you@example.com"
      icon={<Mail size={16} />}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | Optional floating-style label. |
| `error` | `string` | - | Error message to display below the input. |
| `icon` | `ReactNode` | - | Icon to display on the left side. |
| `...props` | `InputAttributes` | - | Standard HTML input attributes. |