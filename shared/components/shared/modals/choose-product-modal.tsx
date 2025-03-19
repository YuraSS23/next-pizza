'use client'

import React from 'react';
import {Dialog, DialogContent} from "@/shared/components/ui";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";
import {ProductWithRelations} from "@/@types/prisma";
import {useCartStore} from "@/shared/store";

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter();
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(product.items[0].pizzaType)
    const addCartItem = useCartStore(state => state.addCartItem)
    const onAddProduct = () => {
        addCartItem({
            productItemId: firstItem.id
        })
    }
    const onAddPizza = (productItemId: number, ingredients: number[]) => {
        addCartItem({
            productItemId,
            ingredients,
        })
    }
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={
                cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)
            }>
                {isPizzaForm ? <ChoosePizzaForm imageUrl={product.imageUrl}
                                                name={product.name}
                                                ingredients={product.ingredients}
                                                items={product.items}
                                                onSubmit={onAddPizza}
                    />
                    : <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        onSubmit={onAddProduct}
                        price={firstItem.price}
                    />}
            </DialogContent>
        </Dialog>
    );
};