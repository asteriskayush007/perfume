const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  username: String,
  rating: Number,
  comment: String,
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  sizes: String,
  images: String,
  reviews: reviewSchema,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);