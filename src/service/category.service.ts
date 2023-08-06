import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "../interface/category"

const categoryAPI = createApi({
    reducerPath: "categorys",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    tagTypes: ['category'],
    endpoints: buider => ({
        // ALL CATEGORY
        fetchCategory: buider.query<ICategory[], void>({
            query: (arg: void) => "/category/",
            providesTags: ["category"]
        }),

        // XÓA category
        removeCategory: buider.mutation({
            query: (_id: string) => ({
                url: "/category/" + _id,
                method: "DELETE"
            }),
            invalidatesTags: ['category']
        }),

        // Thêm mới category 
        addCategory: buider.mutation({
            query: (category: ICategory) => ({
                url: "/category",
                method: "POST",
                body: category
            }),
            invalidatesTags: ['category']
        }),

        // Sửa category
        updateCategory: buider.mutation({
            query: (category: ICategory) => ({
                url: `/category/${category._id}`,
                method: "PUT",
                body: category
            }),
            invalidatesTags: ['category']
        })
    })
})

export const {
    useFetchCategoryQuery,
    useRemoveCategoryMutation,
    useAddCategoryMutation,
    useUpdateCategoryMutation } = categoryAPI

export default categoryAPI