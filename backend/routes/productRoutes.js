const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Create a new product
router.post('/create', productController.create);

// Read all products
router.get('/', productController.readAll);

// Read a single product by ID
router.get('/:id', productController.readOne);

// Update a product by ID
router.put('/:id', productController.update);

// Update multiple products
router.put('/multiple', productController.updateMultiple);

// Delete a product by ID
router.delete('/:id', productController.delete);

module.exports = router;
