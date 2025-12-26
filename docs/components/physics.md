# Physics Primitives

WebGL-powered 3D interactive primitives with real-time physics simulation using `@react-three/cannon`.

## Preview

<PhysicsDemo />

## Usage

```tsx
import { PeacockPhysicsScene, InteractiveBox, InteractiveSphere } from '@peacock-ui/core';

export function My3DScene() {
  return (
    <PeacockPhysicsScene />
  );
}
```

## Features

- **Physics Engine**: Integrated with `cannon-es` (via `@react-three/cannon`).
- **Interactivity**: Click to apply impulses, hover states.
- **Lighting & Shadows**: Pre-configured soft shadows and environment lighting.
- **Components**:
  - `PhysicsPlane`: Static floor/collider.
  - `InteractiveBox`: Dynamic box with hover/click interactions.
  - `InteractiveSphere`: Dynamic sphere with bounce physics.
