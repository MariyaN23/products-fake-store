import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/types/Product";
import { Status } from "@/lib/types/Status";
import { fetchProducts } from "@/features/products/productsActions";
import { Sort } from "@/lib/types/Sort";

type InitialState = {
    items: Product[]
    filteredItems: Product[]
    status: Status
    sorting: Sort
    error: string | null
    pagination: {
        currentPage: number
        itemsPerPage: number
    }
}

const initialState: InitialState = {
    items: [],
    filteredItems: [],
    status: 'idle',
    sorting: 'default',
    error: null,
    pagination: {
        currentPage: 1,
        itemsPerPage: 12,
    },
}

const applySorting = (products: Product[], sorting: Sort): Product[] => {
    switch (sorting) {
        case 'asc':
            return products.toSorted((a, b) => a.price - b.price)
        case 'desc':
            return products.toSorted((a, b) => b.price - a.price)
        default:
            return [...products]
    }
}

export const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.pagination.currentPage = action.payload
        },
        setSortingValue: (state, action: PayloadAction<Sort>) => {
            state.sorting = action.payload
            state.filteredItems = applySorting(state.items, action.payload)
            state.pagination.currentPage = 1
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload.products
                state.filteredItems = action.payload.products
                state.pagination.currentPage = 1
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
    }
})

export const {
    setCurrentPage,
    setSortingValue,
} = slice.actions
