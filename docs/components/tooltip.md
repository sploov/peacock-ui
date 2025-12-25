# Tooltip

A floating informational box that appears when hovering over an element.

## Preview

<TooltipDemo />

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