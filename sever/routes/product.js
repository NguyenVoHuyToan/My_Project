import express from "express";
import { addToCart, deleteAllCart, deleteCart, getAllBrands, getAllCart, getAllProduct, getAllTypes, getOneCart, getOneProduct, validateFunc } from "../Service/productService.js";
import { validateToken } from "../Service/validateToken.js";

export const productRoute=express.Router();

productRoute.get("/products",getAllProduct)
productRoute.get("/brands",getAllBrands)
productRoute.get("/types",getAllTypes)

productRoute.get("/products/:id",getOneProduct)
productRoute.post("/cart",validateToken,validateFunc)
productRoute.post("/cart/add",validateToken,addToCart);
productRoute.get("/carts",getAllCart)
productRoute.post("/cartOne",validateToken,getOneCart);
productRoute.post("/cart/delete/:id",validateToken,deleteCart);
productRoute.post("/cart/deleteAll",validateToken,deleteAllCart);

