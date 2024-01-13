import express from "express";
import { addProduct } from "../Service/AdminService.js";
import { validateAdminToken } from "../Service/validateToken.js";

export const AdminRoute=express.Router();

AdminRoute.post("/",validateAdminToken,addProduct);