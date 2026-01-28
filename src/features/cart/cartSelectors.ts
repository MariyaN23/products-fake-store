import { AppRootState } from "@/lib/types/App";

export const selectItems = (state: AppRootState) => state.cart.items
