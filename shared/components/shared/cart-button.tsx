'use client'

import React from 'react';
import {Button} from "@/shared/components/ui";
import {ArrowRight, ShoppingCart} from "lucide-react";
import {cn} from "@/shared/lib/utils";
import {CartDrawer} from "@/shared/components/shared/cart-drawer";
import {useCartStore} from "@/shared/store";

interface Props {
    className?: string
}

export const CartButton: React.FC<Props> = ({className}) => {
    const totalAmount = useCartStore(state => state.totalAmount)
    const loading = useCartStore(state => state.loading)
    const countCartItems = useCartStore(state => state.items.length)
    return (
        <CartDrawer>
            <Button loading={loading} className={cn('group relative', {'w-[105px]': loading}, className)}>
                <b>{totalAmount} руб.</b>
                <span className="h-full w-[1px] bg-white/30 mx-3"/>
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart size={16} className="relative"/>
                    <b>{countCartItems}</b>
                </div>
                <ArrowRight size={20}
                            className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
            </Button>
        </CartDrawer>
    );
};