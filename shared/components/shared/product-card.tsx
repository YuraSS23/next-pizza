import React from 'react';
import Link from "next/link";
import {Title} from "./title";
import {Button} from "@/shared/components/ui";
import {Plus} from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({id, name, price, imageUrl, className}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center items-center p-6 bg-secondary rounded-lg aspect-square">
                    <img
                        className="w-full h-full max-w-[85%] max-h-[85%] object-cover"
                        src={imageUrl}
                        alt={name}
                    />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>

                <p className="text-sm text-gray-400">
                    Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} руб.</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};