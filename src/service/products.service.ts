import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interface/Product"

const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    tagTypes: ["product"],
    endpoints: buider => ({

        // LẤY TẤT CẢ SẢN PHẨM
        fetchProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes/shop",
            providesTags: ["product"]
        }),

        // LẤY LIMIT SẢN PHẨM
        LimitProducts: buider.query<IProduct[], void>({
            query: (arg: void) => "/shoes?_limit=3"
        }),

        // LẤY MỘT SẢN PHẨM
        DetailProduct: buider.query({
            query: (_id) => ({ url: `shoes/${_id}` }),
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
        }),

        // SỬA SẢN PHẨM
        updateProduct: buider.mutation({
            query: (product: IProduct) => ({
                url: `/shoes/${product._id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['product']
        })
    })




})

export const {
    useFetchProductsQuery,
    useRemoveProductsMutation,
    useAddProductsMutation,
    useDetailProductQuery,
    useLimitProductsQuery,
    useUpdateProductMutation 
 } = productAPI

export default productAPI