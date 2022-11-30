import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl)
    return response.json()
})

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        fetchStatus: '',
    },
    reducers : {},
    extraReducers: (builder) =>{
        builder
            .addCase(
                fetchAllProducts.fulfilled,(state, action) => {
                state.data = action.payload;
                state.fetchStatus = 'success'
            })
            .addCase(fetchAllProducts.pending,(state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAllProducts.rejected,(state, action) => {
                state.fetchStatus = 'error'
            })
    }
})


