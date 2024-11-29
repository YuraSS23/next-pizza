import {Ingredient, Product, ProductItem, Category} from "@prisma/client";

export type ProductWithRelations = Product & {items: ProductItem[]; ingredients: Ingredient[]}

export type CategoryProducts = Category & {
    products: Array<Product & { items: ProductItem[] }>;
};