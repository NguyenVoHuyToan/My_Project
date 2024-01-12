import express from "express"
import { getOAuth } from "../Service/userService.js";
import { loginValidator, validateRegister } from "../Service/validator.js";
import { accessTokenController } from "../Controller/accessToken-controller.js";
export const userRoute=express.Router();
userRoute.get("/oath",getOAuth);
userRoute.post("/login", loginValidator, accessTokenController);
userRoute.post("/register",validateRegister, registerMiddleware, registerController);
