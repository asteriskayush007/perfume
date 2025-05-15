const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const corsOptions = {
    origin: '*', // allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  };
  
app.use(cors(corsOptions));
  
app.use(express.json());

// 🐞 Debug Middleware (write this here)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false
  })
})

// Server start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
