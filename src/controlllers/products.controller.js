import Product from "../models/product.model.js";
import { throwHttpError } from "../utils/httpError.js";

export const getAllProducts= async(req, res, next)=> {
    try{
        const { limit =15 , page = 1 } = req.query;
        const productsData = await Product.paginate({}, {limit , page , lean: true  });
        const products = productsData.docs;
        delete productsData.docs;

        res.status(200).json({status : "success", payload : products, ...productsData });
    } catch (error){
        next(error);
    }
    
};

export const addProduct = async(req, res, next)=>{
    try {
        //lo ideal es verificar los datos con libreria "zod"
        const newProduct = await Product.create(req.body);

        res.status(201).json({status: "success", pyaload: newProduct});
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

        const deleteProduct = await Product.findByIdAndUpdate(pid);
        if (!deleteProduct) throwHttpError ("producto no encontrado", 404);

        res.status(200).json({status: "success", payload: deleteProduct});
    } catch (error){
        next(error)
    }
};