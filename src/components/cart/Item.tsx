import {CartItem} from "@/lib/types/CartItem";
import Image from "next/image";
import {IncreaseDecreaseButtons} from "@/components/ui/IncreaseDecreaseButtons";
import {useCart} from "@/hooks/useCart";
import {Button} from "@heroui/react";
import {formattedPrice} from "@/helpers/formattedPrice";
import {DeleteIcon} from "@/components/ui/icons/DeleteIcon";

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
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        loading={'eager'}
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
