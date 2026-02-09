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

cartsRouter.post("/:cid/product/:pid", async(req, res, next) =>{
    try{
        const{ cid, pid } = req.params;
        const { quantity }  = req.body;

        const updatedCart = await Cart.findByIdAndUpdate(cid, { $push: { products: { product: pid, quantity}} }, { new : true, runValidators});
    } catch (error) {
        next(error);
    }
})

export default cartsRouter ;