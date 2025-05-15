import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import '../styles/style.css';

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty">🛒 Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Total: ₹{totalPrice}</h3>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
