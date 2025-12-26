"use client";

import * as React from "react";
import { cn } from "../../hooks/utils";

const PeacockTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto rounded-md border border-white/10">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm text-left text-white", className)}
      {...props}
    />
  </div>
));
PeacockTable.displayName = "PeacockTable";

const PeacockTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
PeacockTableHeader.displayName = "PeacockTableHeader";

const PeacockTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
PeacockTableBody.displayName = "PeacockTableBody";

const PeacockTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-white/5 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
PeacockTableFooter.displayName = "PeacockTableFooter";

const PeacockTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-white/10 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10",
      className
    )}
    {...props}
  />
));
PeacockTableRow.displayName = "PeacockTableRow";

const PeacockTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-gray-400 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
PeacockTableHead.displayName = "PeacockTableHead";

const PeacockTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
PeacockTableCell.displayName = "PeacockTableCell";

const PeacockTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-400", className)}
    {...props}
  />
));
PeacockTableCaption.displayName = "PeacockTableCaption";

export {
  PeacockTable,
  PeacockTableHeader,
  PeacockTableBody,
  PeacockTableFooter,
  PeacockTableHead,
  PeacockTableRow,
  PeacockTableCell,
  PeacockTableCaption,
};
