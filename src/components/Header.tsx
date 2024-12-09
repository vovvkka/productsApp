// import React from 'react';
import {NavLink} from "react-router-dom";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-list">
                    <NavLink to="/products" className="header-logo">ProductsApp</NavLink>

                    <Input
                        placeholder=""
                        prefix={<SearchOutlined/>}
                        className="header-search"
                    />

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Header;