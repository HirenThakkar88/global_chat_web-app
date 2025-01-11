const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Signup Route
router.post("/SignupForm", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});


// Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});


module.exports = router;
