# Badge

The `PeacockBadge` is used to highlight small bits of information like status or categories.

## Usage

```tsx
import { PeacockBadge } from '@peacock-ui/core'

function Example() {
  return (
    <div className="flex gap-2">
      <PeacockBadge variant="primary">Stable</PeacockBadge>
      <PeacockBadge variant="success">Active</PeacockBadge>
      <PeacockBadge variant="danger">Error</PeacockBadge>
      <PeacockBadge variant="glass">Beta</PeacockBadge>
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'success' \| 'danger' \| 'glass'` | `'primary'` | The visual style of the badge. |
| `children` | `ReactNode` | - | The content inside the badge. |
| `className` | `string` | - | Additional CSS classes. |
