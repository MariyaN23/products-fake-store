import {useProducts} from "../../hooks/useProducts.tsx";
import {Accordion, AccordionItem, Button, Checkbox, CheckboxGroup, Skeleton} from "@heroui/react";

export const Filters = () => {
    const {
        status,
        categories,
        filterCategories,
        onCategoriesChange,
        onClearCategories,
    } = useProducts()

    if (status === 'loading') {
        return (
            <Skeleton className="rounded-lg h-60"/>
        )
    }

    if (status === 'succeeded') {
        return (
            <div className={'bg-gray-200 dark:bg-gray-900 rounded-xl h-fit'}>
                <Accordion
                    selectionMode={'multiple'}
                    defaultSelectedKeys={'all'}
                >
                    <AccordionItem
                        key={'category'}
                        aria-label={'category'}
                        title={'Category'}
                        classNames={{
                            title: 'font-semibold',
                        }}
                    >
                        <CheckboxGroup
                            value={filterCategories || []}
                            onValueChange={(values) => onCategoriesChange(values)}
                        >
                            {categories.map(item => (
                                <Checkbox
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </AccordionItem>
                </Accordion>
                <div className={'sticky bg-gray-200 dark:bg-gray-900 rounded-b-xl bottom-0 p-2'}>
                    <Button
                        type={'reset'}
                        onPress={onClearCategories}
                        className={'w-full'}
                        color={'primary'}
                        variant={'flat'}
                    >
                        Reset all
                    </Button>
                </div>
            </div>
        )
    }
}
