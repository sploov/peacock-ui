import React from 'react';
import {
  PeacockSheet,
  PeacockSheetContent,
  PeacockSheetDescription,
  PeacockSheetHeader,
  PeacockSheetTitle,
  PeacockSheetTrigger,
  PeacockButton,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const SheetDemo = () => {
  return (
    <ComponentPreview>
      <PeacockSheet>
        <PeacockSheetTrigger asChild>
          <PeacockButton variant="outline">Open Sheet</PeacockButton>
        </PeacockSheetTrigger>
        <PeacockSheetContent>
          <PeacockSheetHeader>
            <PeacockSheetTitle>Edit profile</PeacockSheetTitle>
            <PeacockSheetDescription>
              Make changes to your profile here. Click save when you're done.
            </PeacockSheetDescription>
          </PeacockSheetHeader>
          <div className="grid gap-4 py-4">
             {/* Content would go here */}
             <div className="text-white">Profile Content...</div>
          </div>
        </PeacockSheetContent>
      </PeacockSheet>
    </ComponentPreview>
  );
};
