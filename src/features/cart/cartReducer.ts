import { CartItem } from "@/lib/types/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    items: CartItem[]
    totalQuantity: number
    totalPrice: number
}

const loadStateFromLocalStorage = (): InitialState => {
    const initialState = {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    }
    if (typeof window === 'undefined') return initialState

    const state = localStorage.getItem('cart')
    if (!state) {
        localStorage.setItem('cart', JSON.stringify(initialState))
        return initialState
    }
    return JSON.parse(state)
}

const initialState = loadStateFromLocalStorage()

export const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
            state.totalQuantity += action.payload.quantity
            state.totalPrice = parseFloat((state.totalPrice + action.payload.price * action.payload.quantity).toFixed(2))
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                const item = state.items[index]
                state.totalQuantity -= item.quantity
                state.totalPrice = parseFloat((state.totalPrice - item.price * item.quantity).toFixed(2))
                state.items.splice(index, 1)
                localStorage.setItem('cart', JSON.stringify(state))
            }
        },
        updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if (item) {
                const quantityDiff = action.payload.quantity - item.quantity
                state.totalPrice = parseFloat((state.totalPrice + quantityDiff * item.price).toFixed(2))
                state.totalPrice += quantityDiff * item.price
                item.quantity = action.payload.quantity
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== action.payload.id)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
    },
})

export const {
    addItem,
    removeItem,
    updateQuantity,
} = slice.actions
