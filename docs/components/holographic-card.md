# Holographic Card

A 3D-tilt enabled card that tracks mouse movement to create a realistic holographic effect. Part of the **Quantum Engine**.

## Preview

<div class="p-20 flex items-center justify-center bg-black/50 rounded-xl border border-white/10 my-4 perspective-1000">
  <HolographicCard className="w-64 h-40 flex items-center justify-center">
    <span class="text-2xl font-bold text-white">Quantum</span>
  </HolographicCard>
</div>

## Usage

```tsx
import { HolographicCard } from '@peacock-ui/core';

export function FeatureCard() {
  return (
    <HolographicCard className="w-full max-w-sm">
      <h3 className="text-2xl font-bold text-white mb-2">Quantum Physics</h3>
      <p className="text-slate-400">
        Move your cursor over this card to see the 3D tilt effect in action.
      </p>
    </HolographicCard>
  );
}
```

## Features

- **3D Tilt**: Uses `transform: perspective(1000px) rotateX(...) rotateY(...)`.
- **Glossy Reflection**: A linear gradient overlay that moves opposite to the rotation to simulate light reflection.
- **Performance**: Powered by `useSpring` and `useTransform` for 60fps animations.
