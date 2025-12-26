"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../hooks/utils";
import { PeacockButton } from "../PeacockButton";

const PeacockAlertDialog = AlertDialogPrimitive.Root;

const PeacockAlertDialogTrigger = AlertDialogPrimitive.Trigger;

const PeacockAlertDialogPortal = AlertDialogPrimitive.Portal;

const PeacockAlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
PeacockAlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const PeacockAlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <PeacockAlertDialogPortal>
    <PeacockAlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </PeacockAlertDialogPortal>
));
PeacockAlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const PeacockAlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
PeacockAlertDialogHeader.displayName = "PeacockAlertDialogHeader";

const PeacockAlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
PeacockAlertDialogFooter.displayName = "PeacockAlertDialogFooter";

const PeacockAlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-white", className)}
    {...props}
  />
));
PeacockAlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const PeacockAlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
PeacockAlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const PeacockAlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} asChild>
    <PeacockButton variant="primary" className={cn(className)} {...(props as any)} />
  </AlertDialogPrimitive.Action>
));
PeacockAlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const PeacockAlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel ref={ref} asChild>
    <PeacockButton variant="glass" className={cn("mt-2 sm:mt-0", className)} {...(props as any)} />
  </AlertDialogPrimitive.Cancel>
));
PeacockAlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  PeacockAlertDialog,
  PeacockAlertDialogPortal,
  PeacockAlertDialogOverlay,
  PeacockAlertDialogTrigger,
  PeacockAlertDialogContent,
  PeacockAlertDialogHeader,
  PeacockAlertDialogFooter,
  PeacockAlertDialogTitle,
  PeacockAlertDialogDescription,
  PeacockAlertDialogAction,
  PeacockAlertDialogCancel,
};
