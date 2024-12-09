// import React from 'react';

import {useEffect} from "react";
import {fetchProducts} from "../store/actions/productsActions.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/configureStore.ts";

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            hello
        </div>
    );
};

export default Products;