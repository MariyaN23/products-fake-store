"use client"
import { useCart } from "@/hooks/useCart";
import {Item} from "@/components/cart/Item";
import {formattedPrice} from "@/helpers/formattedPrice";

export const Cart = () => {
    const {
        items,
        totalPrice,
    } = useCart()

    return (
        <div className={'grid md:grid-cols-3 gap-16'}>
            <div className={'md:col-span-2 space-y-3'}>
                {items.length ? items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                )) : (
                    <div>
                        Cart is empty
                    </div>
                )}
            </div>
            <div>
                <p className={'font-bold text-lg'}>
                    Total price:
                </p>
                <span>
                    {formattedPrice(totalPrice)} $
                </span>
            </div>
        </div>
    )
}
