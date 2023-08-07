import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const getByIdCategory = async function (_id: string) {
    const res = await instance.get('/category/' + _id)
    return res.data
}