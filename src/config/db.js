import mongoose from "mongoose";






const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.URI_MONGODB);
        console.log("conectado")
    } catch (error) {
        console.error ("error", error.message);
        process.exit(1);
    }
};

export default connectMongoDB;