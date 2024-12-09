import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from "../../types/Product.ts";

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const name = 'products';

export const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchProductsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice;
