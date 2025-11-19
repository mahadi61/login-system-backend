import cors from "cors";
import express from "express";
import router from "./routes/route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Login system backend!" });
});


export default app;