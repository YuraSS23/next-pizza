import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductForm} from "@/shared/components/shared";
import {cn} from "@/shared/lib/utils";

export default async function ProductPage({params: {id}}: { params: { id: number } }) {

    const product = await prisma.product.findFirst({
        where: {id: Number(id)}, include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        }
                    }
                }
            },
            items: true,
        }
    });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className={
                cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden")
            }>
                <ProductForm product={product}/>
            </div>
        </Container>
    );
};