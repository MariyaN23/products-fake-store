import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import type {AppDispatch} from "../lib/types/App.ts";
import {productsSelectors} from "../features/products";
import {fetchProducts} from "../features/products/productsActions.ts";
import {
    setCurrentPage,
    setSearchQuery,
    setSelectedCategories,
    setSortingValue
} from "../features/products/productsReducer.ts";
import type {Sort} from "../lib/types/Sort.ts";

export function useProducts() {
    const dispatch = useDispatch<AppDispatch>()
    const products = useSelector(productsSelectors.selectPaginatedProducts)
    const status = useSelector(productsSelectors.selectStatus)
    const error = useSelector(productsSelectors.selectError)
    const currentPage = useSelector(productsSelectors.selectCurrentPage)
    const totalPages = useSelector(productsSelectors.selectTotalPages)
    const sorting = useSelector(productsSelectors.selectSorting)
    const categories = useSelector(productsSelectors.selectCategories)
    const filterCategories = useSelector(productsSelectors.selectFilterCategories)
    const searchQuery = useSelector(productsSelectors.selectSearchQuery)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const onPageChange = (newPage: number) => {
        dispatch(setCurrentPage(newPage))
    }

    const onSortChange = (value: Sort) => {
        dispatch(setSortingValue(value))
    }

    const onCategoriesChange = (updatedCategories: string[]) => {
        dispatch(setSelectedCategories(updatedCategories))
    }

    const onClearCategories = () => {
        dispatch(setSelectedCategories([]))
    }

    const onSearchChange = (value: string) => {
        dispatch(setSearchQuery(value))
    }

    return {
        products,
        status,
        error,
        currentPage,
        totalPages,
        sorting,
        categories,
        filterCategories,
        searchQuery,
        onPageChange,
        onSortChange,
        onCategoriesChange,
        onClearCategories,
        onSearchChange,
    }
}
