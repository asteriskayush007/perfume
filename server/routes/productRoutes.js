const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ✅ GET all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
  });

// ✅ GET product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST a review
router.post('/:id/reviews', async (req, res) => {
  const { username, rating, comment } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.reviews.push({ username, rating, comment });
    await product.save();

    res.status(201).json({ message: 'Review added!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;