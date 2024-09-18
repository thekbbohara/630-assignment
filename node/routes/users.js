import { Router } from "express";
import { UserModel } from "./../models/user.js";
export const UserRoute = Router();

UserRoute.get("/users", async (_, res) => {
  const users = await UserModel.find();
  res.json(users);
});
UserRoute.post("/register", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newUser = new UserModel(data);
    await newUser.save();
    res.status(201).send("user saved sucessfully");
  } catch (err) {
    res.status(404).send("Err saving user: " + err.message);
  }
});
