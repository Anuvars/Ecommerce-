const express = require("express");
const router = express.Router();

// Import middlewares correctly
const { protect, isAdmin } = require("../middleware/auth");

// Import controller
const orderController = require("../controllers/orderController");

// Sync orders from client localStorage
router.post("/sync", protect, orderController.syncOrders);

// Admin fetch all orders
router.get("/", protect, isAdmin, orderController.getOrders);

// Admin update order status
router.put("/:id", protect, isAdmin, orderController.updateOrderStatus);

// Client fetch their own orders
router.get("/myorders", protect, orderController.getMyOrders);

module.exports = router;
