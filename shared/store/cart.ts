export type ICartItem = {
    id: number;
    quantity: number;
    name: string;
    image_url: string;
    price: number;
    pizzaSize?: number | null;
    type?: number | null;
    ingredients: Array<{ name: string; price: number}>
}

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: ICartItem[];
    fetchCartItems: () => Promise<void>;
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
    addCartItems: (values: any) => Promise<void>;
    removeCartItems: (id: number) => Promise<void>;
}