# Table

A responsive table component.

## Preview

<TableDemo />

## Usage

```tsx
import {
  PeacockTable,
  PeacockTableBody,
  PeacockTableCell,
  PeacockTableHead,
  PeacockTableHeader,
  PeacockTableRow,
} from '@peacock-ui/core';

export function TableExample() {
  return (
    <PeacockTable>
      <PeacockTableHeader>
        <PeacockTableRow>
          <PeacockTableHead>Invoice</PeacockTableHead>
          <PeacockTableHead>Status</PeacockTableHead>
          <PeacockTableHead>Method</PeacockTableHead>
          <PeacockTableHead>Amount</PeacockTableHead>
        </PeacockTableRow>
      </PeacockTableHeader>
      <PeacockTableBody>
        <PeacockTableRow>
          <PeacockTableCell>INV001</PeacockTableCell>
          <PeacockTableCell>Paid</PeacockTableCell>
          <PeacockTableCell>Credit Card</PeacockTableCell>
          <PeacockTableCell>$250.00</PeacockTableCell>
        </PeacockTableRow>
      </PeacockTableBody>
    </PeacockTable>
  );
}
```
