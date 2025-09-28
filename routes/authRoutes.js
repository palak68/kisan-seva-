// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    // Check if user email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).json({ message: 'Email already registered' });

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user with hashed password
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      userType: req.body.userType || 'user' // default userType agar na ho
    });

    await user.save();
console.log("user saved successfully");
    res.json({ message: "User registered!" });
  } catch (error) {
    console.log("signup error",error);
    res.status(500).json({ message: error.message });

  }
});

// login page

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, message: 'Login successful' });
  } catch(error) {
    res.status(500).json({ message: error.message });
  } 
});
module.exports = router;