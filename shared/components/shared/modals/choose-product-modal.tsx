'use client'

import React from 'react';
import {Dialog, DialogContent} from "@/shared/components/ui";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";
import {ProductWithRelations} from "@/@types/prisma";
import {useCartStore} from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter();
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(product.items[0].pizzaType)
    const addCartItem = useCartStore(state => state.addCartItem)
    const loading = useCartStore(state => state.loading)
    /*const handleAddToCart =
        async (itemData: any, loadingMessage: string, successMessage: string, errorMessage: string) => {
            try {
                await toast.promise(
                    addCartItem(itemData),
                    {
                        loading: loadingMessage,
                        success: <b>{successMessage}</b>,
                        error: <b>{errorMessage}</b>,
                    }
                );
                router.back();
            } catch (error) {
                console.error(error);
            }
        };
    const onAddProduct = () => {
        handleAddToCart(
            {productItemId: firstItem.id},
            'Продукт добавляется в корзину...',
            'Продукт добавлен в корзину',
            'Не удалось добавить продукт в корзину'
        );
    };
    const onAddPizza = (productItemId: number, ingredients: number[]) => {
        handleAddToCart(
            {productItemId, ingredients},
            'Добавляем пиццу в корзину...',
            'Пицца добавлена в корзину',
            'Не удалось добавить пиццу в корзину'
        );
    };*/

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
            router.back();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={
                cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)
            }>
                {isPizzaForm ? <ChoosePizzaForm imageUrl={product.imageUrl}
                                                name={product.name}
                                                ingredients={product.ingredients}
                                                items={product.items}
                                                onSubmit={onSubmit}
                                                loading={loading}
                    />
                    : <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        onSubmit={onSubmit}
                        price={firstItem.price}
                        loading={loading}
                    />}
            </DialogContent>
        </Dialog>
    );
};