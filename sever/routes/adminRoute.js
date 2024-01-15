import express from "express";
import { addProduct, validateFunc } from "../Service/AdminService.js";
import { validateAdminToken } from "../Service/validateToken.js";

export const AdminRoute=express.Router();

AdminRoute.post("/add",addProduct);
AdminRoute.post("/",validateAdminToken,validateFunc)