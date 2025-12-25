# Slider

A physics-backed slider with a glowing "neon" thumb.

## Preview

<div class="p-8 w-full max-w-sm mx-auto bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockSlider defaultValue={[50]} max={100} step={1} />
</div>

## Usage

```tsx
import { PeacockSlider } from '@peacock-ui/core'

function Example() {
  return (
    <PeacockSlider defaultValue={[50]} max={100} step={1} />
  )
}
```

## Features

- **Neon Thumb**: Uses a `box-shadow` to create a light source effect.
- **Physics**: The thumb scales up on hover/drag using Framer Motion.
