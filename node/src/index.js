import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test630");

const User = mongoose.model("User", {
  name: String,
  isVip: Boolean,
  age: Number,
});

app.get("/", (req, res) => {
  res.end("hello world");
});
app.get("/add-user", (req, res) => {
  const newUser = new User({
    name: "kb",
    isVip: true,
    age: Math.ceil(Math.random() * 40 + 18),
  });
  newUser
    .save()
    .then(() => res.end("user Added"))
    .catch(() => {
      res.end("unsuccessful");
    });
});
app.listen(1234);
