import {CategoryProducts} from "@/@types/prisma";
import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/shared/components/shared";
import {Suspense} from "react";
import {findPizzas, GetSearchParams} from "@/shared/lib/find-pizzas";

export default async function Home( {searchParams }: { searchParams: GetSearchParams}) {
    const categories = await findPizzas(searchParams)
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar categories={
                categories.filter((category: CategoryProducts) => category.products.length > 0)
            } />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильрация */}
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters/>
                        </Suspense>
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        {categories.map((category: CategoryProducts) => (
                            category.products.length > 0 && (
                                <ProductsGroupList key={category.id}
                                                   title={category.name}
                                                   items={category.products}
                                                   categoryId={category.id} />
                            )
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}
