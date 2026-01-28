"use client"
import { useCart } from "@/hooks/useCart";

export const Cart = () => {
    const {
        items,
    } = useCart()

    return (
        <div>
            {items.length ? items.map((item) => (
                <div key={item.id}>
                </div>
            )) : (
                <div>
                    Cart is empty
                </div>
            )}
        </div>
    )
}
