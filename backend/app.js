const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", orderRoute);

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server started");
});
