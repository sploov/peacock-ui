# Input

`PeacockInput` provides a focus-reactive interface with dynamic glow borders.

## Preview

<div class="p-8 flex flex-col gap-4 max-w-sm mx-auto bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockInput label="Email Address" placeholder="you@example.com" />
  <PeacockInput label="Password" type="password" placeholder="••••••••" />
</div>

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