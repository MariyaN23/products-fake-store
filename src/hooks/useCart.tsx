"use client"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/types/App";
import { cartSelectors } from "@/features/cart";
import { addItem, removeItem, updateQuantity } from "@/features/cart/cartReducer";
import { CartItem } from "@/lib/types/CartItem";

export function useCart() {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector(cartSelectors.selectItems)

    const addToCart = (item: CartItem) => {
        dispatch(addItem(item))
    }

    const updateItemQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }))
    }

    const removeItemFromCart = (id: number) => {
        dispatch(removeItem(id))
    }

    const getItemQuantity = (productId: number): number => {
        const item = items.find(item => item.id === productId)
        return item ? item.quantity : 0
    }

    return {
        items,
        addToCart,
        updateItemQuantity,
        removeItemFromCart,
        getItemQuantity,
    }
}
