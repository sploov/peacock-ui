# 🦚 Peacock UI v3 (Quantum)

**Fluidity over Staticity.** A high-fidelity, WebGL-accelerated design system for React 19.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Motion-Framer-black.svg)](https://www.framer.com/motion/)
[![WebGL](https://img.shields.io/badge/Engine-Quantum--WebGL-5865F2.svg)](https://threejs.org/)

Peacock UI v3 introduces the **Quantum Engine**—a hybrid rendering architecture that bridges standard React DOM components with a WebGL acceleration layer. Designed for developers who demand Discord-grade aesthetics and sub-millisecond interaction physics.

## ✨ Features

- **⚛️ Quantum Engine**: Integrated `@react-three/fiber` layer for fluid background shaders and 3D holographic effects.
- **🎨 Plumage Engine v2**: Enhanced Tailwind plugin with deep glassmorphism (`plumage-glass-heavy`) and noise textures.
- **🚀 React 19 Native**: Optimized for the latest React concurrency features and compiler.
- **⚡ Physics-Based Motion**: Mass, stiffness, and damping are first-class citizens in every component.
- **🌓 Dark Mode First**: A deep charcoal and neon-accented aesthetic inspired by high-end gaming platforms.

## 📦 Installation

```bash
npm install @peacock-ui/core framer-motion three @react-three/fiber @react-three/drei lucide-react
```

## 🚀 Quick Start

1. **Setup Tailwind**: Add the Peacock plugin to your `tailwind.config.mjs`.
2. **Wrap your App**:

```tsx
import { PeacockProvider, PeacockButton, HolographicCard } from '@peacock-ui/core';
import '@peacock-ui/core/style.css';

function App() {
  return (
    <PeacockProvider theme="dark">
      <div className="p-20">
        <HolographicCard>
          <h1 className="text-white text-3xl font-bold">Quantum Interface</h1>
          <PeacockButton className="mt-4">
            Initialize Engine
          </PeacockButton>
        </HolographicCard>
      </div>
    </PeacockProvider>
  );
}
```

## 🧱 Quantum Components

### `HolographicCard`
A 3D-tilt card that tracks mouse movement with sub-millisecond latency and simulated light reflections.
```tsx
<HolographicCard>
  {/* Your Content */}
</HolographicCard>
```

### `PeacockDock`
macOS-inspired navigation with non-linear magnification and spring-loaded scaling.
```tsx
<PeacockDock items={[{ id: '1', icon: <Home />, label: 'Home' }]} />
```

### `PeacockCommand`
A high-fidelity command palette (Cmd+K) with integrated glassmorphism.
```tsx
<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
  <CommandInput placeholder="Search commands..." />
  {/* ... items */}
</CommandDialog>
```

### `PeacockButton`
Interactive light-source button with follow-mouse radial gradients and physics-based haptics.
```tsx
<PeacockButton variant="primary" glowSize={150}>
  Spread Plumage
</PeacockButton>
```

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/sploov/peacock-ui

# Install dependencies
npm install

# Run the documentation site locally
npm run dev

# Build the library
npm run build
```

## 📜 License

MIT © [Sploov](https://github.com/sploov)
