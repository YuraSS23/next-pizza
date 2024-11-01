import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage} from "@/components/shared";

export default async function ProductPage({params: {id}}: { params: { id: number } }) {
    const product = await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <ProductImage imgUrl={product.imageUrl} />
            <button>Product {product.name}</button>
        </Container>
    );
};