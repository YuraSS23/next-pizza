import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage, Title} from "@/components/shared";
import {GroupVariants} from "@/components/shared/group-variants";

export default async function ProductPage({params: {id}}: { params: { id: number } }) {
    const product = await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage imgUrl={product.imageUrl} size={40}/>

                <div className="w-[490px] bg-[#F7F6F5] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1"/>

                    <GroupVariants
                        selectedValue='2'
                        items={[
                        {
                            name: 'Маленькая',
                            value: "1"
                        },
                        {
                            name: 'Средняя',
                            value: "2"
                        },
                        {
                            name: 'Большая',
                            value: "3",
                            disabled: true,
                        }
                    ]}/>

                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, at atque
                        beatae cupiditate dolorum eaque, exercitationem, harum iure modi mollitia nobis odit officiis
                        quam quia quo ratione recusandae ut vel.</p>

                </div>
            </div>
        </Container>
    );
};