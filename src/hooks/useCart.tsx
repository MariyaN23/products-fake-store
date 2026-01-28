"use client"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/types/App";
import { cartSelectors } from "@/features/cart";
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from "@/features/cart/cartReducer";
import { CartItem } from "@/lib/types/CartItem";
import {useEffect} from "react";

export function useCart() {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector(cartSelectors.selectItems)
    const totalPrice = useSelector(cartSelectors.selectTotalPrice)

    const addToCart = (item: CartItem) => {
        dispatch(addItem(item))
    }

    const removeItemFromCart = (id: number) => {
        dispatch(removeItem(id))
    }

    const increaseItemQuantity = (id: number) => {
        dispatch(increaseQuantity(id))
    }

    const decreaseItemQuantity = (id: number) => {
        dispatch(decreaseQuantity(id))
    }

    const getItemQuantity = (id: number): number => {
        const item = items.find(item => item.id === id)
        return item ? item.quantity : 0
    }

    useEffect(() => {

    }, [])

    return {
        items,
        totalPrice,
        addToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity,
    }
}
