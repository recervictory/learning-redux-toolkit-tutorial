import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart', 
    
    initialState: {
        cartProductsIds: []
    },
    reducers : {
        addToCart: (state, action) => {
            state.cartProductsIds = [action.payload, ...state.cartProductsIds]
        },
        removeFromCart : (state, action) => {
            const indexOfId = state.cartProductsIds.indexOf(action.payload);
            state.cartProductsIds.splice(indexOfId, 1);
        },
        clearAllItems: (state) => {
            state.cartProductsIds = []
        }

    }
})

