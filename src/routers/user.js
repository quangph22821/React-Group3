import express from "express"
import { signup } from "../controllers/user"

const routerAuth = express.Router()

routerAuth.post("/signup",signup)

export default routerAuth