import { configureStore } from "@reduxjs/toolkit";
import productAPI from "./service/products.service";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import categoryAPI from "./service/category.service";
import cartService, { getTotals } from "./service/cart.service";

export const store = configureStore({
    reducer: {
        "products": productAPI.reducer,
        "categorys": categoryAPI.reducer, 
        "cart": cartService

    },
    middleware: defaultMiddleware =>
        defaultMiddleware().concat(productAPI.middleware).concat(categoryAPI.middleware)
})

setupListeners(store.dispatch)
store.dispatch(getTotals())
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch