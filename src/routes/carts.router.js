import express from "express";
import Cart from "../models/carts.model.js";


const cartsRouter = express.Router();

cartRouter.post("/", async(req, res , next) => {
    try {
        const cart = await Cart.create({});
        res.status(201).json({ status: "success", payload : cart});

    } catch (error) {
        next(error);

    }
});

export default cartsRouter ;