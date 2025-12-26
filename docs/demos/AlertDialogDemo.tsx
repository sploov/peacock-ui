import React from 'react';
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
  PeacockButton,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const AlertDialogDemo = () => {
  return (
    <ComponentPreview>
      <PeacockAlertDialog>
        <PeacockAlertDialogTrigger asChild>
          <PeacockButton variant="outline">Show Dialog</PeacockButton>
        </PeacockAlertDialogTrigger>
        <PeacockAlertDialogContent>
          <PeacockAlertDialogHeader>
            <PeacockAlertDialogTitle>Are you absolutely sure?</PeacockAlertDialogTitle>
            <PeacockAlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </PeacockAlertDialogDescription>
          </PeacockAlertDialogHeader>
          <PeacockAlertDialogFooter>
            <PeacockAlertDialogCancel>Cancel</PeacockAlertDialogCancel>
            <PeacockAlertDialogAction>Continue</PeacockAlertDialogAction>
          </PeacockAlertDialogFooter>
        </PeacockAlertDialogContent>
      </PeacockAlertDialog>
    </ComponentPreview>
  );
};
