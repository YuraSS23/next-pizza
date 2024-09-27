import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/* Фильрация */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductCard id={1} name={"22"} price={22} imageUrl={""} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
)
}
