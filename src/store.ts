import { configureStore } from "@reduxjs/toolkit";
import { shoesReducer } from "./pages/shoes/shoes.reducer";
import { categoryReducer } from "./pages/shoes/category.reducer";

export const store = configureStore({
    reducer: {
        shoess: shoesReducer,
        category: categoryReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch