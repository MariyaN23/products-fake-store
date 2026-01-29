import type {CartItem} from "../../lib/types/CartItem.ts";
import {useCart} from "../../hooks/useCart.tsx";
import {formattedPrice} from "../../helpers/formattedPrice.ts";
import {IncreaseDecreaseButtons} from "../ui/IncreaseDecreaseButtons.tsx";
import {Button} from "@heroui/react";
import {DeleteIcon} from "../ui/icons/DeleteIcon.tsx";

type Props = {
    item: CartItem
}

export const Item = ({item}: Props) => {
    const {
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
    } = useCart()

    const handleIncrementCount = () => {
        increaseItemQuantity(item.id)
    }
    const handleDecrementCount = () => {
        decreaseItemQuantity(item.id)
    }

    const handleRemoveProduct = () => {
        removeItemFromCart(item.id)
    }

    return (
        <div className={'bg-gray-200 dark:bg-gray-900 rounded-xl p-3 flex justify-between'}>
            <div className={'flex items-center gap-4'}>
                <div className={'relative flex justify-center items-center w-32 h-32'}>
                    <img
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className={'w-full h-full object-contain'}
                    />
                </div>
                <div className={'flex flex-col justify-between gap-3'}>
                    <p>{item.title}</p>
                    <p>Price per item: <span>{formattedPrice(item.price)} $</span></p>
                    <IncreaseDecreaseButtons
                        actions={{
                            increase: handleIncrementCount,
                            decrease: handleDecrementCount,
                        }}
                        count={item.quantity}
                    />
                </div>
            </div>
            <Button
                isIconOnly
                variant="flat"
                aria-label={'Delete item from cart'}
                onPress={handleRemoveProduct}
            >
                <DeleteIcon/>
            </Button>
        </div>
    )
}
