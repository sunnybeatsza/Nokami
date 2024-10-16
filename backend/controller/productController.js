const Product = require("../models/productModel");

// Create a new product
exports.create = async (req, res) => {
  try {
    const { img, img2, title, desc, isNew, oldPrice, price } = req.body;

    const newProduct = new Product({
      img,
      img2,
      title,
      desc,
      isNew,
      oldPrice,
      price,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct); // Respond with the saved product object
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Read all products
exports.readAll = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts); // Respond with the array of product objects
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Find a product by ID
exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);

    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(foundProduct); // Respond with the found product object
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Update a product by ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { img, img2, title, desc, isNew, oldPrice, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { img, img2, title, desc, isNew, oldPrice, price },
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct); // Respond with the updated product object
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Update multiple products by ID
exports.updateMultiple = async (req, res) => {
  try {
    const products = req.body; // Expect an array of product objects with id and details

    const updatedProducts = await Promise.all(
      products.map(async (product) => {
        const { id, img, img2, title, desc, isNew, oldPrice, price } = product;

        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          { img, img2, title, desc, isNew, oldPrice, price },
          { new: true } // Return the updated document
        );

        if (!updatedProduct) {
          return { id, error: "Product not found" };
        }

        return updatedProduct; // Return the updated product object
      })
    );

    res.status(200).json(updatedProducts); // Respond with the array of updated product objects
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// Delete a product by ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
