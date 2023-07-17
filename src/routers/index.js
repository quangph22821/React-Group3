import express from "express"
import routerProducts from "./products"
import routerCate from "./category"



const router = express.Router()

router.use("/movies",routerProducts)
router.use("/category",routerCate)


// router.use("/auth",routerAuth)
export default router