import express from "express"
import routerProducts from "./products"
import routerCate from "./category"
import routerAuth from "./auth"
import routerCart from "./cart"

const router = express.Router()

router.use("/shoes",routerProducts)
router.use("/category",routerCate)
router.use("/auth",routerAuth)
router.use("/cart",routerCart)



export default router