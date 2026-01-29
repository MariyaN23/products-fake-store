import type {ProductRating} from "./ProductRating.ts";

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductRating
}
