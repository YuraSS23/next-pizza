import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильрация */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <ProductsGroupList title="Пиццы" items={[
                            {
                                id: 1,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 2,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 3,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 4,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 5,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 6,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 7,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 8,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 9,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 10,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            }
                        ]} categoryId={1} />
                        <ProductsGroupList title="Завтрак" items={[
                            {
                                id: 1,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 2,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 3,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 4,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 5,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 6,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 7,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 8,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 9,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            },
                            {
                                id: 10,
                                name: "Чоризо фреш",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif',
                                price: 500,
                                items: [{price:500}]
                            }
                        ]} categoryId={2} />
                    </div>
                </div>
            </Container>
        </>
    )
}
