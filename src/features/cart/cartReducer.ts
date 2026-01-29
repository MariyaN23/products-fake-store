import type {CartItem} from "../../lib/types/CartItem.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    items: CartItem[]
    totalPrice: number
}

const saveStateToLocalStorage = (state: InitialState) => {
    localStorage.setItem('cart', JSON.stringify(state))
}

const loadStateFromLocalStorage = (): InitialState => {
    const initialState = {
        items: [],
        totalPrice: 0,
    }

    const state = localStorage.getItem('cart')
    if (!state) {
        saveStateToLocalStorage(initialState)
        return initialState
    }
    return JSON.parse(state)
}

const calculateTotalPrice = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
}

const initialState = loadStateFromLocalStorage()

export const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity += newItem.quantity
            } else {
                state.items.push(newItem)
            }
            state.totalPrice = calculateTotalPrice(state.items)
            saveStateToLocalStorage(state)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
            state.totalPrice = calculateTotalPrice(state.items)
            saveStateToLocalStorage(state)
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)
            if (item) {
                item.quantity += 1
                state.totalPrice = calculateTotalPrice(state.items)
                saveStateToLocalStorage(state)
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload
            const itemIndex = state.items.findIndex(item => item.id === itemId)

            if (itemIndex !== -1) {
                const item = state.items[itemIndex]
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.items.splice(itemIndex, 1)
                }
                state.totalPrice = calculateTotalPrice(state.items)
                saveStateToLocalStorage(state)
            }
        },
    },
})

export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
} = slice.actions
