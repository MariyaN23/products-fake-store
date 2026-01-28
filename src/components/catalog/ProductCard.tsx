import {Product} from "@/lib/types/Product";
import {Button} from "@heroui/react";
import Image from "next/image";
import {formattedPrice} from "@/helpers/formattedPrice";
import {IncreaseDecreaseButtons} from "@/components/ui/IncreaseDecreaseButtons";
import {useCart} from "@/hooks/useCart";

type Props = {
    product: Product
}

export const ProductCard = ({product}: Props) => {
    const {
        addToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity,
    } = useCart()

    const quantity = getItemQuantity(product.id)
    const displayedDescription = product.description.slice(0, 50)
    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
        })
    }

    const handleIncrementCount = () => {
        increaseItemQuantity(product.id)
    }
    const handleDecrementCount = () => {
        decreaseItemQuantity(product.id)
    }

    return (
        <div className={'flex flex-col items-center gap-3 p-3 bg-gray-200 dark:bg-gray-900 rounded-xl'}>
            <div className={'relative flex justify-center items-center w-48 h-48'}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={115}
                    height={115}
                    loading={'eager'}
                    className={'w-full h-full object-contain'}
                />
                <div className={'absolute bottom-1 left-1'}>
                    <div className={'rounded-sm px-2 bg-green-100 text-green-700 text-sm'}>
                        In stock
                    </div>
                </div>
            </div>
            <div className={'flex-1'}>
                <div className={'font-bold text-sm'}>
                    {formattedPrice(product.price)} $
                </div>
                <p className={'hyphens-auto'}>
                    {product.title}
                </p>
                <p className={'text-gray-600 text-xs'}>
                    {displayedDescription}...
                </p>
            </div>
            <div className={'w-full flex items-center justify-between gap-2'}>
                <Button
                    fullWidth
                    size={'sm'}
                    color={'primary'}
                    onPress={handleAddToCart}
                >
                    Add to cart
                </Button>
                {quantity > 0 && (
                    <IncreaseDecreaseButtons
                        actions={{
                            increase: handleIncrementCount,
                            decrease: handleDecrementCount,
                        }}
                        count={quantity}
                    />
                )}
            </div>
        </div>
    )
}
