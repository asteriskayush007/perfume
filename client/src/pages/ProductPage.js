import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/style.css';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = existingCart.find(item => item._id === product._id);
  
    if (!itemExists) {
      const newCart = [...existingCart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert(`${product.name} added to cart`);
    } else {
      alert(`${product.name} is already in the cart`);
    }
  };
  

  if (!product) {
    return (
      <div className="product-page">
        <p className="loading">Loading product details...</p>
      </div>
    );
  }
  

  return (
    <div className="product-page-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back to Home
      </button>

      <div className="product-detail-card">
        {/* Image carousel if multiple images */}
        <div className="product-detail-images">
          {product.images?.length > 0 ? (
            product.images.map((img, index) => (
              <img key={index} src={img} alt={`product-${index}`} className="product-detail-image" />
            ))
          ) : (
            <img
              src="https://img.freepik.com/free-vector/elegant-perfume-label-template-design_742173-19543.jpg?semt=ais_hybrid&w=740"
              alt="Default"
              className="product-detail-image"
            />
          )}
        </div>

        <div className="product-detail-info">
          <h2>{product.name}</h2>

          <p className="product-full-description">{product.description}</p>

          <span className="product-detail-price">Price: ₹{product.price?.$numberInt || product.price}</span>

          <div className="product-sizes">
            <strong>Sizes Available:</strong>
            <ul>
              {product.sizes?.map((size, index) => (
                <li key={index}>{product.size}</li>
              ))}
            </ul>
          </div>

          <div className="product-reviews">
            <strong>Reviews:</strong>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, idx) => (
                <p key={idx} className="review-text">- {review}</p>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <button className="add-to-cart-button" onClick={addToCart}>
  🛒 Add to Cart
</button>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;
