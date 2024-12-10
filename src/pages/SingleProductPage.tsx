import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneProduct} from "../store/actions/productsActions.ts";
import {AppDispatch, RootState} from "../store/configureStore.ts";
import {Card, Typography, Button, Row, Col} from "antd";

const {Title, Text} = Typography;

const SingleProductPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector((state: RootState) => state.products.product);

    useEffect(() => {
        if (id) {
            dispatch(fetchOneProduct(id));
        }
    }, [id, dispatch]);


    if (!product) {
        return <div>Продукт не найден.</div>;
    }

    return (
        <div className="singleProduct">
            <Button
                onClick={() => navigate("/products")}
                type="primary"
                className="singleProduct__backButton"
            >
                Назад
            </Button>
            <div className="singleProduct__flex">
                <Card className="singleProduct__card">
                    <Row gutter={[32, 32]} align="middle">
                        <Col xs={24} md={12}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="singleProduct__image"
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="singleProduct__info">
                                <Title level={2} className="singleProduct__title">
                                    {product.title}
                                </Title>
                                <Text className="singleProduct__description">
                                    {product.description}
                                </Text>
                                <Title
                                    level={3}
                                    className="singleProduct__price"
                                >
                                    ${product.price.toFixed(2)}
                                </Title>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
};

export default SingleProductPage;