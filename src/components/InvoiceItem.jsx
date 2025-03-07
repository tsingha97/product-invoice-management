import React from "react";

const InvoiceItem = ({ item }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <p>
        <strong>Product:</strong> {item.productName}
      </p>
      <p>
        <strong>Quantity:</strong> {item.quantity}
      </p>
      <p>
        <strong>Regular Price:</strong> ${item.regularPrice.toFixed(2)}
      </p>
      <p>
        <strong>Deal Price:</strong>{" "}
        {item.dealPrice ? `$${item.dealPrice.toFixed(2)}` : "N/A"}
      </p>
      <p>
        <strong>Item Total:</strong> $
        {(item.quantity * (item.dealPrice || item.regularPrice)).toFixed(2)}
      </p>
      <p>
        <strong>Tax:</strong> ${item.tax.toFixed(2)}
      </p>
    </li>
  );
};

export default InvoiceItem;
