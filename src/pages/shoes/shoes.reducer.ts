import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models";
import { getAll, getLimit } from "../../api/product";

const initialState = {
    shoess: [],
    isLoading: false,
} as { shoess: IProduct[], isLoading: boolean }

export const fetchShoes = createAsyncThunk("shoes/fetch", async (arg, thunkAIP) => {
    try {
        const { data } = await getAll()
        return data
    } catch (error: any) {
        return thunkAIP.rejectWithValue(error.message)
    }

})

export const LimitShoes = createAsyncThunk("shoes/limit", async (arg, thunkAIP) => {
    try {
        const { data } = await getLimit()
        return data
    } catch (error: any) {
        return thunkAIP.rejectWithValue(error.message)
    }

})

const shoesSlice = createSlice({
    name: "shoes",
    initialState: initialState,
    reducers: {

    },

    extraReducers: (buider) => {
        // Get All
        buider.addCase(fetchShoes.pending, (state) => {
            state.isLoading = true
        })
        buider.addCase(fetchShoes.fulfilled, (state, action) => {
            state.shoess = action.payload
        })
        buider.addCase(fetchShoes.rejected, (state) => {
            state.isLoading = false
        })

        // Get Limit

        buider.addCase(LimitShoes.pending, (state) => {
            state.isLoading = true
        })
        buider.addCase(LimitShoes.fulfilled, (state, action) => {
            state.shoess = action.payload
        })
        buider.addCase(LimitShoes.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const shoesReducer = shoesSlice.reducer