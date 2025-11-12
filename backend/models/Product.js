const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  strikedPrice: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  image: { type: String } // stores uploaded filename
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
