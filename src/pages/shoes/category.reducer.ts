import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models";
import { getAllCate, getLimitCate } from "../../api/category";

const initialState = {
    category: [],
    isLoading: false,
} as { category: ICategory[], isLoading: boolean }

export const fetchCate = createAsyncThunk("category/fetch", async (arg, thunkAIP) => {
    try {
        const { data } = await getAllCate()
        return data
    } catch (error: any) {
        return thunkAIP.rejectWithValue(error.message)
    }

})

export const LimitCate = createAsyncThunk("category/limit", async (arg, thunkAIP) => {
    try {
        const { data } = await getLimitCate()
        return data
    } catch (error: any) {
        return thunkAIP.rejectWithValue(error.message)
    }

})

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {

    },

    extraReducers: (buider) => {
        // Get All
        buider.addCase(fetchCate.pending, (state) => {
            state.isLoading = true
        })
        buider.addCase(fetchCate.fulfilled, (state, action) => {
            state.category = action.payload
        })
        buider.addCase(fetchCate.rejected, (state) => {
            state.isLoading = false
        })

        // Get Limit
        buider.addCase(LimitCate.pending, (state) => {
            state.isLoading = true
        })
        buider.addCase(LimitCate.fulfilled, (state, action) => {
            state.category = action.payload
        })
        buider.addCase(LimitCate.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const categoryReducer = categorySlice.reducer