import express from "express"
import { changeInfo, deleteUnit, getOAuth, getUserDetail } from "../Service/userService.js";
import { loginValidator, validateRegister } from "../Service/validator.js";
import { accessTokenController } from "../Controller/accessToken-controller.js";
import { registerController } from "../Controller/validateControrller.js";
import { validateToken } from "../Service/validateToken.js";
export const userRoute=express.Router();
userRoute.get("/oauth",getOAuth);
userRoute.post("/login", loginValidator, accessTokenController);
userRoute.post("/register",validateRegister,registerController)
userRoute.put("/changeInfo/:id",validateToken,changeInfo )
userRoute.post("/getMe",validateToken,getUserDetail)
userRoute.post("/delete/:id",validateToken,deleteUnit)