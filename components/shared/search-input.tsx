'use client'

import React, {useEffect} from 'react';
import {cn} from "@/lib/utils";
import {Search} from "lucide-react";
import {useClickAway, useDebounce} from "react-use";
import Link from "next/link";
import {Product} from "@prisma/client";
import {Api} from "@/services/api-client";

interface Props {
    className?: string;
}

export const SearchInput : React.FC<Props> = ({className}) => {
    const ref = React.useRef(null);
    const [focused, setFocused] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [products, setProducts] = React.useState<Product[]>([]);
    useClickAway(ref, () => {
        setFocused(false);
    });
    useDebounce(
        async () => {
            const products = await Api.products.search(searchQuery);
            setProducts(products);
        },
        250,
        [searchQuery],
    );
    const onClickItem = () => {
        setProducts([]);
        setSearchQuery('');
        setFocused(false);
    };

    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
            <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11', focused && 'z-30', className)}>
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Найти пиццу..."
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {products.length > 0 && (
                    <div
                        className={cn(
                            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                            focused && 'visible opacity-100 top-12',
                        )}>
                        {products.map((product) => (
                            <Link
                                href={`/product/${product.id}`}
                                key={product.id}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                                onClick={onClickItem}
                            >
                                <img className="rounded-sm h-8 w-8"
                                     src={product.imageUrl}
                                     alt={product.name} />
                                <span>{product.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};