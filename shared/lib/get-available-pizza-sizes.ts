import {pizzaSizes, PizzaType} from "@/shared/constants/pizza";
import {ProductItem} from "@prisma/client";
import {Variant} from "@/shared/components/shared/group-variants";

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
    const filteredPizzasBySize = items.filter(item =>
        item.pizzaType === type)
    return pizzaSizes.map(item =>
        ({
            name: item.name,
            value: item.value,
            disabled: !filteredPizzasBySize.some((pizza) =>
                Number(pizza.size) === Number(item.value))
        }))
}