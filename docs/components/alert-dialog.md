# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Preview

<AlertDialogDemo />

## Usage

```tsx
import {
  PeacockAlertDialog,
  PeacockAlertDialogAction,
  PeacockAlertDialogCancel,
  PeacockAlertDialogContent,
  PeacockAlertDialogDescription,
  PeacockAlertDialogFooter,
  PeacockAlertDialogHeader,
  PeacockAlertDialogTitle,
  PeacockAlertDialogTrigger,
} from '@peacock-ui/core';

export function AlertDialogExample() {
  return (
    <PeacockAlertDialog>
      <PeacockAlertDialogTrigger>Open</PeacockAlertDialogTrigger>
      <PeacockAlertDialogContent>
        <PeacockAlertDialogHeader>
          <PeacockAlertDialogTitle>Are you sure?</PeacockAlertDialogTitle>
          <PeacockAlertDialogDescription>
            This action cannot be undone.
          </PeacockAlertDialogDescription>
        </PeacockAlertDialogHeader>
        <PeacockAlertDialogFooter>
          <PeacockAlertDialogCancel>Cancel</PeacockAlertDialogCancel>
          <PeacockAlertDialogAction>Continue</PeacockAlertDialogAction>
        </PeacockAlertDialogFooter>
      </PeacockAlertDialogContent>
    </PeacockAlertDialog>
  );
}
```
