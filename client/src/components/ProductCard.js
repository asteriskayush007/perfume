import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    addToCart(product);

    // ✅ Toast notification
    toast.success(`${product.name} added to cart!`);

    // ✅ Optional animation (can be done in CSS if needed)
    const btn = e.currentTarget;
    btn.classList.add("btn-clicked");
    setTimeout(() => btn.classList.remove("btn-clicked"), 300);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img
        src={
          product.pic?.[0] ||
          "https://img.freepik.com/free-vector/elegant-perfume-label-template-design_742173-19543.jpg?semt=ais_hybrid&w=740"
        }
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">
          {product.description.substring(0, 60)}...
        </p>
        <span className="product-price">₹{product.price}</span>
        <button
          onClick={handleAddToCartClick}
          className="banner-button animated-button"
          style={{ marginTop: "10px" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
