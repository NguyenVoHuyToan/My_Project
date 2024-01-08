import express from "express"
import { getOAuth } from "../Service/userService.js";
export const userRoute=express.Router();
userRoute.get("/oath",getOAuth);