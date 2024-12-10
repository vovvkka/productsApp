import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/configureStore.ts";
import {updateProduct} from "../store/slices/productsSlice.ts";
import ProductForm, { ProductFormValues } from "../components/ProductForm";
import { Product } from "../types/Product.ts";

const EditProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const product = useSelector((state: RootState) =>
        state.products.products.find((prod) => prod.id.toString() === id?.toString())
    );

    if (!product) {
        return <h3>Продукт не найден</h3>;
    }

    const handleUpdate = (values: ProductFormValues) => {
        const updatedProduct: Product = {
            ...product,
            ...values,
        };

        dispatch(updateProduct(updatedProduct));
        navigate("/products");
    };

    return (
        <div className="productForm">
            <h2 className="productForm__title">Редактировать продукт</h2>
            <ProductForm
                initialValues={{
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                }}
                onSubmit={handleUpdate}
                onCancel={() => navigate("/products")}
                isEditing={true}
            />
        </div>
    );
};

export default EditProductPage;
