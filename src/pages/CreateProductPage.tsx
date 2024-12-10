import React from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {Product} from "../types/Product.ts";
import {AppDispatch} from "../store/configureStore.ts";
import {createProduct} from "../store/slices/productsSlice.ts";
import ProductForm from "../components/ProductForm.tsx";

interface ProductFormValues {
    title: string;
    description: string;
    price: number;
    image: string;
}

const CreateProductPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleCreate = (values: ProductFormValues) => {
        const newProduct: Product = {
            id: Date.now().toString(),
            title: values.title,
            description: values.description,
            price: values.price,
            image: values.image,
            isLiked: false,
        };

        dispatch(createProduct(newProduct));
        navigate("/products");
    };
    return (
        <div className="productForm">
            <h2 className="productForm__title">Форма создания продукта</h2>
            <ProductForm onSubmit={handleCreate} onCancel={() => navigate("/products")} />
        </div>
    );
};

export default CreateProductPage;
