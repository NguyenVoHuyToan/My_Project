import express from "express";
import { getAllBrands, getAllProduct, getAllTypes, getOneProduct } from "../Service/productService.js";

export const productRoute=express.Router();

productRoute.get("/products",getAllProduct)
productRoute.get("/brands",getAllBrands)
productRoute.get("/types",getAllTypes)
productRoute.get("/products/:id",getOneProduct)
