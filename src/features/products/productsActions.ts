import { createAsyncThunk } from "@reduxjs/toolkit";
import {productsApi} from "../../lib/api/productsApi.ts";

export const fetchProductsAndCategories = createAsyncThunk('products/fetchProductsAndCategories', async (_, {
    rejectWithValue
}) => {
    try {
        const [productsResponse, categoriesResponse] = await Promise.all([
            productsApi.getProducts(),
            productsApi.getCategories()
        ])

        return {
            products: productsResponse.data,
            categories: categoriesResponse.data
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            const axiosError = error as { response?: { data?: { message?: string } } }
            return rejectWithValue(
                axiosError.response?.data?.message ||
                error.message ||
                'Some error occurred'
            )
        }
        return rejectWithValue('Some error occurred while fetching data')
    }
})
