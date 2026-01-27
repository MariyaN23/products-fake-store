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
    categories: string[]
    filterCategories: string[]
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
}

const getUniqueCategories = (products: Product[]): string[] => {
    const categoriesSet = new Set<string>()
    products.forEach(product => categoriesSet.add(product.category))
    return Array.from(categoriesSet).sort()
}

const applyCategories = (products: Product[], categories: string[]): Product[] => {
    if (categories.length === 0) return products

    return products.filter(product => categories.includes(product.category))
}

const applySorting = (products: Product[], sorting: Sort): Product[] => {
    switch (sorting) {
        case 'asc-price':
            return products.toSorted((a, b) => a.price - b.price)
        case 'desc-price':
            return products.toSorted((a, b) => b.price - a.price)
        case 'asc-title':
            return products.toSorted((a, b) => a.title.localeCompare(b.title))
        case 'desc-title':
            return products.toSorted((a, b) => b.title.localeCompare(a.title))
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
            const filtered = applyCategories(state.items, state.filterCategories)
            state.filteredItems = applySorting(filtered, action.payload)
            state.pagination.currentPage = 1
        },
        setSelectedCategories: (state, action: PayloadAction<string[]>) => {
            state.filterCategories = action.payload
            const filtered = applyCategories(state.items, action.payload)
            state.filteredItems = applySorting(filtered, state.sorting)
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
                state.categories = getUniqueCategories(action.payload.products)
                state.filterCategories = []
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
    setSelectedCategories,
} = slice.actions
