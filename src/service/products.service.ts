import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interface/Product"

const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    endpoints: buider => ({

        // LẤY TẤT CẢ SẢN PHẨM
        fetchProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes/shop",
        }),

        // LẤY LIMIT SẢN PHẨM
        LimitProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes?_limit=3"
        }),

        // LẤY MỘT SẢN PHẨM
        DetailProduct: buider.query({
            query: (_id) => ({ url: `shoes/${_id}` }),
        })
    })
})


export const {
    useFetchProductsQuery,
    useLimitProductsQuery,
    useDetailProductQuery
} = productAPI

export default productAPI