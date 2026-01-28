import { Product } from "@/lib/types/Product";

export interface CartItem extends Product {
    quantity: number
}
