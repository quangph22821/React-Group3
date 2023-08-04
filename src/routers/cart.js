import express from "express";
import { addToCart, deleteProductCart, getCarts, getOneCart } from "../controllers/cart";
// import { authenticate } from "../middlewares/authenticate";

const routerCart = express.Router();

routerCart.get("/:id", getOneCart);
routerCart.get("/", getCarts);
routerCart.post("/add", addToCart);
routerCart.delete("/delete/:productId", deleteProductCart);

export default routerCart;