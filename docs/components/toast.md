# Toast

An opinionated toast component for React, powered by `sonner`.

## Preview

<ToastDemo />

## Usage

1. Add the `<PeacockToaster />` to your app root.

```tsx
// App.tsx
import { PeacockToaster } from '@peacock-ui/core';

export default function App({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PeacockToaster />
      </body>
    </html>
  );
}
```

2. Trigger toasts from anywhere.

```tsx
import { toast } from 'sonner';
import { PeacockButton } from '@peacock-ui/core';

export function MyComponent() {
  return (
    <PeacockButton 
      onClick={() => toast.success('Event created', {
        description: 'Monday, January 3rd at 6:00pm',
      })}
    >
      Create Event
    </PeacockButton>
  );
}
```

## Styling

The toaster is pre-configured to match the Peacock UI aesthetic:
- **Background**: `peacock-surface-1` with `plumage-glass` effect.
- **Typography**: Inter / Geist.
- **Colors**: Uses semantic success/danger/info colors.
