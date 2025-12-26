import React from 'react';
import { toast } from 'sonner';
import { PeacockButton } from '../../src';

export const ToastDemo = () => {
  return (
    <div className="flex items-center justify-center">
      <PeacockToaster />
      <PeacockButton
        onClick={() =>
          toast("Plumage Initialized", {
            description: "The Quantum Engine is now running at 60fps.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </PeacockButton>
    </div>
  );
};
