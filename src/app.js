import express from "express";
import productsRouter from "./routes/product.router.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv"; 
import __dirname from "../dirname.js";
import { errorHandler } from "./middlewares/error.middlewares.js";
import cartsRouter from "./routes/carts.router.js";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

//inicio de variables de entorno7

dotenv.config({ path: __dirname + "/.env"});

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 8080 ;


connectMongoDB();

// hANDLEBARS CONFIG
app.engine("handlebars",engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/src/views");

//endpoint :)

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

app.use(errorHandler);

app.listen(PORT, () =>{
    console.log("servidor iniciado correctamente");
});