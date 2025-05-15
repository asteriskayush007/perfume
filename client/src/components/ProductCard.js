import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product._id}`)}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description.substring(0, 60)}...</p>
        <span className="product-price">₹{product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;