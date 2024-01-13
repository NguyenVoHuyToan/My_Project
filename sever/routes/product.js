import express from "express";
import { addToCart, getAllBrands, getAllCart, getAllProduct, getAllTypes, getOneProduct } from "../Service/productService.js";
import { validateToken } from "../Service/validateToken.js";

export const productRoute=express.Router();

productRoute.get("/products",getAllProduct)
productRoute.get("/brands",getAllBrands)
productRoute.get("/types",getAllTypes)

productRoute.get("/products/:id",getOneProduct)
productRoute.post("/cart",addToCart)
productRoute.get("/carts",getAllCart)


