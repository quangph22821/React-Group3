import express from "express"
import { add, getAll, getDetail, remove, searchNamePro, update } from "../controllers/products"

const routerProducts = express.Router()

routerProducts.get("/",getAll)
routerProducts.get("/:id",getDetail)
routerProducts.post("/",add)
routerProducts.delete("/:id",remove)
routerProducts.put("/:id",update)
routerProducts.post("/searchName",searchNamePro)

export default routerProducts