
import axios from "axios"
import { categoryForm, updateCategoryForm } from "../models"

const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const getAllCate = async function () {
    const res = await instance.get('/category')
    return res.data
}

export const getLimitCate = async () => {
    const res = await instance.get('/category/limit')
    return res.data
}

export const categorygetById = (_id:string)=>{
    const uri = "/category/" + _id
    return instance.get(uri)
}

export const deleteCategory = (_id : string) =>{
    const uri = "/category/" + _id
    return instance.delete(uri)
}

export const updateCategory = (_id : string, body:updateCategoryForm) =>{
    const uri = "/category/" +_id
    return instance.put(uri, body)
}

export const addCategory = (data:categoryForm) =>{
    const uri = "/category/" 
    return instance.post(uri, data)
}
