import { ICategory } from "./category"

export interface IProduct {
    _id: string
    name: string,
    price: number,
    description: string,
    image: string,
    quantity: number,
    size: { id: string, name: string },
    color: { id: string, name: string },
    category_Id:ICategory
}