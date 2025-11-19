import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Login system backend!" });
});


export default app;
