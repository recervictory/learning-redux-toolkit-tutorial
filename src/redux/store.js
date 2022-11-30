import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./actions";

const store = configureStore({
    reducer: {
        cart : cartSlice
    },
})

export default store;
