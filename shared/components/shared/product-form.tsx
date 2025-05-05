'use client'

import React from 'react';
import {useCartStore} from "@/shared/store";
import toast from "react-hot-toast";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/shared/components/shared/modals";
import {ChooseProductForm} from "@/shared/components/shared/choose-product-form";

interface Props {
    product: ProductWithRelations
    onSubmit?: VoidFunction
}

export const ProductForm: React.FC<Props> = ({product, onSubmit: _onSubmit}) => {

    const addCartItem = useCartStore(state => state.addCartItem)
    const loading = useCartStore(state => state.loading)

    const firstItem = product.items[0]
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;
            await toast.promise(
                addCartItem({
                    productItemId: itemId,
                    ingredients,
                }),
                {
                    loading: `Добавляем ${product.name} в корзину...`, // Винительный падеж
                    success: <b>{`${product.name} добавлен${product.name.endsWith('а') ? 'а' : ''} в корзину`}</b>, // Учитываем род
                    error: <b>{`Не удалось добавить ${product.name} в корзину`}</b>, // Винительный падеж
                }
            );
            _onSubmit?.()
        } catch (error) {
            console.error(error);
        }
    };

    if (isPizzaForm) {
        return <ChoosePizzaForm imageUrl={product.imageUrl}
                                name={product.name}
                                ingredients={product.ingredients}
                                items={product.items}
                                onSubmit={onSubmit}
                                loading={loading}
        />
    }

    return <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
        />
};