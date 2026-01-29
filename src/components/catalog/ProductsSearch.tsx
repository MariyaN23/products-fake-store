import {useProducts} from "../../hooks/useProducts.tsx";
import {useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce.ts";
import {Input} from "@heroui/react";
import {SearchIcon} from "../ui/icons/SearchIcon.tsx";

export const ProductsSearch = () => {
    const {
        searchQuery,
        onSearchChange,
    } = useProducts()
    const [inputValue, setInputValue] = useState(searchQuery)
    const debouncedValue  = useDebounce(inputValue, 1000)

    const handleValueChange = (value: string) => {
        setInputValue(value)
    }

    useEffect(() => {
        onSearchChange(debouncedValue)
    }, [debouncedValue])

    return (
        <Input
            isClearable
            label={'Search products'}
            type={'text'}
            size={'sm'}
            startContent={
                <SearchIcon/>
            }
            value={inputValue}
            onValueChange={handleValueChange}
        />
    )
}
