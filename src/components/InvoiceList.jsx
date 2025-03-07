import React, { useState, useEffect } from "react";
import axios from "axios";
import InvoiceDetail from "./InvoiceDetail";

const InvoiceList = () => {
  // State to store the list of invoices
  const [invoices, setInvoices] = useState([]);
  // State to store the selected invoice for detailed view
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Fetch invoice data when the component mounts
  useEffect(() => {
    axios
      .get("/data/invoices.json") // Load invoices from a local JSON file
      .then((response) => {
        setInvoices(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching invoices:", error); // Log errors if any
        setLoading(false);
      });
  }, []);

  // Function to handle click event and select an invoice
  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  // Show a loading message while data is being fetched
  if (loading) return <p>Loading invoices...</p>;

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {/* Render a list of invoices */}
        {invoices.map((invoice) => (
          <li
            key={invoice.orderId}
            onClick={() => handleInvoiceClick(invoice)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            {invoice.storeName} - Order #{invoice.orderId} - {invoice.date}
          </li>
        ))}
      </ul>
      {/* Show details of the selected invoice */}
      {selectedInvoice && <InvoiceDetail invoice={selectedInvoice} />}
    </div>
  );
};

export default InvoiceList;
