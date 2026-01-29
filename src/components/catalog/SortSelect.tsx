import {useProducts} from "../../hooks/useProducts.tsx";
import type {ChangeEvent} from "react";
import type {Sort} from "../../lib/types/Sort.ts";
import {Select, SelectItem} from "@heroui/react";

const sortingVariants = [
    {key: 'default', label: 'Featured'},
    {key: 'asc-price', label: 'Price: low to high'},
    {key: 'desc-price', label: 'Price: high to low'},
    {key: 'asc-title', label: 'Title: A to Z'},
    {key: 'desc-title', label: 'Title: Z to A'},
]

export const SortSelect = () => {
    const {
        sorting,
        onSortChange,
    } = useProducts()

    const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onSortChange(e.target.value as Sort)
    }

    return (
        <Select
            className={'max-w-64'}
            aria-label={'Products sorting'}
            selectedKeys={[sorting]}
            onChange={handleSelectionChange}
            size={'sm'}
            label={'Sort by'}
        >
            {sortingVariants.map(item => (
                <SelectItem key={item.key}>
                    {item.label}
                </SelectItem>
            ))}
        </Select>
    )
}
