import mongoose from "mongoose";

const productSchema= new mongoose.Schema(
    {
        title: String,
        pice: Number,
        stock: Number,
        status: {
            type: Boolean,
            default: true,
            required: false 
        }
    },
    {timestamps: true}
);

const Product = mongoose.model("product", productSchema);

export default Product;
