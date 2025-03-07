import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <header>
        <h1>Ecommerce Portal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/products/*" element={<ProductList />} />
          <Route path="*" element={<h2>Welcome to the Ecommerce Portal</h2>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
