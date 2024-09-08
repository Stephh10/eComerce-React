const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/createorder", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order completed check your email for details" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getorders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
