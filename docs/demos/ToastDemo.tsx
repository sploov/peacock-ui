import React from 'react';
import { toast } from 'sonner';
import { PeacockButton } from '../../src';

export const ToastDemo = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-8 border border-white/10 rounded-xl bg-black/50">
      <div className="flex gap-4">
        <PeacockButton 
          variant="outline"
          onClick={() => toast('Event has been created', {
            description: 'Sunday, December 25th at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            },
          })}
        >
          Show Toast
        </PeacockButton>
        <PeacockButton 
          variant="primary"
          onClick={() => toast.success('Operation Successful')}
        >
          Success
        </PeacockButton>
      </div>
    </div>
  );
};
