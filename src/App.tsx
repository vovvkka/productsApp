// import React from 'react';

import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/configureStore.ts";
import {useEffect} from "react";
import {fetchProducts} from "./store/actions/productsActions.ts";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Products from "./containers/Products.tsx";
import SingleProduct from "./containers/SingleProduct.tsx";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        dispatch(fetchProducts());

        if (location.pathname == '/') {
            navigate("/products", {replace: true});
        }
    }, [dispatch, location.pathname, navigate]);

    return (
        <Routes>
            <Route path="/" element={<></>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
        </Routes>
    );
};

export default App;