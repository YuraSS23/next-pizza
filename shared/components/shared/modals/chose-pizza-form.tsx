import React from 'react';
import {cn} from "@/shared/lib/utils";
import {PizzaImage, Title} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    ingredients?: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
                                                       name,
                                                       imageUrl,
                                                       ingredients,
                                                       items,
                                                       onClickAdd,
                                                       className
                                                   }) => {
    const textDetails = '30 см, традиционное тесто 30'
    const totalPrise = 350
    const size = 30
    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imgUrl={imageUrl} size={size} />
            <div className="w-[490px] bg-[f7f6f5] p-7">
                <Title text={name} size='md' className="font-extrabold mb-1"/>
                <p className="text-gray-400">{textDetails}</p>
                <Button className="h-[55] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrise} usdt
                </Button>
            </div>
        </div>
    );
};