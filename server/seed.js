const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected');
  seedData();
}).catch(err => console.error(err));

async function seedData() {
  await Product.deleteMany(); // Clear existing data

  const sampleProducts = [
    {
      name: "Ocean Breeze",
      description: "A refreshing aquatic fragrance for daily wear.",
      price: 1299,
      sizes: ["50ml", "100ml"],
      images: [
        "https://aqualogica.in/cdn/shop/files/shoot_a938da08-e236-4451-94c3-cf8652f0cf2e.jpg?v=1726640760&width=1346",
        "https://aqualogica.in/cdn/shop/files/WhiteBG_96cb46a9-2333-4c99-b101-c6c12faec05b.jpg?v=1726640760&width=1346"
      ],
      reviews: []
    },
    {
      name: "Midnight Rose",
      description: "Romantic blend of rose and musk for special evenings.",
      price: 1499,
      sizes: ["30ml", "75ml", "100ml"],
      images: [
        "https://via.placeholder.com/200x250?text=Midnight+Rose+1",
        "https://via.placeholder.com/200x250?text=Midnight+Rose+2"
      ],
      reviews: []
    },
    {
      name: "Citrus Charm",
      description: "Energizing citrus burst perfect for summer days.",
      price: 999,
      sizes: ["50ml", "100ml"],
      images: [
        "https://via.placeholder.com/200x250?text=Citrus+Charm+1",
        "https://via.placeholder.com/200x250?text=Citrus+Charm+2"
      ],
      reviews: []
    },
    {
      name: "Woody Wonder",
      description: "Earthy and bold notes for a confident presence.",
      price: 1399,
      sizes: ["50ml", "100ml", "150ml"],
      images: [
        "https://via.placeholder.com/200x250?text=Woody+Wonder+1",
        "https://via.placeholder.com/200x250?text=Woody+Wonder+2"
      ],
      reviews: []
    },
    
  ];

  await Product.insertMany(sampleProducts);
  console.log("🌱 Sample products seeded!");
  mongoose.disconnect();
}
