import {describe, expect, it} from 'vitest';
import {setCurrentPage, setSearchQuery, setSelectedCategories, slice} from "./productsReducer.ts";

describe('productsReducer', () => {
    const initialState = slice.getInitialState()

    it('page number should be updated correctly', () => {
        const state = slice.reducer(initialState, setCurrentPage(5))
        expect(state.pagination.currentPage).toBe(5)
    })

    it('should filter by category correctly', () => {
        const stateWithProducts = {
            ...initialState,
            items: [
                {
                    id: 1,
                    title: 'Item A',
                    price: 100,
                    description: 'Description A',
                    category: 'electronics',
                    image: '',
                    rating: {
                        rate: 1,
                        count: 1
                    }
                },
                {
                    id: 2,
                    title: 'Item B',
                    price: 200,
                    description: 'Description B',
                    category: 'clothing',
                    image: '',
                    rating: {
                        rate: 2,
                        count: 2
                    }
                },
                {
                    id: 3,
                    title: 'Item C',
                    price: 300,
                    description: 'Description C',
                    category: 'electronics',
                    image: '',
                    rating: {
                        rate: 3,
                        count: 3
                    }
                },
            ],
        }

        const state = slice.reducer(stateWithProducts, setSelectedCategories(['electronics']))
        expect(state.filteredItems).toHaveLength(2)
        expect(state.filteredItems.every(item => item.category === 'electronics')).toBe(true)
    })

    it('should search by product title correctly', () => {
        const stateWithProducts = {
            ...initialState,
            items: [
                {
                    id: 1,
                    title: 'Item A',
                    price: 100,
                    description: 'Description A',
                    category: 'electronics',
                    image: '',
                    rating: {
                        rate: 1,
                        count: 1
                    }
                },
            ],
            filteredItems: [
                {
                    id: 1,
                    title: 'A',
                    price: 100,
                    description: 'Description A',
                    category: 'electronics',
                    image: '',
                    rating: {
                        rate: 1,
                        count: 1
                    }
                },
            ],
        }

        const state = slice.reducer(stateWithProducts, setSearchQuery('item'))
        expect(state.filteredItems).toHaveLength(1)
        expect(state.filteredItems[0].title).toBe('Item A')
    })
})
