# Code Block

A styled container for displaying code snippets or terminal output.

## Preview

<ComponentPreview>
  <CodeDemo />
</ComponentPreview>

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
