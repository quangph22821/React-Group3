import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interface/Product"
import { ICategory } from "../interface/category"

const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    tagTypes: ["product"],
    endpoints: buider => ({
        fetchProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes/shop",
            providesTags: ["product"]
        }),

        // XÓA ADMIN
        removeProducts: buider.mutation({
            query: (_id: string) => ({
                url: "/shoes/" + _id,
                method: "DELETE"
            }),
            invalidatesTags: ['product']
        }),

        // Thêm mới 
        addProducts: buider.mutation({
            query: (product: {
                name: string,
                price: number,
                image: string,
                description: string
               
            }) => ({
                url: "/shoes",
                method: "POST",
                body: product
            }),
            invalidatesTags: ['product']
        })
    })




})

export const { useFetchProductsQuery, useRemoveProductsMutation, useAddProductsMutation } = productAPI

export default productAPI