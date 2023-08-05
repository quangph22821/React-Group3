import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interface/Product"

const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    endpoints: buider => ({
        fetchProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes/shop"
        })
    })

    
})

export const {useFetchProductsQuery} = productAPI

export default productAPI