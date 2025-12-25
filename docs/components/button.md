# Button

The `PeacockButton` is the primary action primitive, featuring a follow-mouse radial light source.

## Preview

<div class="p-8 flex items-center justify-center bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockButton variant="primary">
    Hover Me
  </PeacockButton>
</div>

## Usage

```tsx
import { PeacockButton } from '@peacock-ui/core'

function Example() {
  return (
    <PeacockButton variant="primary">
      Spread Plumage
    </PeacockButton>
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'outline' \| 'glass'` | `'primary'` | The visual style of the button. |
| `glowSize` | `number` | `150` | The radius of the follow-mouse glow effect. |
| `glow` | `boolean` | `true` | Whether to enable the plumage glow effect. |
| `children` | `ReactNode` | - | The content inside the button. |
