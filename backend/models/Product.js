const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  subcategory: {
    type: String,
    default: "new",
  },
  //   image: {
  //     type: String,
  //     required: true,
  //   },
  old_price: {
    type: Number,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  avalible: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
