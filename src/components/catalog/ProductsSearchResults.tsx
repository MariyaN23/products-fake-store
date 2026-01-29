import {ProductCard} from "./ProductCard.tsx";
import {useProducts} from "../../hooks/useProducts.tsx";
import {Spinner} from "@heroui/react";

export const ProductsSearchResults = () => {
    const {
        products,
        status,
        error,
    } = useProducts()

    if (status === 'loading') {
        return (
            <Spinner/>
        )
    }

    if (status === 'failed') {
        return (
            <div className={'text-gray-600'}>
                Error: {error}
            </div>
        )
    }

    if (status === 'succeeded') {
        return (
            <div className={'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
                {products.length ? products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                )) : (
                    <div className={'xl:col-span-4 flex flex-col items-center text-center'}>
                        <h2 className={'text-lg font-semibold'}>
                            Nothing was found
                        </h2>
                        <p className={'max-w-md text-gray-600'}>
                            Try changing filters or specify different parameters
                        </p>
                    </div>
                )}
            </div>
        )
    }
}
