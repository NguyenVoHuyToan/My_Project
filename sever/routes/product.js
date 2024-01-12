import express from "express";
import { addToCart, getAllBrands, getAllProduct, getAllTypes, getOneBrands, getOneProduct } from "../Service/productService.js";

export const productRoute=express.Router();

productRoute.get("/products",getAllProduct)
productRoute.get("/brands",getAllBrands)
productRoute.get("/types",getAllTypes)
productRoute.get("/products/:id",getOneProduct)
productRoute.post("/cart/:id",addToCart)


