// import React from 'react';

import {useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Products from "./containers/Products.tsx";
import SingleProduct from "./containers/SingleProduct.tsx";
import Header from "./components/Header.tsx";

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/') {
            navigate("/products", {replace: true});
        }
    }, [location.pathname, navigate]);

    return (
        <>
            <Header/>
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<></>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/products/:id" element={<SingleProduct/>}/>
                    </Routes>
                </div>
            </main>
        </>

    );
};

export default App;