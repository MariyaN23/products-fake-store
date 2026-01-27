import { Product } from "@/lib/types/Product";
import { Button } from "@heroui/react";
import Image from "next/image";
import { formattedPrice } from "@/helpers/formattedPrice";

type Props = {
    product: Product
}

export const ProductCard = ({product}: Props) => {
    const displayedDescription = product.description.slice(0, 50)

    return (
        <a
            href={'/'}
            className={'flex flex-col gap-3 p-3 bg-white dark:bg-gray-900! rounded-xl'}
        >
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
                    <div className={'rounded-sm px-2 bg-red-100 text-red-700 text-sm'}>
                        Out of stock
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
            <Button size={'sm'} color={'primary'}>
                Add to cart
            </Button>
        </a>
    )
}
