// src/ProductModal.jsx
import React from "react";
import "./App.css"; // Optional, styles are already global

function ProductModal({ product, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> {product.price}</p>
        <p>{product.details}</p>
      </div>
    </div>
  );
}

export default ProductModal;
