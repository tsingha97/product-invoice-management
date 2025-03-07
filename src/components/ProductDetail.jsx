import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}
    >
      <h3>Product Details</h3>
      <p>
        <strong>Store:</strong> {product.storeName}
      </p>
      <p>
        <strong>Name:</strong> {product.productName}
      </p>
      <p>
        <strong>Description:</strong> {product.productDescription}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
    </div>
  );
};

export default ProductDetail;
