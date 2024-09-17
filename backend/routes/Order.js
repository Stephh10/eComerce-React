const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/createorder", async (req, res) => {
  const { token } = req.body;
  try {
    const order = new Order({
      ...req.body,
      username: token.card.name,
      email: token.email,
      address: token.card.address_line1,
    });
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

router.delete("/removeorder", async (req, res) => {
  const { id } = req.body;
  await Order.findByIdAndDelete(id);
});

module.exports = router;
