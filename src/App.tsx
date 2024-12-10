// import React from 'react';

import {useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.tsx";
import SingleProductPage from "./pages/SingleProductPage.tsx";
import Header from "./components/Header.tsx";
import CreateProductPage from "./pages/CreateProductPage.tsx";
import {fetchProducts} from "./store/actions/productsActions.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/configureStore.ts";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') {
            navigate("/products", {replace: true});
        }
    }, [location.pathname, navigate]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<></>}/>
                        <Route path="/products" element={<ProductsPage/>}/>
                        <Route path="/products/:id" element={<SingleProductPage/>}/>
                        <Route path="/create-product" element={<CreateProductPage/>}/>
                    </Routes>
                </main>
            </div>
        </div>

    );
};

export default App;