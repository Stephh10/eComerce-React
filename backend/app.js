const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const userRoute = require("./routes/User");

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/", userRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(3000, () => {
  console.log("Server started");
});