import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Perfume Shop</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li> {/* ✅ Fix this */}
      </ul>
    </nav>
  );
}

export default Navbar;
