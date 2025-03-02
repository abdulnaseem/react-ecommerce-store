import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import checkoutReducer from './slices/checkoutSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        checkout: checkoutReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;