import React from 'react';

import {useEffect} from "react";
import {fetchProducts} from "../store/actions/productsActions.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/configureStore.ts";
import {Row} from "antd";
import ProductCard from "../components/ProductCard.tsx";

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Row gutter={[16, 16]} justify="center">
            {products.map((product):React.ReactNode => <ProductCard product={product} key={product.id} />)}
        </Row>
    );
};

export default Products;