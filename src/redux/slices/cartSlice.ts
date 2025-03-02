import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = { items: [], totalPrice: 0.00 };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.items.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            // Update total price
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);

            // Update total price
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }

            // Update total price
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        setCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;

            // Update total price
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    }
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, setCartItems } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// Selector for total quantity
export const selectTotalQuantity = (state: { cart: CartState }) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

// Selector for total price
export const selectTotalPrice = (state: { cart: CartState }) => {
    return state.cart.totalPrice;
};
