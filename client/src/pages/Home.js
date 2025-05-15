import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import '../styles/style.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:8000/api/products');
      console.log(res.data); // 👈 Add this line
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  

  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;