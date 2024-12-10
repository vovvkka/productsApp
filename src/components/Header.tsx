import {NavLink, useNavigate} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-list">
                <NavLink to="/products" className="header-logo">Products <span>App</span></NavLink>

                <Button
                    onClick={() => navigate("/create-product")}
                    type="primary"
                >
                    Создать продукт
                </Button>
            </div>
        </div>
    );
};

export default Header;