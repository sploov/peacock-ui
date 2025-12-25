# Getting Started

## Installation

Install Peacock UI and its peer dependencies via npm:

```bash
npm install @peacock-ui/core framer-motion tailwindcss lucide-react
```

## Basic Setup

1. **Tailwind Configuration**

Add the Peacock UI classes to your `tailwind.config.mjs` and include the `plumage-glass` and `noise-texture` utilities:

```js
// tailwind.config.mjs
export default {
  content: [
    "./node_modules/@peacock-ui/core/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: '#5865F2',
          success: '#23a559',
          danger: '#f43f5e',
          dark: '#0f0f12',
        }
      }
    }
  },
  // ... see theming guide for full plugin details
}
```

2. **Provider Setup**

Wrap your root component with the `PeacockProvider` and `MotionProvider`:

```tsx
import { PeacockProvider, MotionProvider } from '@peacock-ui/core';
import '@peacock-ui/core/style.css';

export default function App({ children }) {
  return (
    <PeacockProvider theme="dark">
      <MotionProvider>
        {children}
      </MotionProvider>
    </PeacockProvider>
  );
}
```