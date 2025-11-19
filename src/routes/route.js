import { Router } from "express";
import { User } from "../models/user.model.js";


const router = Router();

// Register route
router.post("/register", async (req, res) => {
  try {
    const { email, ...rest } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ email, ...rest });
    await newUser.save();

    // console.log("New user registered:", newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});



export default router;