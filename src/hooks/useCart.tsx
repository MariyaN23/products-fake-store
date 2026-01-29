import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../lib/types/App.ts";
import {cartSelectors} from "../features/cart";
import type {CartItem} from "../lib/types/CartItem.ts";
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from "../features/cart/cartReducer.ts";

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
