import { configureStore } from "@reduxjs/toolkit";
import {cartSlice, productSlice} from "./actions";

export const store = configureStore({
    reducer: {
        cart : cartSlice.reducer,
        products: productSlice.reducer
    },
})


