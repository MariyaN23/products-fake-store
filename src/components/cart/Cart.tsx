import {useCart} from "../../hooks/useCart.tsx";
import {Item} from "./Item.tsx";
import {formattedPrice} from "../../helpers/formattedPrice.ts";

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
            {items.length > 0 && (
                <div>
                    <p className={'font-bold text-lg'}>
                        Total price:
                    </p>
                    <span>{formattedPrice(totalPrice)} $</span>
                </div>
            )}
        </div>
    )
}
