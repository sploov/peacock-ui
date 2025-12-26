"use client";

import * as React from "react";
import { cn } from "../../hooks/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const PeacockSheet = DialogPrimitive.Root;

const PeacockSheetTrigger = DialogPrimitive.Trigger;

const PeacockSheetClose = DialogPrimitive.Close;

const PeacockSheetPortal = DialogPrimitive.Portal;

const PeacockSheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
PeacockSheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sheetVariants = {
  side: {
    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    bottom:
      "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
    right:
      "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
  },
};

interface PeacockSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: keyof typeof sheetVariants.side;
}

const PeacockSheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  PeacockSheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <PeacockSheetPortal>
    <PeacockSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-[#0a0a0a]/95 backdrop-blur-xl p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300 border-white/10",
        sheetVariants.side[side],
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-white">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </PeacockSheetPortal>
));
PeacockSheetContent.displayName = DialogPrimitive.Content.displayName;

const PeacockSheetHeader = ({
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
PeacockSheetHeader.displayName = "PeacockSheetHeader";

const PeacockSheetFooter = ({
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
PeacockSheetFooter.displayName = "PeacockSheetFooter";

const PeacockSheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-white", className)}
    {...props}
  />
));
PeacockSheetTitle.displayName = DialogPrimitive.Title.displayName;

const PeacockSheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
PeacockSheetDescription.displayName = DialogPrimitive.Description.displayName;

export {
  PeacockSheet,
  PeacockSheetTrigger,
  PeacockSheetClose,
  PeacockSheetContent,
  PeacockSheetHeader,
  PeacockSheetFooter,
  PeacockSheetTitle,
  PeacockSheetDescription,
};
