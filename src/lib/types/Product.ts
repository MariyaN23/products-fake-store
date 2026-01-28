import {ProductRating} from "@/lib/types/ProductRating";

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductRating
}
