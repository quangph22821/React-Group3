import express from "express";
import {
 getAll,getDetail,add,update,remove
} from "../controllers/category";


const routerCate = express.Router();

routerCate.get("/",getAll);
routerCate.get("/:id",getDetail);
routerCate.post("/",add);
routerCate.put("/:id",update);
routerCate.delete("/:id",remove);

export default routerCate;