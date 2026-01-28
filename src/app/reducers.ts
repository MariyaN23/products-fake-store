import { combineReducers } from "redux";
import { productsReducer } from "@/features/products";
import { cartReducer } from "@/features/cart";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})
