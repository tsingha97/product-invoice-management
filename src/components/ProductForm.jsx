import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductForm = ({ products, setProducts, editMode = false }) => {
  // Get the product ID from the URL parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize form state with default values
  const [formData, setFormData] = useState({
    id: "",
    storeName: "",
    productName: "",
    productDescription: "",
    price: "",
  });

  // If in edit mode, populate the form with existing product data
  useEffect(() => {
    if (editMode && id) {
      const productToEdit = products.find((p) => p.id === id);
      if (productToEdit) {
        setFormData(productToEdit);
      }
    }
  }, [editMode, id, products]);

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for adding or updating a product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update the existing product in the list
      const updatedProducts = products.map((p) => (p.id === id ? formData : p));
      setProducts(updatedProducts);
    } else {
      // Add a new product with a unique ID
      const newProduct = { ...formData, id: Date.now().toString() };
      setProducts([...products, newProduct]);
    }
    // Redirect back to the product list page
    navigate("/products");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{editMode ? "Edit Product" : "Add New Product"}</h3>
      <form onSubmit={handleSubmit}>
        {/* Input field for Store Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>Store Name: </label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Input field for Product Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>Product Name: </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Textarea for Product Description */}
        <div style={{ marginBottom: "10px" }}>
          <label>Description: </label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Input field for Product Price */}
        <div style={{ marginBottom: "10px" }}>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        {/* Submit button */}
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
