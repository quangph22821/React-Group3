
import { SearchName, addForm, updateForm } from "../models";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const getAll = async function () {
    const res = await instance.get('/shoes/shop')
    return res.data
}

export const getLimit =  async () => {
    const res = await instance.get('/shoes?_limit=3')
    return res.data
}

export const getById = async (_id:string)=>{
    const res = await instance.get('/shoes/' + _id)
    return res.data
}

export const update = (_id: string, body: updateForm) => {
    const uri = "/shoes/" + _id
    return instance.put(uri, body)
}

export const remove = (id:string) =>{
    const uri = "/shoes/" + id
    return instance.delete(uri)
} 

export const addProducts = (data:addForm) =>{
    const uri = "/shoes/"
    return instance.post(uri,data)
}


export const searchName = (data:SearchName) =>{
    const uri ="/shoes/searchName" 
    return instance.post(uri,data)
}