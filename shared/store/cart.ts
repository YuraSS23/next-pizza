import {create} from "zustand";
import {Api} from "@/shared/services/api-client";
import {getCartDetails} from "@/shared/lib";
import {CartStateItem} from "@/shared/lib/get-cart-details";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    /* Получение товаров из корзины */
    fetchCartItems: () => Promise<void>;

    /* Запрос на обновление количества товара */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /* Запрос на добавление товара в корзину */
    // TODO: Типизировать values
    addCartItems: (values: any) => Promise<void>;

    /* Запрос на удаление товара из корзины */
    removeCartItems: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data))
        } catch (error) {
            console.log(error);
            set({error: true});
        } finally {
            set({loading: false});
        }
    },

    updateItemQuantity: async (id: number, quantity: number) => {},

    addCartItems: async (values: any) => {},

    removeCartItems: async (id: number) => {},
}))