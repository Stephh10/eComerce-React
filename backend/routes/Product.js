const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/getproduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
});

router.post("/createproduct", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.json({ error: "Products not found" });
    }
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

router.get("/getsubcategory/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ subcategory: category });
    if (products.length == 0) {
      return res.json({ message: "No products found for this subcategory" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
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
