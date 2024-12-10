import React from 'react';
import {Card, Col} from "antd";
import {Product} from "../types/Product.ts";
import {DeleteFilled, HeartFilled, HeartOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/configureStore.ts";
import {deleteProduct, likeProduct} from "../store/slices/productsSlice.ts";

const {Meta} = Card;

const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({product}: ProductCardProps): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>();

    const handlerDelete: React.MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(product.id));
    };

    const handlerLike: React.MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault();
        dispatch(likeProduct(product.id));
    };

    return (
        <Col xs={24} sm={12} md={8} lg={6}>
            <div className="product-card">
                <NavLink to={`/products/${product.id}`}>
                    <Card
                        hoverable
                        style={{width: "100%"}}
                        cover={<img alt="example" style={{height: 300}} src={product.image}/>}
                    >
                        <Meta
                            title={product.title}
                            description={<div className="product-card__description">{truncateText(product.description, 40)}</div>}
                        />

                        <div className="product-card__info">
                        <p className="product-card__price">$ {product.price}</p>
                            <div>
                                {
                                    product.isLiked ?
                                        <HeartFilled className="heart-icon" onClick={handlerLike}/> :
                                        <HeartOutlined className="heart-icon heart-icon-outlined" onClick={handlerLike}/>
                                }

                                <DeleteFilled className="delete-icon" onClick={handlerDelete}/>
                            </div>
                        </div>
                    </Card>
                </NavLink>
            </div>

        </Col>

    );
};

export default ProductCard;