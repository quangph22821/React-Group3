import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import Users from "../models/user.js"
import { signupSchema } from "../schema/users"

dotenv.config()
export const signup = async(req,res)=>{
    try {
        const{error} = signupSchema.validate(req.body,{abortEarly:false})
        if(error){
            const errors = error.details.map((err)=> err.message)
            return res.status(400).json({
                message:errors
            })
        }

        const userOne = await Users.findOne({email:req.body.email})
        if(userOne){
            return res.status(400).json({
                message:"Email đã tồn tại"
            })
        }

        const handPass = await bcrypt.hash(req.body.password)
        user.password=undefined
        const user = await Users.create({
            ...req.body,
            password:handPass
        })
        return  res.status(200).json({
            message:"Tạo tài khoản thành công",
            user
        })
    } catch (error) {
        
    }
}

export const signin = async(req,res)=>{

}