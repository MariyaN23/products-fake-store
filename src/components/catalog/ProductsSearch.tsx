"use client"
import { Input } from "@heroui/input";
import { SearchIcon } from "@heroui/shared-icons";
import { useProducts } from "@/hooks/useProducts";

export const ProductsSearch = () => {
    const {
        searchQuery,
        onSearchChange,
    } = useProducts()

    return (
        <Input
            isClearable
            label={'Search products'}
            type={'text'}
            size={'sm'}
            startContent={
                <SearchIcon/>
            }
            value={searchQuery}
            onValueChange={onSearchChange}
        />
    )
}
