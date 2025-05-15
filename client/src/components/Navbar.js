import React from 'react';
import '../styles/style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Perfume Shop</h2>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;