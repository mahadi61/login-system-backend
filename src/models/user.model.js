import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: String,
  email: { type: String, required: true, unique: true },
  gender: String,
  dob: Date,
  password: { type: String, required: true },
});


export  const User = model("User", userSchema);
