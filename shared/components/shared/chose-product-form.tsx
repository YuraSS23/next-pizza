import React from 'react';
import {cn} from "@/shared/lib/utils";
import {Title} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    onSubmit?: VoidFunction;
    className?: string;
}

/**
 * Форма выбора ПРОДУКТА
 */
export const ChooseProductForm: React.FC<Props> = ({
                                                       name,
                                                       price,
                                                       imageUrl,
                                                       onSubmit,
                                                       className
                                                   }) => {
    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
                <img
                    src={imageUrl}
                    alt={name}
                    className={cn('relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]')}
                />
            </div>
            <div className="w-[490px] bg-[f7f6f5] p-7">
                <Title text={name} size='md' className="font-extrabold mb-1"/>
                <Button onClick={onSubmit} className="h-[55] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {price} руб.
                </Button>
            </div>
        </div>
    );
};