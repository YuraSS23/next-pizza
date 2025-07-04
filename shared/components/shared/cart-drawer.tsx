'use client'

import React from 'react';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from "next/link";
import {Button} from "@/shared/components/ui";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {CartDrawerItem} from "@/shared/components/shared/cart-drawer-item";
import {getCartItemDetails} from "@/shared/lib";
import {useCartStore} from "@/shared/store";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";
import Image from "next/image";
import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/lib/utils";

interface Props {
    className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {
    /*const [totalAmount, fetchCartItems, items] = useCartStore(state => { return [
        state.totalAmount,
        state.fetchCartItems,
        state.items
    ]});*/

    const fetchCartItems = useCartStore(state => state.fetchCartItems)
    const items = useCartStore(state => state.items)
    const totalAmount = useCartStore(state => state.totalAmount)
    const updateItemQuantity = useCartStore(state => state.updateItemQuantity)
    const removeCartItem = useCartStore(state => state.removeCartItem)

    React.useEffect(() => {
        fetchCartItems()
    }, []);


    const getItemWord = (count: number) => {
        if (count % 10 === 1 && count % 100 !== 11) {
            return 'товар';
        } else if (
            (count % 10 >= 2 && count % 10 <= 4) &&
            (count % 100 < 10 || count % 100 >= 20)
        ) {
            return 'товара';
        } else {
            return 'товаров';
        }
    };

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
        updateItemQuantity(id, newQuantity)
    }


    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                    <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
                        {!totalAmount && (
                            <div className="flex flex-col items-center justify-center w-72 mx-auto">
                                <Image src="/assets/images/empty-box.png" alt="Empty cart" width={120} height={120}/>
                                <Title size="sm" text="Корзина пустая" className="text-center font-bold my-2"/>
                                <p className="text-center text-neutral-500 mb-5">
                                    Добавьте хотя бы одну пиццу, чтобы совершить заказ
                                </p>
                                <SheetClose>
                                    <Button className="w-56 h-12 text-base" size='lg'>
                                        <ArrowLeft className="w-5 mr-2"/>
                                        Вернуться назад
                                    </Button>
                                </SheetClose>
                            </div>
                        )}

                        {totalAmount > 0 && (<>
                            <SheetHeader>
                                <SheetTitle>
                                    В корзине <span className="font-bold">{items.length} {getItemWord(items.length)}</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="-mx-6 mt-5 overflow-auto flex-1">
                                {items.map((item) => (
                                    <div key={item.id}
                                         className="mb-2">
                                        <CartDrawerItem id={item.id}
                                                        imageUrl={item.imageUrl}
                                                        details={item.pizzaSize && item.pizzaType
                                                            ? getCartItemDetails(
                                                                item.ingredients,
                                                                item.pizzaType as PizzaType,
                                                                item.pizzaSize as PizzaSize,
                                                            )
                                                            : ""
                                                        }
                                                        name={item.name}
                                                        price={item.price}
                                                        quantity={item.quantity}
                                                        disabled={item.disabled}
                                                        onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
                                                        onClickRemove={() => removeCartItem(item.id)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <SheetFooter className="-mx-6 bg-white p-8">
                                <div className="w-full">
                                    <div className="flex mb-4">
                                <span className="flex flex-1 text-lg text-neutral-500">
                                    Итого
                                    <div
                                        className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
                                </span>

                                        <span>{totalAmount} руб.</span>
                                    </div>
                                    <Link href="/cart">
                                        <Button
                                            type="submit"
                                            className="w-full h-12 text-base">
                                            Оформить заказ
                                            <ArrowRight className="w-5 ml-2"/>
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </>)}
                    </div>


                </SheetContent>
            </Sheet>
        </div>
    );
};