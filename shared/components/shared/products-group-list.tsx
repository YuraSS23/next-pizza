'use client'

import React, {useEffect} from 'react';
import {cn} from "@/shared/lib/utils";
import {ProductCard, Title} from "@/shared/components/shared";
import {useIntersection} from 'react-use';
import {useCategoryStore} from "@/shared/store/category";
import {ProductWithRelations} from '@/@types/prisma';

interface Props {
    title: string;
    items: ProductWithRelations[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
                                                       title,
                                                       items,
                                                       listClassName,
                                                       categoryId,
                                                       className,
                                                   }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });
    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);
    return (
        <div className={className} id={title}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div ref={intersectionRef} className={cn('grid grid-cols-3 gap-[50px] mb-5', listClassName)}>
                {items.map((product) =>
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        ingredients={product.ingredients}
                    />
                )}
            </div>
        </div>
    );
};