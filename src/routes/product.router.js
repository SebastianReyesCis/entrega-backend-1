import express from "express";
import Product from "../models/product.models.js";
import {getAllProducts, addProduct, setProductById, deleteProductById} from "../controlllers/products.controller.js"

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.post("/", addProduct );

productsRouter.put("/:pid", setProductById);

productsRouter.delete("/pid", deleteProductById );

export default productsRouter;