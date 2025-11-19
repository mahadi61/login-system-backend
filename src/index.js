import mongoose from "mongoose";
import app from "./app.js";

let server;

const startServer = async () => {
  try {
    await mongoose.connect(`mongodb+srv://libraryDB:libraryDB@cluster0.2ev6cf0.mongodb.net/login-system?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Connected to MongoDB");

    server = app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

startServer();