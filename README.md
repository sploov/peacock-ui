# 🦚 Peacock UI

**Fluidity over Staticity.** A high-fidelity, motion-first design system for React 19 and Tailwind CSS 4.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Motion-Framer-black.svg)](https://www.framer.com/motion/)

Peacock UI is not just a component library; it's an aesthetic framework designed to bridge the gap between static interfaces and immersive interactive experiences. Inspired by the sleek, high-end aesthetics of Discord and Linear.

## ✨ Features

- **🚀 React 19 Ready**: Built with the latest React features and optimizations.
- **🎨 Plumage Engine**: Dynamic Tailwind plugin for advanced glassmorphism and multi-layered gradients.
- **⚡ Physics-Based Motion**: Every component inherits spring physics (stiffness, damping, mass) for a natural feel.
- **🛡️ Type-Safe**: 100% TypeScript with strict prop definitions.
- **♿ Accessible**: Built with Radix UI primitives for WAI-ARIA compliance.
- **🌓 Dark Mode First**: Optimized for deep charcoal and neon-accented aesthetics.

## 📦 Installation

```bash
npm install @peacock-ui/core framer-motion tailwindcss lucide-react
```

## 🚀 Quick Start

1. **Setup Tailwind**: Add the Peacock plugin to your `tailwind.config.mjs`.
2. **Wrap your App**:

```tsx
import { PeacockProvider, PeacockButton } from '@peacock-ui/core';
import '@peacock-ui/core/style.css';

function App() {
  return (
    <PeacockProvider theme="dark">
      <PeacockButton onClick={() => console.log("Clicked!")}>
        Spread Plumage
      </PeacockButton>
    </PeacockProvider>
  );
}
```

## 🧱 Core Components

- **PeacockButton**: Follow-mouse radial light source effect.
- **FluidCard**: Seamless layout transitions using shared element logic.
- **GlassMenu**: Recursive command-palette style menu.
- **PeacockInput**: Interactive focus-glow borders.
- **PeacockSwitch**: Physics-based toggle interactions.

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