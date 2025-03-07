import React from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceDetail = ({ invoice }) => {
  // Calculate totals
  const totalWithoutTax = invoice.items.reduce(
    (total, item) =>
      total + (item.dealPrice || item.regularPrice) * item.quantity,
    0
  );
  const totalTax = invoice.items.reduce(
    (total, item) => total + (item.tax || 0),
    0
  );
  const grandTotal = totalWithoutTax + totalTax;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}
    >
      <h3>Invoice Details</h3>
      <p>
        <strong>Store:</strong> {invoice.storeName}
      </p>
      <p>
        <strong>Order ID:</strong> {invoice.orderId}
      </p>
      <p>
        <strong>Date:</strong> {invoice.date}
      </p>
      <h4>Items:</h4>
      <ul>
        {invoice.items.map((item, index) => (
          <InvoiceItem key={index} item={item} />
        ))}
      </ul>
      <p>
        <strong>Total Without Tax:</strong> ${totalWithoutTax.toFixed(2)}
      </p>
      <p>
        <strong>Total Tax:</strong> ${totalTax.toFixed(2)}
      </p>
      <p>
        <strong>Grand Total:</strong> ${grandTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default InvoiceDetail;
