import { Router } from "express";
import { User } from "../models/user.model.js";


const router = Router();

// Register route
router.post("/register", async (req, res) => {
  try {
    const payload = req.body;
    const { email } = payload;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User(payload);
    await newUser.save();


    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({error: error, message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const { password: _, ...userWithoutPassword } = user.toObject();
    
    // Success
    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error, message: "Server error" });
  }
});

// Get all users
router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });

    res.status(200).json({
      message: "All users fetched successfully",
      users: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error, message: "Server error" });
  }
});


export default router;