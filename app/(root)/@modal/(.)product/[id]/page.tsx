import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {ChooseProductModal} from "@/components/shared";

export default async function ProductModalPage({params: {id}}: { params: { id: number } }) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            ingredients: true,
            items: true,
        }
    });

    if (!product) {
        return notFound();
    }

    return <ChooseProductModal product={product} />
};