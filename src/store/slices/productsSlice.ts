import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "../../types/Product.ts";

interface ProductsState {
    products: Product[];
    product: Product | null;
    loading: boolean;
    error: string | null;
}

const name = 'products';

export const initialState: ProductsState = {
    products: [],
    product: null,
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
        selectProduct(state, action: PayloadAction<string>) {
            const product = state.products.find(p => p.id == action.payload.toString());

            if (product) state.product = product;
        },
        likeProduct(state, action: PayloadAction<string>) {
            const product = state.products.find(p => p.id === action.payload);

            if (product) {
                product.isLiked = !product.isLiked;
            }
        },
        createProduct(state, action: PayloadAction<Product>) {
            state.products = [...state.products, action.payload];
        },
        updateProduct(state, action: PayloadAction<Product>) {
            state.products[parseInt(action.payload.id) - 1] = action.payload;
        },
        deleteProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter((product) => product.id !== action.payload);
        }
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    selectProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    likeProduct,
} = productsSlice.actions;

export default productsSlice;
