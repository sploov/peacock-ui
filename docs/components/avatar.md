# Avatar

Status-aware avatars with dynamic presence glows.

## Preview

<AvatarDemo />

## Usage

```tsx
import { PeacockAvatar, PeacockAvatarImage, PeacockAvatarFallback } from '@peacock-ui/core'

function Example() {
  return (
    <PeacockAvatar status="online">
      <PeacockAvatarImage src="https://github.com/sploov.png" />
      <PeacockAvatarFallback>SP</PeacockAvatarFallback>
    </PeacockAvatar>
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `status` | `'online' \| 'offline' \| 'busy'` | - | Shows a status indicator dot. |
| `glow` | `boolean` | `true` | Whether to show the outer glow. |
