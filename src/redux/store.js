import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions";

export const store = configureStore({
    reducer: {
        cart : cartSlice.reducer,
    },
})


