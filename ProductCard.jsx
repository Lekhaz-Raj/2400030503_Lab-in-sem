// src/ProductCard.jsx
import React from "react";
import "./App.css"; // Optional, since styles are global

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
