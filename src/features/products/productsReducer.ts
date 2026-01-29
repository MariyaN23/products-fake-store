import type {Product} from "../../lib/types/Product.ts";
import type {Status} from "../../lib/types/Status.ts";
import type {Sort} from "../../lib/types/Sort.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchProductsAndCategories} from "./productsActions.ts";

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
    categories: string[]
    filterCategories: string[]
    searchQuery: string
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
    categories: [],
    filterCategories: [],
    searchQuery: '',
}

const applyAllFilters = (
    products: Product[],
    searchQuery: string,
    categories: string[],
    sorting: Sort
): Product[] => {
    let filtered = [...products]

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(query)
        )
    }

    if (categories.length > 0) {
        filtered = filtered.filter(product =>
            categories.includes(product.category)
        )
    }

    switch (sorting) {
        case 'asc-price':
            return filtered.sort((a, b) => a.price - b.price)
        case 'desc-price':
            return filtered.sort((a, b) => b.price - a.price)
        case 'asc-title':
            return filtered.sort((a, b) => a.title.localeCompare(b.title))
        case 'desc-title':
            return filtered.sort((a, b) => b.title.localeCompare(a.title))
        default:
            return filtered
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
            state.filteredItems = applyAllFilters(
                state.items,
                state.searchQuery,
                state.filterCategories,
                action.payload
            )
            state.pagination.currentPage = 1
        },
        setSelectedCategories: (state, action: PayloadAction<string[]>) => {
            state.filterCategories = action.payload
            state.filteredItems = applyAllFilters(
                state.items,
                state.searchQuery,
                action.payload,
                state.sorting
            )
            state.pagination.currentPage = 1
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
            state.filteredItems = applyAllFilters(
                state.items,
                action.payload,
                state.filterCategories,
                state.sorting
            )
            state.pagination.currentPage = 1
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProductsAndCategories.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchProductsAndCategories.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload.products
                state.filteredItems = action.payload.products
                state.categories = action.payload.categories
                state.filterCategories = []
                state.pagination.currentPage = 1
            })
            .addCase(fetchProductsAndCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
    }
})

export const {
    setCurrentPage,
    setSortingValue,
    setSelectedCategories,
    setSearchQuery,
} = slice.actions
