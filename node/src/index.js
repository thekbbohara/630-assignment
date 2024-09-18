/* imports*/
import express from "express";
import mongoose from "mongoose";
import { UserRoute } from "../routes/users.js";
import { ProfileRouter } from "../routes/profile.js";
import "dotenv/config.js";
/* init*/
const app = express();
app.use(express.json());
mongoose.connect(`${process.env.MONGODBURL}`);

/*Variables*/
const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || "0.0.0.0";
/* middlewares*/

/* routes*/
app.get("/", (_, res) => {
  res.end("hello world");
});
app.use("/", UserRoute, ProfileRouter);

/*listen*/
app.listen(PORT, HOST, () => console.log(`Running on ${HOST}:${PORT}`));
