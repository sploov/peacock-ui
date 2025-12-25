# Tooltip

A floating informational box that appears when hovering over an element.

## Preview

<div class="p-12 flex justify-center bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockTooltip content="This will spread the plumage">
    <PeacockButton>Hover Me</PeacockButton>
  </PeacockTooltip>
</div>

## Usage

```tsx
import { PeacockTooltip, PeacockButton } from '@peacock-ui/core'

function Example() {
  return (
    <PeacockTooltip content="This will spread the plumage">
      <PeacockButton>Hover Me</PeacockButton>
    </PeacockTooltip>
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | - | The text to display inside the tooltip. |
| `children` | `ReactNode` | - | The element that triggers the tooltip on hover. |
| `className` | `string` | - | Additional CSS classes for the tooltip box. |