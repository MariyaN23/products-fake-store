import {instance} from "./index.ts";
import type {Product} from "../types/Product.ts";

export const productsApi = {
    getProducts() {
        return instance.get<Product[]>('products')
    },
}
