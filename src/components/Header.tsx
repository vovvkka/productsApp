import {NavLink} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    return (
        <div className="header">
            <div className="header-list">
                <NavLink to="/products" className="header-logo">Products <span>App</span></NavLink>

                <Button>Create</Button>
            </div>
        </div>
    );
};

export default Header;