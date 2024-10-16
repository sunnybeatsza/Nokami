const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB (replace with your own connection string)
mongoose.connect('mongodb+srv://Admin:Nokami@nokamicluster.tx7dy.mongodb.net/?retryWrites=true&w=majority&appName=NokamiCluster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
