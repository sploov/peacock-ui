<p align="center">
  <img src="docs/public/logo.svg" width="120" alt="Peacock UI Logo" />
</p>

# 🦚 Peacock UI v3.0.1 (Quantum)

**Fluidity over Staticity.** A high-fidelity, motion-first design system for React 19.

[![NPM Version](https://img.shields.io/npm/v/@peacock-ui/core?color=6366f1)](https://www.npmjs.com/package/@peacock-ui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Motion-Framer-black.svg)](https://www.framer.com/motion/)
[![WebGL](https://img.shields.io/badge/Engine-Quantum--WebGL-6366f1.svg)](https://threejs.org/)

Peacock UI v3 introduces the **Quantum Engine**—a hybrid rendering architecture that bridges standard React DOM components with a WebGL acceleration layer. Designed for developers who demand Discord-grade aesthetics and sub-millisecond interaction physics.

[**Documentation**](https://sploov.github.io/peacock-ui/) | [**Changelog**](docs/guide/changelog.md) | [**Contributing**](CONTRIBUTING.md)

## ✨ Features

- **⚛️ Quantum Engine**: Integrated `@react-three/fiber` layer for fluid background shaders and 3D holographic effects.
- **🎨 Deep Glass Revamp (v3.0.1)**: Refined glassmorphism system with high-contrast darkening and vibrant indigo accents.
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

## 🧱 New in v3.0.1

### `PeacockCarousel`
A 3D parallax slider with physics-based drag interactions and touch support.
```tsx
<PeacockCarousel items={items} />
```

### `PeacockDrawer`
High-performance glassmorphic side-sheet overlay with drag-to-dismiss gestures.
```tsx
<PeacockDrawer isOpen={open} onClose={() => setOpen(false)} title="Settings">
  {/* Content */}
</PeacockDrawer>
```

### `PeacockBreadcrumb`
An elegant, glass-styled navigation trail for deep application hierarchies.
```tsx
<PeacockBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Components' }]} />
```

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/sploov/peacock-ui

# Install dependencies
npm install

# Run the documentation site locally
npm run docs:dev

# Build the library
npm run build
```

## 📜 License

MIT © [Sploov](https://github.com/sploov)
