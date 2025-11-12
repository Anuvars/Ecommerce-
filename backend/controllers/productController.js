const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      image: req.file ? req.file.filename : "",
    });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save product", error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    const updated = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update product", error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", error: err.message });
  }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };
