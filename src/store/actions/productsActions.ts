import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
} from "../slices/productsSlice";
import { Product } from '../../types/Product';
import axios from "axios";
import {Dispatch} from "redux";

type AppDispatch = Dispatch;

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchProductsRequest());

            const response = await axios.get<Product[]>('/api/products');

            dispatch(fetchProductsSuccess({products: response.data}));
        } catch (e) {
            const errorMessage = (e as Error).message || 'Что то пошло не так...';
            dispatch(fetchProductsFailure(errorMessage));
        }
    };
};
