import React from 'react';
import {
  PeacockTable,
  PeacockTableBody,
  PeacockTableCaption,
  PeacockTableCell,
  PeacockTableHead,
  PeacockTableHeader,
  PeacockTableRow,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
];

export const TableDemo = () => {
  return (
    <ComponentPreview>
      <PeacockTable>
        <PeacockTableCaption>A list of your recent invoices.</PeacockTableCaption>
        <PeacockTableHeader>
          <PeacockTableRow>
            <PeacockTableHead className="w-[100px]">Invoice</PeacockTableHead>
            <PeacockTableHead>Status</PeacockTableHead>
            <PeacockTableHead>Method</PeacockTableHead>
            <PeacockTableHead className="text-right">Amount</PeacockTableHead>
          </PeacockTableRow>
        </PeacockTableHeader>
        <PeacockTableBody>
          {invoices.map((invoice) => (
            <PeacockTableRow key={invoice.invoice}>
              <PeacockTableCell className="font-medium">{invoice.invoice}</PeacockTableCell>
              <PeacockTableCell>{invoice.paymentStatus}</PeacockTableCell>
              <PeacockTableCell>{invoice.paymentMethod}</PeacockTableCell>
              <PeacockTableCell className="text-right">{invoice.totalAmount}</PeacockTableCell>
            </PeacockTableRow>
          ))}
        </PeacockTableBody>
      </PeacockTable>
    </ComponentPreview>
  );
};
