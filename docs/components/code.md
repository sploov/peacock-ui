# Code Block

A styled container for displaying code snippets or terminal output.

## Preview

<div class="p-8 bg-black/50 rounded-xl border border-white/10 my-4">
  <PeacockCode>
    npm install @peacock-ui/core
  </PeacockCode>
</div>

## Usage

```tsx
import { PeacockCode } from '@peacock-ui/core';

const code = `npm install @peacock-ui/core`;

export function InstallCommand() {
  return (
    <PeacockCode>
      {code}
    </PeacockCode>
  );
}
```

## Features

- **Terminal Header**: Includes Mac-style window controls (Red/Yellow/Green dots).
- **Glassmorphism**: Subtle border and background integration.
- **Scrollbar**: Custom styled scrollbar for overflow content.
