import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import StoreFilter from "./StoreFilter";
import SearchBar from "./SearchBar";

const ProductList = () => {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to filter products by store
  const [filterStore, setFilterStore] = useState("");
  // State to store the search term for filtering by product name
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch product data when the component mounts
  useEffect(() => {
    axios
      .get("/data/products.json") // Fetch product data from local JSON file
      .then((response) => response.data)
      .then((data) => setProducts(data)) // Store retrieved products in state
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle product deletion
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Filter products based on store and search term
  const filteredProducts = products.filter((product) => {
    return (
      (filterStore === "" || product.storeName === filterStore) &&
      (searchTerm === "" ||
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {/* Store filter dropdown */}
        <StoreFilter
          filterStore={filterStore}
          setFilterStore={setFilterStore}
          products={products}
        />
        {/* Search bar for product name filtering */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* Button to navigate to the product creation form */}
        <button onClick={() => navigate("/products/new")}>
          Add New Product
        </button>
      </div>
      {/* Display filtered product list */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {/* Link to product detail page */}
            <Link to={`/products/${product.id}`}>
              {product.productName}
            </Link> - {product.storeName} - ${product.price}
            {/* Button to navigate to the edit form for the selected product */}
            <button onClick={() => navigate(`/products/edit/${product.id}`)}>
              Edit
            </button>
            {/* Button to delete the product */}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Nested Routes for Product Details and Forms */}
      <Routes>
        {/* Route for adding a new product */}
        <Route
          path="new"
          element={
            <ProductForm products={products} setProducts={setProducts} />
          }
        />
        {/* Route for editing an existing product */}
        <Route
          path="edit/:id"
          element={
            <ProductForm
              products={products}
              setProducts={setProducts}
              editMode={true}
            />
          }
        />
        {/* Route for viewing product details */}
        <Route path=":id" element={<ProductDetail products={products} />} />
      </Routes>
    </div>
  );
};

export default ProductList;
