import express from "express"
import routerProducts from "./products"
import routerCate from "./category"
import routerAuth from "./auth"

const router = express.Router()

router.use("/shoes",routerProducts)
router.use("/category",routerCate)
router.use("/auth",routerAuth)



export default router