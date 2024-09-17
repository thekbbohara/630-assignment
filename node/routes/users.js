import { Router } from "express";

const UserRoute = Router();

UserRoute.get("/user", (req, res) => {
  res.end("Hello world!");
});

export default UserRoute;
