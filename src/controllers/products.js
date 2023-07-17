import Movies from "../models/products.js"
import { productSchema } from "../schema/products.js"


export const getAll = async(req,res)=>{
    try {
        const products = await Movies.find().populate("categoryId")
        if(products.length===0){
           return res.status(400).json({
                message:"Danh sách sản phẩm trống"
            })
        }
        return res.status(200).json({
            message:"Lấy danh sách thành công",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const getDetail = async(req,res)=>{
    try {
        const product = await Movies.findById(req.params.id).populate("categoryId")
        if(!product){
            return res.status(400).json({
                message:"Không tìm thấy sản phẩm"
            })
        }
        return res.status(200).json({
            message:"Lấy thành công sản phẩm",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const add = async(req,res)=>{

    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await Movies.create(req.body)
        if(!product){
            return res.status(400).json({
                message:"Thêm khôg thành công"
            })
        }
        return res.status(200).json({
            message:"Thêm thành công",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const remove = async(req,res)=>{
    try {
        const product = await Movies.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(400).json({
                message:"Xóa không thành công"
            })
        }
        return res.status(200).json({
            message:"Xóa thành công",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const update = async(req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await Movies.findByIdAndUpdate(req.params.id,req.body)
        if(!product){
            return res.status(400).json({
                message:"Update không thành công"
            })
        }
        return res.status(200).json({
            message:"Update thành công",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message:"Lỗi server"
        })
    }
}