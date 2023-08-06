import axios from "axios";
import { ICart } from "../interface/cart";

const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const postCart = async function (data: ICart) {
    const res = await instance.post('/cart', data)
    return res.data
}