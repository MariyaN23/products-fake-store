import {ProductsSearch} from "./ProductsSearch.tsx";
import {SortSelect} from "./SortSelect.tsx";
import {Filters} from "./Filters.tsx";
import {ProductsSearchResults} from "./ProductsSearchResults.tsx";
import {SearchPagination} from "./SearchPagination.tsx";

export const Catalog = () => {
    return (
        <div className={'space-y-4'}>
            <div className={'flex gap-4 items-start justify-between'}>
                <ProductsSearch />
                <SortSelect />
            </div>
            <div className={'grid xl:grid-cols-[1fr_4fr] gap-4'}>
                <Filters />
                <div>
                    <ProductsSearchResults />
                    <SearchPagination />
                </div>
            </div>
        </div>
    )
}
