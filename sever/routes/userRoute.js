import express from "express"
import { changeInfo, getOAuth } from "../Service/userService.js";
export const userRoute=express.Router();
userRoute.get("/oath",getOAuth);
userRoute.post("/changeInfo/:id",changeInfo )

