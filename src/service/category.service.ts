import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "../interface/category"

const categoryAPI = createApi({
    reducerPath: "cateogorys",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088"
    }),
    endpoints: buider => ({
        fetchCategory: buider.query<ICategory[], void>({
            query: (arg: void) => "/category"
        }),

        LimitCategory: buider.query<ICategory[], void>({
            query: (arg: void) => "/category?_limit=3"
        })
    })


})

export const {
    useFetchCategoryQuery,
    useLimitCategoryQuery
} = categoryAPI

export default categoryAPI