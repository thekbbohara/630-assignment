import { model } from "mongoose";

export const UserModel = model("User", {
  uname: { type: String, required: true },
  fname: String,
  mname: String,
  lname: String,
  email: { type: String, required: [true, "email is reauired"], unique: true },
  password: { type: String, required: true },
  dob: Date,
  avatar: Buffer,
});
