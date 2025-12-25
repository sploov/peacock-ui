# Avatar

Status-aware avatars with dynamic presence glows.

## Preview

<div class="p-8 flex gap-4 justify-center bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockAvatar status="online">
    <PeacockAvatarImage src="https://github.com/sploov.png" />
    <PeacockAvatarFallback>SP</PeacockAvatarFallback>
  </PeacockAvatar>
  
  <PeacockAvatar status="busy">
    <PeacockAvatarFallback>JD</PeacockAvatarFallback>
  </PeacockAvatar>
  
  <PeacockAvatar status="offline">
    <PeacockAvatarFallback>Guest</PeacockAvatarFallback>
  </PeacockAvatar>
</div>

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
