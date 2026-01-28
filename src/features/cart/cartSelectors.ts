import { AppRootState } from "@/lib/types/App";

export const selectItems = (state: AppRootState) => state.cart.items
export const selectTotalPrice = (state: AppRootState) => state.cart.totalPrice
