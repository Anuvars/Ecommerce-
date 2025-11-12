const Order = require("../models/Order");

// Sync client orders to backend
exports.syncOrders = async (req, res) => {
  const { orders } = req.body;
  try {
    const savedOrders = [];
    for (const o of orders) {
      const order = await Order.create({
        user: req.user._id,
        products: o.products.map(p => ({ product: p.product, quantity: p.quantity })),
        totalPrice: o.totalPrice,
        status: o.status || "Pending",
      });
      savedOrders.push(order);
    }
    res.json(savedOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to sync orders" });
  }
};

// Admin fetch all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product", "name price");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// Admin update status
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.status = req.body.status || order.status;
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update order status" });
  }
};

// Client fetch their orders (optional)
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("products.product", "name price")
      .populate("user", "name email");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch your orders" });
  }
};
