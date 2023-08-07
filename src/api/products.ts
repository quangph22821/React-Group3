import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const getByIdProduct = async function (_id: string) {
    const res = await instance.get('/shoes/' + _id)
    return res.data
}