import Product from "../models/product.models";
import { throwHttpError } from "../utils/httpError";

export const getAllProducts= async(req, res, next)=> {
    try{
        const products = await Product.find().lean();

        res.status(200).json({status : "success", payload : products});
    } catch (error){
        next(erro);
    }
    
};

export const addProduct = async(req, res, next)=>{
    try {
        const{ title, price, stock} =req.body;

        const newProduct = await Product.create({title,price,stock});

        res.status(201),json({status: "success", pyaload: newProduct});
    } catch (error) {
        next(error);
    }
};

export const setProductById = async(req, res, next) =>{
    try{
        const pid = req.params.pid;
        const updateData = res.body;

        const updateProduct= await Product.findByIdAndUpdate(pid, updateData, { new: true, runValidators: true  });
        if(!updateProduct) throwHttpError ("producto no encontrado", 404);
        //if(updateProduct) return res.status(404).json({ status: "error", message: "producto no encontrado"});
        res.status(200).json({status: "success", payload: updateProduct });
    }catch(error){
        next(error)
    }
};

export const deleteProductById = async (req, res,next)=> {
    try {
        const pid = req.params.pid;

        const deleteProduct = await product.findByIdAndUpdate(pid);
        if (!deleteProduct) throwHttpError ("producto no encontrado", 404);

        res.status(200).json({status: "success", payload: deleteProduct});
    } catch (error){
        next(error)
    }
};