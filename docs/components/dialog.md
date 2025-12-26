# Dialog

A modal dialog that interrupts the user with important content, expecting a response.

## Preview

<ComponentPreview>
  <DialogDemo />
</ComponentPreview>

## Usage

```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  PeacockButton 
} from '@peacock-ui/core';

export default () => (
  <Dialog>
    <DialogTrigger asChild>
      <PeacockButton>Open Dialog</PeacockButton>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      
      <div className="py-4 text-slate-200">
        {/* Your form content here */}
        <p>Form fields go here...</p>
      </div>
      
      <DialogFooter>
        <PeacockButton variant="primary">Save changes</PeacockButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
```

## Features

- **Backdrop Blur**: Uses `plumage-glass-heavy` for a deep, immersive background overlay.
- **Spring Animation**: Enters with a smooth spring physics animation (scale + fade).
- **Noise Texture**: Inherits the system-wide noise texture for a tangible feel.
- **Accessibility**: Built on Radix UI Dialog primitive for full keyboard and screen reader support.

## API Reference

The component exports the following sub-components:

- `Dialog`: The root component.
- `DialogTrigger`: The button that opens the dialog.
- `DialogContent`: The content container (includes the overlay and portal).
- `DialogHeader`: Header section for title and description.
- `DialogTitle`: The title of the dialog.
- `DialogDescription`: A description of the dialog's purpose.
- `DialogFooter`: Footer section for actions.
