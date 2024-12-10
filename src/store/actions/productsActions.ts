import {
    fetchOneProductFailure,
    fetchOneProductRequest, fetchOneProductSuccess,
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

            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');

            const products = response.data.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                description: item.description,
                isLiked: false,
            }));

            dispatch(fetchProductsSuccess(products));
        } catch (e) {
            const errorMessage = (e as Error).message || 'Что то пошло не так...';
            dispatch(fetchProductsFailure(errorMessage));
        }
    };
};


export const fetchOneProduct = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchOneProductRequest());

            const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);

            const product:Product = {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                image: response.data.image,
                price: response.data.price,
                isLiked: false
            }

            dispatch(fetchOneProductSuccess(product));
        } catch (e) {
            const errorMessage = (e as Error).message || 'Что то пошло не так...';
            dispatch(fetchOneProductFailure(errorMessage));
        }
    };
};

