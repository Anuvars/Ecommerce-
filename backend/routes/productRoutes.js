const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addProduct);           // POST /api/products/add
router.get("/", getProducts);                                      // GET /api/products/
router.put("/update/:id", upload.single("image"), updateProduct);  // PUT /api/products/update/:id
router.delete("/delete/:id", deleteProduct);                       // DELETE /api/products/delete/:id

module.exports = router;
