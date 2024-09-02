const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user.id, admin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    await user.save();
    res.json({ success: "Account created", token: token });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const correctPassword = await bcrypt.compare(password, user.password);

  const userData = { id: user.id, admin: user.isAdmin };

  if (correctPassword) {
    const token = jwt.sign(
      { id: user.id, admin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    res.json({ message: "Successfully loged in", token });
  } else {
    res.status(401).json("Wrong username or password");
  }
});

module.exports = router;
