import { Router } from "express";

export const ProfileRouter = Router();
ProfileRouter.get('/profile',(req,res)=>{
  res.send("Profile -> $USER")
})

