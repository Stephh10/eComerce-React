const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/createproduct", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/updateproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const product = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
  console.log("good");
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
