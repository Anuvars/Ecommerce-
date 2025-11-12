const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// --------------------
// Middleware
// --------------------
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve image files

// --------------------
// Import Routes
// --------------------
const authRoutes = require('./routes/auth'); // keep as is
const productRoutes = require('./routes/productRoutes'); // includes multer for image upload
const orderRoutes = require('./routes/orders'); // keep as is

// --------------------
// Mount API Routes
// --------------------
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // POST/PUT with image handled inside
app.use('/api/orders', orderRoutes);

// --------------------
// MongoDB Connection
// --------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
