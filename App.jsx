import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "HP Laptop",
      price: "₹58,000",
      details: "HP Pavilion 14, Intel i5, 8GB RAM, 512GB SSD",
    },
    {
      name: "Dell Inspiron",
      price: "₹65,000",
      details: "Dell Inspiron 15, Ryzen 5, 16GB RAM, 1TB HDD",
    },
    {
      name: "Data Structures Book",
      price: "₹650",
      details: "Learn DSA with examples and problem-solving techniques.",
    },
    {
      name: "Python Programming",
      price: "₹500",
      details: "Comprehensive guide to Python for beginners.",
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>KLU Store</h1>
        <p>Your one-stop shop for laptops, books, and more!</p>
      </header>

      <div className="product-list">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            product={item}
            onClick={() => setSelectedProduct(item)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
