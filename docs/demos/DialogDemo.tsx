import React from 'react';
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  PeacockButton 
} from '../../src';

export const DialogDemo = () => {
  return (
    <div className="flex items-center justify-center p-8 border border-white/10 rounded-xl bg-black/50">
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
            <p>Form content would go here...</p>
          </div>
          <DialogFooter>
            <PeacockButton variant="primary">Save changes</PeacockButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
