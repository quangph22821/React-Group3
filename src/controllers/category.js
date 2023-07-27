import Category from "../models/category.js"
import { categorySchema } from "../schema/category.js"


export const getAll = async(req,res)=>{
    try {
        const category = await Category.find()
        if(category.length===0){
           return res.status(400).json({
                message:"Danh sách sản phẩm trống"
            })
        }
        return res.status(200).json({
            message:"Lấy danh sách thành công",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const getCateLimit = async(req,res)=>{
    try {
        const category = await Category.find().limit(3)
        if(category.length===0){
           return res.status(400).json({
                message:"Danh sách sản phẩm trống"
            })
        }
        return res.status(200).json({
            message:"Lấy danh sách thành công",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const getDetail = async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if(!category){
            return res.status(400).json({
                message:"Không tìm thấy sản phẩm"
            })
        }
        return res.status(200).json({
            message:"Lấy thành công sản phẩm",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const add = async(req,res)=>{

    try {
        const {error} = categorySchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const category = await Category.create(req.body)
        if(!category){
            return res.status(400).json({
                message:"Thêm khôg thành công"
            })
        }
        return res.status(200).json({
            message:"Thêm thành công",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const remove = async(req,res)=>{
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        if(!category){
            return res.status(400).json({
                message:"Xóa không thành công"
            })
        }
        return res.status(200).json({
            message:"Xóa thành công",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}

export const update = async(req,res)=>{
    try {
        // const {error} = categorySchema.validate(req.body)
        // if(error){
        //     return res.status(400).json({
        //         message: error.details[0].message
        //     })
        // }
        const category = await Category.findByIdAndUpdate(req.params.id,req.body)
        if(!category){
            return res.status(400).json({
                message:"Update không thành công"
            })
        }
        return res.status(200).json({
            message:"Update thành công",
            data: category
        })
    } catch (error) {
        return res.status(400).json({
            message:"Lỗi server"
        })
    }
}